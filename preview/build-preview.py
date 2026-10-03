"""Build offline, self-contained HTML previews. Source files remain editable."""
from pathlib import Path
import base64
import json
import re

ROOT = Path(__file__).resolve().parent
ASSET_DIR = ROOT / 'assets'
ASSET_DIR.mkdir(exist_ok=True)
asset_map = {p.stem: str(p) for p in ASSET_DIR.iterdir() if p.suffix in ('.avif', '.webp', '.jpg')}

def data_uri(path, mime):
    return 'data:' + mime + ';base64,' + base64.b64encode(Path(path).read_bytes()).decode()

assets = {}
for key, path in asset_map.items():
    mime = 'image/avif' if path.endswith('.avif') else 'image/webp' if path.endswith('.webp') else 'image/jpeg'
    assets[key] = data_uri(path, mime)
    local = ASSET_DIR / (key + ('.avif' if mime == 'image/avif' else '.webp' if mime == 'image/webp' else '.jpg'))
    local.write_bytes(Path(path).read_bytes())

# Code-native product illustrations for categories without supplied photos.
illustrations = {
    'microwave': '<rect x="15" y="45" width="170" height="110" rx="12"/><rect x="28" y="58" width="112" height="82" rx="5" fill="#c9c7c3"/><path d="M149 57v86M153 114h20M153 125h20"/><circle cx="164" cy="77" r="10"/>',
    'soundbar': '<rect x="8" y="102" width="148" height="27" rx="7"/><path d="M19 113h126"/><rect x="162" y="46" width="31" height="95" rx="5"/><circle cx="178" cy="110" r="9"/>',
    'speaker': '<rect x="56" y="28" width="88" height="146" rx="14"/><path d="M75 28V16h50v12"/><circle cx="100" cy="81" r="27"/><circle cx="100" cy="141" r="20"/><path d="M74 43h52"/>',
    'washerdryer': '<rect x="62" y="7" width="76" height="187" rx="7"/><path d="M62 99h76M72 24h57M72 113h57"/><circle cx="100" cy="62" r="25" fill="#cfcdc9"/><circle cx="100" cy="153" r="25" fill="#cfcdc9"/>',
    'dryer': '<rect x="39" y="22" width="122" height="156" rx="10"/><path d="M40 51h120M52 38h38"/><circle cx="140" cy="38" r="6"/><circle cx="100" cy="111" r="43" fill="#cfcdc9"/><circle cx="100" cy="111" r="32" fill="#eceae7"/>',
    'dehumidifier': '<rect x="53" y="25" width="94" height="150" rx="15"/><path d="M70 25v-9h60v9M64 132h72M71 54h59M71 65h59M71 76h59M71 87h59"/><circle cx="100" cy="151" r="8"/>'
}
for key, shapes in illustrations.items():
    svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g stroke="#76736d" stroke-width="2.5" fill="#e7e4de" stroke-linecap="round" stroke-linejoin="round">' + shapes + '</g></svg>'
    (ASSET_DIR / (key + '.svg')).write_text(svg)
    assets[key] = 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode()).decode()

fonts = ''
for weight, filename in [(400, 'Regular'), (500, 'Medium'), (600, 'SemiBold'), (700, 'Bold')]:
    output = ASSET_DIR / f'montserrat-{weight}.woff'
    if not output.exists():
        from fontTools.ttLib import TTFont
        from fontTools.subset import Subsetter, Options
        font = TTFont('/Users/macbuce/Library/Fonts/Montserrat-' + filename + '.ttf')
        options = Options()
        options.layout_features = ['*']
        subset = Subsetter(options=options)
        subset.populate(unicodes=list(range(0, 0x250)) + list(range(0x1e00, 0x1f00)) + list(range(0x2000, 0x2070)) + [0x20ab, 0x2212, 0x2713, 0x2192])
        subset.subset(font)
        font.flavor = 'woff'
        font.save(output)
    fonts += "@font-face{font-family:'Montserrat';font-style:normal;font-weight:" + str(weight) + ";font-display:swap;src:url('" + data_uri(output, 'font/woff') + "') format('woff')}\n"

css = '\n'.join((ROOT / filename).read_text() for filename in ('miniapp.css', 'flow.css', 'consultation.css'))
data = (ROOT / 'catalog-data.js').read_text()
if (ROOT / 'catalog-full.js').exists():
    full = (ROOT / 'catalog-full.js').read_text()
    data += '\n' + full
    records = json.loads(re.search(r'window.LG_FULL_CATALOG_DATA\s*=\s*(\[[\s\S]*?\]);', full).group(1))
    used = {'logo'}
    for product in records:
        used.add(product['imageKey'])
        used.update(product['galleryKeys'])
    assets = {key: value for key, value in assets.items() if key in used}
js = (ROOT / 'miniapp.js').read_text()
font_license = (ASSET_DIR / 'Montserrat-OFL.txt').read_text()
routes = {
    'home.html': '/home',
    'products.html': '/products',
    'product.html': '/product/dish',
    'checkout.html': '/checkout/dish?step=1',
    'consultation.html': '/consult/dish',
    'subscribe.html': '/checkout/dish?step=1',
}
for filename, route in routes.items():
    html = f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#a50034">
<meta name="description" content="LG Subscribe MiniApp — bản xem trước thiết kế dành cho điện thoại.">
<title>LG Subscribe · MiniApp</title>
<style>{fonts}\n{css}</style>
</head>
<body>
<script type="text/plain" id="font-license">{font_license}</script>
<div class="app" id="app"></div>
<div class="overlay" id="sheet-root" hidden></div>
<div class="toast" id="toast" role="status" aria-live="polite" hidden></div>
<aside class="preview-ribbon"><strong>LG Subscribe</strong>Showroom direction · v3<br>Montserrat · LG brand palette</aside>
<noscript><p style="padding:24px;text-align:center">Bật JavaScript để trải nghiệm bản xem trước MiniApp.</p></noscript>
<script>window.LG_ASSETS={json.dumps(assets, ensure_ascii=False)};window.LG_DEFAULT_ROUTE={json.dumps(route)};</script>
<script>{data}</script>
<script>{js}</script>
</body>
</html>'''
    (ROOT / filename).write_text(html)
    print(filename, len(html.encode()), 'bytes')
