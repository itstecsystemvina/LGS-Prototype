# LG Subscribe MiniApp preview

Open **home.html** to explore the complete demo. **products.html**, **product.html**, and **subscribe.html** open directly at the catalog, dishwasher detail, and registration form. Each HTML file includes its fonts, images, styles, scripts, and catalog, so it works without a server or internet connection.

The design uses Montserrat and [LG’s official palette](https://www.lg.com/global/our-identity/color/): Active Red `#FD312E`, Heritage Red `#A50034`, Warm Grey `#F0ECE4`, white, and black. The home page leads with manually controlled campaign banners. Product types lead straight to lists with contextual filters. Product details show monthly terms and the total before a three-step consultation request.

The catalog contains 88 customer products across 13 product types. LG category IDs and labels come from **Product level**, columns **I:N**, in the supplied workbook: file levels 2, 3, and 4 become canonical levels 1, 2, and 3. Prices and contract totals come from **Total MiniApp**. Seven AC component pairs appear as seven customer products while retaining both component paths. Full source rows and mappings are in **taxonomy-mapping.json**.

Four products have unresolved `#N/A` category lookups in the workbook: MD16GQSE0, MD19GQGE0, DVHP50M, and STAGE301. Their mappings remain unresolved and registration follows the source’s availability notes. The source workbook was read using its saved formula results and was not modified.

Some product photographs represent a product family; these are labeled as illustrations. Missing measurements stay blank. Campaign copy is a design concept. Registration is a local simulation: contact information stays in page memory, and saved items, carts, and sample request references stay on the device.

Phone layouts were checked at 320, 390, and 430 pixels. Search, filtering, sorting, plan totals, favorites, cart, form validation, confirmation, and unavailable-product handling were checked in the browser.

Editable sources are **miniapp.css**, **miniapp.js**, and **catalog-full.js**. Run `python3 preview/build-preview.py` from the project folder to regenerate the four HTML files from the supplied local assets.
