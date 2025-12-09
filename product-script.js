// Product Page JavaScript
let allProducts = [];
let displayedProducts = []; // เก็บสินค้าที่กำลังแสดงอยู่
let currentFilter = 'all';
let currentType = 'all';

// Fallback product data (embedded in case JSON fetch fails)
const fallbackProducts = [
  
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "BODY OIL MIST",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING BODY OIL MIST",
    "กลิ่น": "VELA SCENT",
    "สี": null,
    "ขนาด": "60 ml",
    "ราคา": "990.00",
    "Img": "product/BODY OIL MIST.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Bergamot\n Heart Notes : Rose, Muguet\n Last Notes : Agarwood, Musk",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "The Body Oil Mist swiftly absorbs for long-lasting hydration with light weight and non-greasy finish. It leaves the skin smooth and supple, glow, and wrapped in fresh aroma of sensual aromas. A nourishing blend of jojoba oil, sunflower seed oil, grape seed oil, sesame oil, and shea oil, along with coffee root oil that are rich in vitamin E, omega-6, omega-9, and antioxidants deeply revitalise the skin whilst the bisabolol from Candeia-tree can help soothe the sensitive skin.",
    "DIRECTION": "After showering, spray body oil onto damp skin and massage until absorbed.",
    "INGREDIENTS": "Isododecane, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Parfum (Fragrance), Argania Spinosa Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, Bisabolol, BHT, Tocopheryl Acetate Benzotriazolyl Dodecyl-p-Cresol, Glycyrrhiza Glabra (Licorice) Root Extract, Vitis Vinifera (Grape) Seed Oil, Sesamum Indicum (Sesame) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil, Tocopherol.",
    "CAUTION":"Keep it out of light and temperature above 40°C to maintain the quality of the product.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "BODY OIL MIST",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING BODY OIL MIST",
    "กลิ่น": "MAYA SCENT",
    "สี": null,
    "ขนาด": "60 ml",
    "ราคา": "990.00",
    "Img": "product/BODY OIL MIST.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Lemon, Freesia, Green apple\n Heart Notes : Lilac, Jasmine, Peony\n Last Notes : Musks",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "The Body Oil Mist swiftly absorbs for long-lasting hydration with light weight and non-greasy finish. It leaves the skin smooth and supple, glow, and wrapped in fresh aroma of sensual aromas. A nourishing blend of jojoba oil, sunflower seed oil, grape seed oil, sesame oil, and shea oil, along with coffee root oil that are rich in vitamin E, omega-6, omega-9, and antioxidants deeply revitalise the skin whilst the bisabolol from Candeia-tree can help soothe the sensitive skin.",
    "DIRECTION": "After showering, spray body oil onto damp skin and massage until absorbed.",
    "INGREDIENTS": "Isododecane, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Parfum (Fragrance), Argania Spinosa Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, Bisabolol, BHT, Tocopheryl Acetate Benzotriazolyl Dodecyl-p-Cresol, Glycyrrhiza Glabra (Licorice) Root Extract, Vitis Vinifera (Grape) Seed Oil, Sesamum Indicum (Sesame) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil, Tocopherol.",
    "CAUTION":"Keep it out of light and temperature above 40°C to maintain the quality of the product.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "HAND SERUM",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING HAND SERUM",
    "กลิ่น": "VELA SCENT",
    "สี": null,
    "ขนาด": "55 g",
    "ราคา": "1,290.00",
    "Img": "product/BODY OIL MIST.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Bergamot\n Heart Notes : Rose, Muguet\n Last Notes : Agarwood, Musk",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "Indulge your skin with a unique blend of fast-absorbing and moisturising concentrated essence (three essential Ceramides, 5% Urea, Vitamin B3 and Provitamin B5), as well as revitalising extracts from antioxidant-rich licorice root and sacred lotus stamen. It helps restore dry and rough skin, nourishes and strengthens the skin’s natural moisture barrier, and enhances skin radiance and smoothness.",
    "DIRECTION": "Gently apply serum over your natural and massage until absorbed. It can be used as often as needed.",
    "INGREDIENTS": "Aqua (Water), Urea, Glyceryl Stearate, Butylene Glycol, Parfum (Fragrance), Cetyl Alcohol, Niacinamide, Petrolatum, Isopropyl Palmitate, PEG-100 Stearate, Dimethicone, Glycerin, Sorbitan Stearate, Polysorbate 60, Dicaprylyl Carbonate, Phenoxyethanol, Butyrospermum Parkii (Shea) Butter, Ammonium Acryloyldimethyltaurate/VP Copolymer, Chlorphenesin, PPG-20 Methyl Glucose Ether, Benzotriazolyl Dodecyl p-Cresol, Disodium EDTA, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Lauroyl Lactylate, Xanthan Gum, Tocopheryl Acetate, Glycyrrhiza Glabra (Licorice) Root Extract, Ceramide NP, Phytosphingosine, Ceramide AP, Cholesterol, Carbomer, Ethylhexylglycerin, Nelumbo Nucifera Stamen Extract, Ceramide EOP.",
    "CAUTION":"Keep out of light and temperature above 10°C to maintain the quality of the product.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "HAND SERUM",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING HAND SERUM",
    "กลิ่น": "MAYA SCENT",
    "สี": null,
    "ขนาด": "55 g",
    "ราคา": "1,290.00",
    "Img": "product/BODY OIL MIST.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Lemon, Freesia, Green apple\n Heart Notes : Lilac, Jasmine, Peony\n Last Notes : Musks",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "Indulge your skin with a unique blend of fast-absorbing and moisturising concentrated essence (three essential Ceramides, 5% Urea, Vitamin B3 and Provitamin B5), as well as revitalising extracts from antioxidant-rich licorice root and sacred lotus stamen. It helps restore dry and rough skin, nourishes and strengthens the skin’s natural moisture barrier, and enhances skin radiance and smoothness.",
    "DIRECTION": "Gently apply serum over your natural and massage until absorbed. It can be used as often as needed.",
    "INGREDIENTS": "Aqua (Water), Urea, Glyceryl Stearate, Butylene Glycol, Parfum (Fragrance), Cetyl Alcohol, Niacinamide, Petrolatum, Isopropyl Palmitate, PEG-100 Stearate, Dimethicone, Glycerin, Sorbitan Stearate, Polysorbate 60, Dicaprylyl Carbonate, Phenoxyethanol, Butyrospermum Parkii (Shea) Butter, Ammonium Acryloyldimethyltaurate/VP Copolymer, Chlorphenesin, PPG-20 Methyl Glucose Ether, Benzotriazolyl Dodecyl p-Cresol, Disodium EDTA, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Lauroyl Lactylate, Xanthan Gum, Tocopheryl Acetate, Glycyrrhiza Glabra (Licorice) Root Extract, Ceramide NP, Phytosphingosine, Ceramide AP, Cholesterol, Carbomer, Ethylhexylglycerin, Nelumbo Nucifera Stamen Extract, Ceramide EOP.",
    "CAUTION":"Keep out of light and temperature above 10°C to maintain the quality of the product.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": "FROST",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (W).png",
    "ScentProfile" : "Citrus & Floral",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\nHeart Notes : Muguet, Green Apple, Iris\nLast Notes : Musk, Cedarwood",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity - creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "HIDDEN GRACE",
    "สี": "FROST",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (W).png",
    "ScentProfile" : "Woody & Floral",
    "Scents" : "Top Notes : Orange, Rosemary\n Heart Notes : Lily-of-Valley Lavender, Iris\n Last Notes : Musk, Sandalwood, Tonka Bean",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation - helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": "FROST",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (W).png",
    "ScentProfile" : "Woody & Ocean",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\n Heart Notes : Cedarwood, Sage\n Last Notes : Amber, Musk",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },

    {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": "MIDNIGHT",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (Black).png",
    "ScentProfile" : "Citrus & Floral",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\n Heart Notes : Muguet, Green Apple, Iris\n Last Notes : Musk, Cedarwood",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity - creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "HIDDEN GRACE",
    "สี": "MIDNIGHT",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (Black).png",
    "ScentProfile" : "Woody & Floral",
    "Scents" : "Top Notes : Orange, Rosemary\n Heart Notes : Lily-of-Valley Lavender, Iris\n Last Notes : Musk, Sandalwood, Tonka Bean",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation - helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": "MIDNIGHT",
    "ขนาด": "100 ml",
    "ราคา": "1,590.00",
    "Img": "product/Home Diffuser (Black).png",
    "ScentProfile" : "Woody & Ocean",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\n Heart Notes : Cedarwood, Sage\n Last Notes : Amber, Musk",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "Place the reeds into the bottle and let them naturally infuse your surroundings with a refined, lingering fragrance. To maintain a vibrant scent, simply flip the reeds periodically.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "HIDDEN GRACE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390.00",
    "Img": "product/INTERIOR PARFUM HIDDEN GRACE.png",
    "ScentProfile" : "Woody & Floral",
    "Scents" : "Top Notes : Orange, Rosemary\n Heart Notes : Lily-of-Valley Lavender, Iris\n Last Notes : Musk, Sandalwood, Tonka Bean",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation - helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION":  "• Hold the bottle upright and spray 2–3 bursts into the air for an instant, lingering fragrance.\n• For a subtle touch, mist lightly over curtains or fabrics (test on a discreet area first).\n• Avoid direct contact with delicate surfaces.\n• Reapply as desired to maintain an atmosphere of refined serenity and timeless allure.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390.00",
    "Img": "product/INTERIOR PARFUM TRACE OF SERENITY.png",
    "ScentProfile" : "Woody & Ocean",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\n Heart Notes : Cedarwood, Sage\n Last Notes : Amber, Musk",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "• Hold the bottle upright and spray 2–3 bursts into the air for an instant, lingering fragrance.\n• For a subtle touch, mist lightly over curtains or fabrics (test on a discreet area first).\n• Avoid direct contact with delicate surfaces.\n• Reapply as desired to maintain an atmosphere of refined serenity and timeless allure.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390.00",
    "Img": "product/INTERIOR PARFUM TIME'S EMBRACE.png",
    "ScentProfile" : "Citrus & Floral",
    "Scents" : "Top Notes : Bergamot, Orange, Grapefruit\n Heart Notes : Muguet, Green Apple, Iris\n Last Notes : Musk, Cedarwood",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity - creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "• Hold the bottle upright and spray 2–3 bursts into the air for an instant, lingering fragrance.\n • For a subtle touch, mist lightly over curtains or fabrics (test on a discreet area first).\n • Avoid direct contact with delicate surfaces.\n • Reapply as desired to maintain an atmosphere of refined serenity and timeless allure.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "SERENE NIGHTFALL",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "490.00",
    "Img": "product/INTERIOR PARFUM SERENE NIGHTFALL.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Sweet orange, Neroli, Peppermint, Ylang Ylang\n Heart Notes : Lavender, Rose Geranium\n Last Notes : Vetiver, Clary Sage, Guaiac Wood",
    "SHORT DESCRIPTION": "DEEP CALM & RESTORATIVE SLEEP",
    "DESCRIPTION": "Indulge in the exquisite serenity of deep calm and emotional balance as your body is cradled into an effortless, ready state of profound rest.",
    "DIRECTION": "• Hold the bottle upright and spray 2–3 bursts into the air for an instant, lingering fragrance.\n • For a subtle touch, mist lightly over curtains or fabrics (test on a discreet area first).\n • Avoid direct contact with delicate surfaces.\n • Reapply as desired to maintain an atmosphere of refined serenity and timeless allure.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "RESPIRE QUIETUDE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "490.00",
    "Img": "product/INTERIOR PARFUM RESPIRE QUIETUDE.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Eucalyptus, Peppermint, Sweet Orange\n Heart Notes : Lavender, Thyme, Bergamot\n Last Notes : Rosemary, Sandalwood, Shallot",
    "SHORT DESCRIPTION": "WELLNESS IN EVERY BREATH",
    "DESCRIPTION": "Elevate your senses and transform every breath into a moment of clarity and serenity with clear breath,calm mind, and strengthened immunity.",
    "DIRECTION": "• Hold the bottle upright and spray 2–3 bursts into the air for an instant, lingering fragrance.\n • For a subtle touch, mist lightly over curtains or fabrics (test on a discreet area first).\n • Avoid direct contact with delicate surfaces.\n • Reapply as desired to maintain an atmosphere of refined serenity and timeless allure.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "100% ESSENTIAL OIL",
    "รายการสินค้า": "100% ESSENTIAL OIL",
    "กลิ่น": "SERENE NIGHTFALL",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "590.00",
    "Img": "product/SERENE NIGHTFALL.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Sweet orange, Neroli, Peppermint, Ylang Ylang\n Heart Notes : Lavender, Rose Geranium\n Last Notes : Vetiver, Clary Sage, Guaiac Wood",
    "SHORT DESCRIPTION": "DEEP CALM & RESTORATIVE SLEEP",
    "DESCRIPTION": "Indulge in the exquisite serenity of deep calm and emotional balance as your body is cradled into an effortless, ready state of profound rest.",
    "DIRECTION": "Add a few drops of essential oil to a burner or diffuser filled half-way with water.",
    "INGREDIENTS": "Sweet Orange, Neroli, Peppermint, Ylang Ylang, Lavender, Rose Geranium, Vetiver, Clary Sage, and Guaiac Wood.",
    "CAUTION":"",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "100% ESSENTIAL OIL",
    "รายการสินค้า": "100% ESSENTIAL OIL",
    "กลิ่น": "RESPIRE QUIETUDE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "590.00",
    "Img": "product/RESPIRE QUIETUDE.png",
    "ScentProfile" : "",
    "Scents" : "Top Notes : Eucalyptus, Peppermint, Sweet Orange\n Heart Notes : Lavender, Thyme, Bergamot\n Last Notes : Rosemary, Sandalwood, Shallot",
    "SHORT DESCRIPTION": "WELLNESS IN EVERY BREATH",
    "DESCRIPTION": "Elevate your senses and transform every breath into a moment of clarity and serenity with clear breath,calm mind, and strengthened immunity.",
    "DIRECTION": "Add a few drops of essential oil to a burner or diffuser filled half-way with water.",
    "INGREDIENTS": "Eucalyptus, Peppermint, Sweet Orange, Lavender, Thyme, Bergamot, Rosemary, Sandalwood, and Shallot.",
    "CAUTION":"• Do not place or store near heat, high temperature or open flames.\n• Keep out of reach of children and pets.\n• For external use only, do not ingest.\n• Handle with care, avoid contact with eyes and skin.",
    "สถานะ": ""
  }


];

// Load products from JSON
async function loadProducts() {
  try {
    // Try to fetch from JSON file
    const response = await fetch('json/output.json');
    if (!response.ok) throw new Error('Failed to load products');

    allProducts = await response.json();
    console.log('Products loaded from JSON file');
  } catch (error) {
    // console.warn('Could not load JSON file, using fallback data:', error);
    // Use fallback data if fetch fails
    allProducts = fallbackProducts;
  }

  // Update images and display products
  updateProductImages();
  displayProducts(allProducts);
}

// Display products in grid
function displayProducts(products) {
  const grid = document.getElementById('products-grid');

  if (!products || products.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📦</div>
        <h3 class="empty-state-title">No products found</h3>
        <p class="empty-state-text">Try adjusting your filters</p>
      </div>
    `;
    displayedProducts = [];
    return;
  }

  // เก็บสินค้าที่กำลังแสดงไว้ใช้สำหรับ modal
  displayedProducts = products;

  grid.innerHTML = products.map((product, index) => `
    <div class="product-card" data-index="${index}" onclick="openModal(${index})">
      <div class="product-card-image">
        <p class="product-sale">${product.สถานะ}</p>
        <img src="${product.Img || 'product/BODY OIL MIST.png'}"
             alt="${product.รายการสินค้า}"
             onerror="this.src='product/BODY OIL MIST.png'">
      </div>
      <div class="product-card-content">
        <h3 class="product-card-title">${product.รายการสินค้า}</h3>
        <h3 class="product-card-sub-title">${product.กลิ่น}</h3>
        <p class="product-card-scent">
          ${product.ราคา} THB
        </p>
      </div>
    </div>
  `).join('');
}


let desc = document.getElementById("modal-scent-profile").innerHTML;

desc = desc
  .replace(/Top Notes\s*:/g, "<strong>Top Notes :</strong>")
  .replace(/Heart Notes\s*:/g, "<strong>Heart Notes :</strong>")
  .replace(/Last Notes\s*:/g, "<strong>Last Notes :</strong>");

document.getElementById("modal-scent-profile").innerHTML = desc;


// Filter products
function filterProducts() {
  let filtered = allProducts;

  // Filter by category
  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.หมวดหมู่ === currentFilter);
  }

  // Filter by type
  if (currentType !== 'all') {
    filtered = filtered.filter(p => p.ประเภท === currentType);
  }

  displayProducts(filtered);
}

// Setup filter buttons
function setupFilters() {
  // Category filters
  const categoryButtons = document.querySelectorAll('.filter-btn:not(.type-filter)');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.category;
      filterProducts();
    });
  });

  // Type filters
  const typeButtons = document.querySelectorAll('.type-filter');
  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentType = btn.dataset.type;
      filterProducts();
    });
  });
}

// Open product modal
function openModal(index) {
  // ใช้ displayedProducts แทน allProducts เพื่อให้ได้สินค้าที่ถูกต้อง
  const product = displayedProducts[index];
  const modal = document.getElementById('product-modal');

  // Set modal content
  document.getElementById('modal-image').src = product.Img || 'product/BODY OIL MIST.png';
  document.getElementById('modal-image').alt = product.รายการสินค้า;

  // Set top divs (บรรทัด 124-127 ใน HTML)
  const modalScents = document.querySelectorAll('#modal-scent');
  const modalTypes = document.querySelectorAll('#modal-type');
  const modalSizes = document.querySelectorAll('#modal-size');
  const modalPrices = document.querySelectorAll('#modal-price');

  if (modalScents.length > 0) {
    modalScents[0].textContent = product.กลิ่น; // div แรก (บรรทัด 124)
    if (modalScents.length > 1) {
      modalScents[1].textContent = product.กลิ่น; // span ใน spec-item
    }
  }

  if (modalTypes.length > 0) {
    modalTypes[0].textContent = product.ประเภท; // div (บรรทัด 125)
  }

  if (modalSizes.length > 0) {
    modalSizes[0].textContent = 'Size ' + product.ขนาด; // div แรก (บรรทัด 126)
    if (modalSizes.length > 1) {
      modalSizes[1].textContent = 'Size ' + product.ขนาด; // span ใน spec-item
    }
  }

  if (modalPrices.length > 0) {
    modalPrices[0].textContent = product.ราคา + ' THB'; // div แรก (บรรทัด 127)
    if (modalPrices.length > 1) {
      modalPrices[1].textContent = product.ราคา + ' THB'; // span ใน spec-item
    }
  }

  // Handle color (optional field)
  const colorContainer = document.getElementById('modal-color-container');
  const colorElement = document.getElementById('modal-color');
  if (colorContainer && colorElement) {
    if (product.สี) {
      colorContainer.style.display = 'flex';
      colorElement.textContent = product.สี;
    } else {
      colorContainer.style.display = 'none';
    }
  }

  // Set sub-description and description (บรรทัด 128-129)
  const modalSubDesc = document.getElementById('modal-sub-description');
  const modalDesc = document.getElementById('modal-description');

  if (modalSubDesc && product['SHORT DESCRIPTION']) {
    modalSubDesc.textContent = product['SHORT DESCRIPTION'];
  } else if (modalSubDesc) {
    modalSubDesc.textContent = '';
  }

  if (modalDesc && product['DESCRIPTION']) {
    modalDesc.textContent = product['DESCRIPTION'];
  } else if (modalDesc) {
    modalDesc.textContent = '';
  }

  // Set Scent Profile Section
  const scentProfileSection = document.getElementById('scent-profile-section');
  const scentTitleElement = document.getElementById('modal-scent-title-profile');
  const scentDescElement = document.getElementById('modal-scent-profile');

  // Check if product has "ScentProfile" field
  const hasScentProfile = product['ScentProfile'] && product['ScentProfile'].trim() !== '';
  // Check if product has "Scents" field for description
  const hasScents = product['Scents'] && product['Scents'].trim() !== '';
  // Check if product has "SHORT DESCRIPTION" as fallback
  const hasShortDesc = product['SHORT DESCRIPTION'] && product['SHORT DESCRIPTION'].trim() !== '';

  if (hasScentProfile || hasScents || hasShortDesc) {
    scentProfileSection.style.display = 'block';

    // Set title - แสดงค่าจาก ScentProfile พร้อมคำนำหน้า "Scent Profile : "
    if (hasScentProfile) {
      scentTitleElement.innerHTML = '<strong>Scent Profile :</strong> ' + product['ScentProfile'];
    } else {
      scentTitleElement.innerHTML = '';
    }

    // Set description (Scents หรือ SHORT DESCRIPTION)
    if (hasScents) {
      scentDescElement.innerHTML = product['Scents'];
    } else if (hasShortDesc) {
      scentDescElement.innerHTML = product['SHORT DESCRIPTION'];
    } else {
      scentDescElement.innerHTML = '';
    }

    // Apply formatting to scent notes
    let desc = scentDescElement.innerHTML;
    desc = desc
      .replace(/Top Notes\s*:/g, "<strong>Top Notes :</strong>")
      .replace(/Heart Notes\s*:/g, "<strong>Heart Notes :</strong>")
      .replace(/Last Notes\s*:/g, "<strong>Last Notes :</strong>");
    scentDescElement.innerHTML = desc;
  } else {
    scentProfileSection.style.display = 'none';
  }

  // Set Direction (แสดงเสมอไม่ว่าจะมีค่าหรือไม่)
  const directionElement = document.getElementById('modal-direction');
  if (directionElement) {
    directionElement.textContent = product.DIRECTION || '';
  }

  // Set Ingredients (แสดงเสมอไม่ว่าจะมีค่าหรือไม่)
  const ingredientsElement = document.getElementById('modal-ingredients');
  if (ingredientsElement) {
    ingredientsElement.textContent = product.INGREDIENTS || '';
  }

  // Set Caution (แสดงเสมอไม่ว่าจะมีค่าหรือไม่)
  const cautionElement = document.getElementById('modal-caution');
  if (cautionElement) {
    cautionElement.textContent = product.CAUTION || '';
  }

  // Reset accordion states (close all)
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close product modal
function closeModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Setup modal close handlers
function setupModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close');
  const overlay = document.getElementById('modal-overlay');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Get image path helper
function getProductImage(product) {
  // Map product types to image files
  const imageMap = {
    'BODY OIL MIST': 'product/BODY OIL MIST.png',
    'HAND SERUM': 'product/ADVANCED HYDRATING & REVITALISING HAND SERUM.png',
    'HOME DIFFUSER': product.สี === 'MIDNIGHT' ?
      'product/Home Diffuser (Black).png' :
      'product/Home Diffuser (W).png',
    'INTERIOR PARFUM': {
      'HIDDEN GRACE': 'product/INTERIOR PARFUM HIDDEN GRACE.png',
      'TRACE OF SERENITY': 'product/INTERIOR PARFUM TRACE OF SERENITY.png',
      "TIME'S EMBRACE": "product/INTERIOR PARFUM TIME'S EMBRACE.png"
    },
    '100% ESSENTIAL OIL': {
      'SERENE NIGHTFALL': 'product/SERENE NIGHTFALL.png',
      'RESPIRE QUIETUDE': 'product/RESPIRE QUIETUDE.png'
    },
    '100% ESSENTIAL OIL': {
      'SERENE NIGHTFALL': 'product/SERENE NIGHTFALL.png',
      'RESPIRE QUIETUDE': 'product/RESPIRE QUIETUDE.png'
    }
  };

  const type = product.ประเภท;
  const scent = product.กลิ่น;

  if (typeof imageMap[type] === 'string') {
    return imageMap[type];
  } else if (typeof imageMap[type] === 'object' && imageMap[type][scent]) {
    return imageMap[type][scent];
  }

  return product.Img || 'product/BODY OIL MIST.png';
}

// Update product images after loading
function updateProductImages() {
  allProducts = allProducts.map(product => ({
    ...product,
    Img: getProductImage(product)
  }));
}

// Get URL parameters
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Apply URL filters
function applyURLFilters() {
  const typeParam = getURLParameter('type');
  const categoryParam = getURLParameter('category');

  if (typeParam) {
    currentType = typeParam;
    // Update active button
    const typeButtons = document.querySelectorAll('.type-filter');
    typeButtons.forEach(btn => {
      if (btn.dataset.type === typeParam) {
        typeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  if (categoryParam) {
    currentFilter = categoryParam;
    // Update active button
    const categoryButtons = document.querySelectorAll('.filter-btn:not(.type-filter)');
    categoryButtons.forEach(btn => {
      if (btn.dataset.category === categoryParam) {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  filterProducts();
}

// Toggle accordion function
function toggleAccordion(accordionId) {
  const accordionItem = document.getElementById(accordionId + '-accordion');

  if (accordionItem) {
    // Toggle active class
    accordionItem.classList.toggle('active');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProducts().then(() => {
    applyURLFilters();
  });
  setupFilters();
  setupModal();
});
