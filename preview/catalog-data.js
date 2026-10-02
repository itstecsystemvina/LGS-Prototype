/* Seven representative products. Prices and canonical level 2/3/4 IDs are from the supplied workbook. Exact manufacturer URLs document enriched specifications. */
window.LG_CATEGORIES = [
  {
    "id": "ac",
    "label": "Điều hòa",
    "shortLabel": "Điều hòa",
    "filterLabel": "Công suất",
    "icon": "ac",
    "hint": "Chọn theo công suất và loại 1 chiều / 2 chiều"
  },
  {
    "id": "washer",
    "label": "Máy giặt",
    "shortLabel": "Máy giặt",
    "filterLabel": "Khối lượng giặt",
    "icon": "washer",
    "hint": "Chọn theo khối lượng giặt và kiểu lồng"
  },
  {
    "id": "fridge",
    "label": "Tủ lạnh",
    "shortLabel": "Tủ lạnh",
    "filterLabel": "Dung tích",
    "icon": "fridge",
    "hint": "Chọn theo dung tích và kiểu cửa"
  },
  {
    "id": "dish",
    "label": "Máy rửa bát",
    "shortLabel": "Rửa bát",
    "filterLabel": "Số bộ chén đĩa",
    "icon": "dish",
    "hint": "Chọn theo sức chứa và công nghệ rửa"
  },
  {
    "id": "styler",
    "label": "Tủ chăm sóc quần áo",
    "shortLabel": "LG Styler",
    "filterLabel": "Số móc treo",
    "icon": "styler",
    "hint": "Chọn theo số móc treo và kích thước"
  },
  {
    "id": "air",
    "label": "Máy lọc không khí",
    "shortLabel": "Lọc không khí",
    "filterLabel": "Diện tích phục vụ",
    "icon": "air",
    "hint": "Chọn theo diện tích phòng và bộ lọc"
  },
  {
    "id": "tv",
    "label": "TV",
    "shortLabel": "TV",
    "filterLabel": "Kích thước màn hình",
    "icon": "tv",
    "hint": "Chọn theo kích thước và công nghệ màn hình"
  }
];
window.LG_CATALOG_DATA = [
  {
    "id": "fridge",
    "uiCategoryId": "fridge",
    "productNumber": 1,
    "model": "LBB33BLGA",
    "modelSuffix": "LBB33BLGA.ABMPEVN",
    "name": "Tủ lạnh ngăn đá dưới 335L",
    "subtitle": "2 cửa · Kính màu đen",
    "imageKey": "fridge",
    "imageIsIllustrative": true,
    "galleryKeys": [
      "fridge"
    ],
    "buyPrice": 14450000,
    "monthly": {
      "12": 1250000,
      "24": 660000,
      "36": 480000
    },
    "contractTotals": {
      "12": 15000000,
      "24": 15840000,
      "36": 17280000
    },
    "attributes": {
      "capacity": "335 L",
      "size": "60 × 172 × 72 cm",
      "technology": "Smart Inverter · LinearCooling · DoorCooling+",
      "color": "Kính màu đen",
      "style": "Ngăn đá dưới · 2 cửa",
      "widthCm": 60
    },
    "features": [
      "Làm lạnh LinearCooling",
      "Làm lạnh DoorCooling+",
      "Máy nén Smart Inverter"
    ],
    "sourceCategory": {
      "parent": "REF",
      "child": "B/F"
    },
    "canonicalCategory": {
      "l1": {
        "id": "RFBF",
        "label": "Bottom Freezer"
      },
      "l2": {
        "id": "RFBFBF",
        "label": "Bottom Freezer"
      },
      "l3": {
        "id": "RFBFBF2D",
        "label": "2D Bottom Freezer"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          4
        ],
        "ranges": [
          "I4:N4"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 4,
        "ranges": [
          "D4:E4",
          "G4:J4",
          "L4:O4"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/tu-lanh/tu-lanh-ngan-da-duoi/lbb33blga/",
        "model": "LBB33BLGA"
      }
    }
  },
  {
    "id": "washer",
    "uiCategoryId": "washer",
    "productNumber": 79,
    "model": "FX1412S3KAV",
    "modelSuffix": "FX1412S3KAV.AEBPEVN",
    "name": "Máy giặt AI DD 12kg",
    "subtitle": "Lồng ngang · Hơi nước · Đen",
    "imageKey": "washer",
    "imageIsIllustrative": true,
    "galleryKeys": [
      "washer"
    ],
    "buyPrice": 21598100,
    "monthly": {
      "12": 1870000,
      "24": 1000000,
      "36": 740000
    },
    "contractTotals": {
      "12": 22440000,
      "24": 24000000,
      "36": 26640000
    },
    "attributes": {
      "capacity": "12 kg",
      "size": "60 × 85 × 56,5 cm",
      "technology": "AI DD 2.0 · TurboWash360 · ezDispense",
      "color": "Đen",
      "style": "Lồng ngang",
      "widthCm": 60
    },
    "features": [
      "AI DD 2.0",
      "Giặt TurboWash360",
      "Tự động phân bổ nước giặt ezDispense"
    ],
    "sourceCategory": {
      "parent": "W/M",
      "child": "F/L"
    },
    "canonicalCategory": {
      "l1": {
        "id": "WMWL",
        "label": "Clothes Washer"
      },
      "l2": {
        "id": "WMWLFL",
        "label": "Clothes Washer_Front Loader"
      },
      "l3": {
        "id": "WMWLFLSC",
        "label": "Clothes Washer_Drum(DD)_Steam_24"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          89
        ],
        "ranges": [
          "I89:N89"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 82,
        "ranges": [
          "D82:E82",
          "G82:J82",
          "L82:O82"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/giat-say/may-giat-long-ngang/fx1412s3kav/",
        "model": "FX1412S3KAV"
      }
    }
  },
  {
    "id": "styler",
    "uiCategoryId": "styler",
    "productNumber": 75,
    "model": "SC5MBR80H",
    "modelSuffix": "SC5MBR80H.ASBPEVN",
    "name": "LG Styler 5 móc",
    "subtitle": "Chăm sóc quần áo · Màu be",
    "imageKey": "styler",
    "imageIsIllustrative": true,
    "galleryKeys": [
      "styler"
    ],
    "buyPrice": 39699100,
    "monthly": {
      "12": 3430000,
      "24": 1810000,
      "36": 1440000
    },
    "contractTotals": {
      "12": 41160000,
      "24": 43440000,
      "36": 51840000
    },
    "attributes": {
      "capacity": "5 món đồ + 1 quần dài",
      "size": "60 × 196,5 × 62 cm",
      "technology": "Dual TrueSteam · Dynamic MovingHanger · LG ThinQ",
      "color": "Be cát",
      "style": "Tủ chăm sóc quần áo",
      "widthCm": 60
    },
    "features": [
      "Hơi nước kép Dual TrueSteam",
      "Móc chuyển động Dynamic MovingHanger",
      "Làm mới nhanh trong 18 phút"
    ],
    "sourceCategory": {
      "parent": "W/M",
      "child": "Styler"
    },
    "canonicalCategory": {
      "l1": {
        "id": "WMWF",
        "label": "Clothes Styler"
      },
      "l2": {
        "id": "WMWFWF",
        "label": "Clothes_Styler"
      },
      "l3": {
        "id": "WMWFWFCA",
        "label": "Clothes_Styler"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          85
        ],
        "ranges": [
          "I85:N85"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 78,
        "ranges": [
          "D78:E78",
          "G78:J78",
          "L78:O78"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/giat-say/tu-cham-soc-quan-ao-thong-minh-styler/sc5mbr80h/",
        "model": "SC5MBR80H"
      }
    }
  },
  {
    "id": "tv",
    "uiCategoryId": "tv",
    "productNumber": 36,
    "model": "86QNED86BSA",
    "modelSuffix": "86QNED86BSA.ATV",
    "name": "TV QNED evo 86 inch",
    "subtitle": "4K MiniLED · webOS 26",
    "imageKey": "tv",
    "imageIsIllustrative": true,
    "galleryKeys": [
      "tv"
    ],
    "buyPrice": 44900000,
    "monthly": {
      "12": 3880000,
      "24": 2030000,
      "36": 1460000
    },
    "contractTotals": {
      "12": 46560000,
      "24": 48720000,
      "36": 52560000
    },
    "attributes": {
      "capacity": "86 inch",
      "size": "192,8 × 110,8 × 3,09 cm (không chân đế)",
      "technology": "QNED MiniLED · Alpha 8 AI Gen3 · webOS 26",
      "color": "",
      "style": "TV thông minh",
      "widthCm": 192.8
    },
    "features": [
      "Màn hình 4K QNED MiniLED",
      "Bộ xử lý Alpha 8 AI thế hệ 3",
      "Hệ điều hành webOS 26"
    ],
    "sourceCategory": {
      "parent": "LTV",
      "child": "QNED"
    },
    "canonicalCategory": {
      "l1": {
        "id": "TVLE",
        "label": "LED LCD TV"
      },
      "l2": {
        "id": "TVLE86",
        "label": "LED LCD TV 86"
      },
      "l3": {
        "id": "TVLE86NU",
        "label": "LED LCD TV 86 (UD)"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          39
        ],
        "ranges": [
          "I39:N39"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 39,
        "ranges": [
          "D39:E39",
          "G39:J39",
          "L39:O39"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/tv-va-loa-thanh/qned-evo/86qned86bsa/",
        "model": "86QNED86BSA"
      }
    }
  },
  {
    "id": "air",
    "uiCategoryId": "air",
    "productNumber": 72,
    "model": "AS60GHWG0",
    "modelSuffix": "AS60GHWG0.ABAE",
    "name": "Máy lọc không khí PuriCare 360 HIT",
    "subtitle": "Phòng đến 60m² · Màu trắng",
    "imageKey": "air",
    "imageIsIllustrative": true,
    "galleryKeys": [
      "air"
    ],
    "buyPrice": 6735100,
    "monthly": {
      "12": 590000,
      "24": 400000,
      "36": 350000
    },
    "contractTotals": {
      "12": 7080000,
      "24": 9600000,
      "36": 12600000
    },
    "attributes": {
      "capacity": "60 m²",
      "size": "31,5 × 51,1 × 31,5 cm",
      "technology": "Bộ lọc H13 · Cảm biến PM1.0 · LG ThinQ",
      "color": "Trắng",
      "style": "Máy lọc không khí",
      "widthCm": 31.5
    },
    "features": [
      "Bộ lọc bụi cấp H13",
      "Cảm biến bụi PM1.0 và khí gas",
      "Kết nối LG ThinQ qua Wi-Fi"
    ],
    "sourceCategory": {
      "parent": "Air Care",
      "child": "Air Care"
    },
    "canonicalCategory": {
      "l1": {
        "id": "HCWC",
        "label": "Wellness care"
      },
      "l2": {
        "id": "HCWCAS",
        "label": "Air Solution"
      },
      "l3": {
        "id": "HCWCASCO",
        "label": "Air Cleaner_ODM"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          82
        ],
        "ranges": [
          "I82:N82"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 75,
        "ranges": [
          "D75:E75",
          "G75:J75",
          "L75:O75"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/giai-phap-khong-khi/may-loc-khong-khi/as60ghwg0/",
        "model": "AS60GHWG0"
      }
    }
  },
  {
    "id": "dish",
    "uiCategoryId": "dish",
    "productNumber": 5,
    "model": "LDT14BLA4",
    "modelSuffix": "LDT14BLA4.ABMPEVN",
    "name": "Máy rửa bát QuadWash 14 bộ",
    "subtitle": "TrueSteam · Đen nhám",
    "imageKey": "dish",
    "imageIsIllustrative": false,
    "galleryKeys": [
      "dish",
      "dish-open-front",
      "dish-racks",
      "dish-top-open"
    ],
    "buyPrice": 18110000,
    "monthly": {
      "12": 1570000,
      "24": 830000,
      "36": 640000
    },
    "contractTotals": {
      "12": 18840000,
      "24": 19920000,
      "36": 23040000
    },
    "attributes": {
      "capacity": "14 bộ",
      "size": "60 × 85 × 60 cm",
      "technology": "QuadWash · TrueSteam · LG ThinQ",
      "color": "Đen nhám",
      "style": "Máy độc lập",
      "widthCm": 60
    },
    "features": [
      "Công nghệ rửa QuadWash",
      "Rửa hơi nước TrueSteam",
      "Sấy hé cửa tự động"
    ],
    "sourceCategory": {
      "parent": "REF",
      "child": "DW"
    },
    "canonicalCategory": {
      "l1": {
        "id": "WMWK",
        "label": "Dishwasher"
      },
      "l2": {
        "id": "WMWKWK",
        "label": "Dishwasher"
      },
      "l3": {
        "id": "WMWKWKDA",
        "label": "Dishwasher"
      },
      "mappingStatus": "matched-workbook"
    },
    "componentCategories": [],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          8
        ],
        "ranges": [
          "I8:N8"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 8,
        "ranges": [
          "D8:E8",
          "G8:J8",
          "L8:O8"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/may-rua-bat/ldt14bla4/",
        "model": "LDT14BLA4"
      }
    }
  },
  {
    "id": "ac",
    "uiCategoryId": "ac",
    "productNumber": 63,
    "model": "IDC12M2",
    "modelSuffix": "IDC12M2.ATYGEVH",
    "name": "Điều hòa DUALCOOL AI Air 1.5HP",
    "subtitle": "1 chiều · Inverter · Treo tường",
    "imageKey": "ac",
    "imageIsIllustrative": false,
    "galleryKeys": [
      "ac"
    ],
    "buyPrice": 12568100,
    "monthly": {
      "12": 1090000,
      "24": 580000,
      "36": 420000
    },
    "contractTotals": {
      "12": 13080000,
      "24": 13920000,
      "36": 15120000
    },
    "attributes": {
      "capacity": "1,5 HP",
      "size": "79,9 × 30,7 × 23,5 cm (dàn lạnh)",
      "technology": "DUALCOOL Inverter · AI Air · LG ThinQ",
      "color": "Trắng",
      "style": "Treo tường · Chỉ làm mát",
      "widthCm": 79.9
    },
    "features": [
      "Điều khiển luồng gió AI Air",
      "Cửa gió kép DUAL Vane",
      "Kết nối LG ThinQ qua Wi-Fi"
    ],
    "sourceCategory": {
      "parent": "ES",
      "child": "RAC BD"
    },
    "canonicalCategory": {
      "l1": {
        "id": "ACSR",
        "label": "SRAC"
      },
      "l2": {
        "id": "ACSRIV",
        "label": "Inverter"
      },
      "l3": {
        "id": "ACSRIVSU",
        "label": "Inverter Single Split Wall_O/D"
      },
      "mappingStatus": "matched-component-pair"
    },
    "componentCategories": [
      {
        "modelSuffix": "IDC12M2U.ATYGEVH",
        "sourceRow": 67,
        "canonicalCategory": {
          "l1": {
            "id": "ACSR",
            "label": "SRAC"
          },
          "l2": {
            "id": "ACSRIV",
            "label": "Inverter"
          },
          "l3": {
            "id": "ACSRIVSU",
            "label": "Inverter Single Split Wall_O/D"
          },
          "mappingStatus": "matched-workbook"
        }
      },
      {
        "modelSuffix": "IDC12M2N.ATYGEVH",
        "sourceRow": 68,
        "canonicalCategory": {
          "l1": {
            "id": "ACSR",
            "label": "SRAC"
          },
          "l2": {
            "id": "ACSRIV",
            "label": "Inverter"
          },
          "l3": {
            "id": "ACSRIVSN",
            "label": "Inverter Single Split Wall_I/D"
          },
          "mappingStatus": "matched-workbook"
        }
      }
    ],
    "availability": "listed",
    "availabilityNote": "",
    "canRegister": true,
    "source": {
      "workbook": "Copy of 28082026. Total product on MiniApp.xlsx",
      "taxonomy": {
        "sheet": "Product level",
        "rows": [
          67,
          68
        ],
        "ranges": [
          "I67:N67",
          "I68:N68"
        ],
        "valueMode": "cached-external-formula-results"
      },
      "pricing": {
        "sheet": "Total MiniApp",
        "row": 66,
        "ranges": [
          "D66:E66",
          "G66:J66",
          "L66:O66"
        ]
      },
      "specifications": {
        "url": "https://www.lg.com/vn/dieu-hoa/idc12m2/",
        "model": "IDC12M2"
      }
    }
  }
];
