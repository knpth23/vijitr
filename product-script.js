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
    "ราคา": "990",
    "Img": "product/BODY OIL MIST.png",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "The Body Oil Mist swiftly absorbs for long-lasting hydration with light weight and non-greasy finish. It leaves the skin smooth and supple, glow, and wrapped in fresh aroma of sensual aromas. A nourishing blend of jojoba oil, sunflower seed oil, grape seed oil, sesame oil, and shea oil, along with coffee root oil that are rich in vitamin E, omega-6, omega-9, and antioxidants deeply revitalise the skin whilst the bisabolol from Candeia-tree can help soothe the sensitive skin.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "BODY OIL MIST",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING BODY OIL MIST",
    "กลิ่น": "MAYA SCENT",
    "สี": null,
    "ขนาด": "60 ml",
    "ราคา": "990",
    "Img": "product/BODY OIL MIST.png",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "The Body Oil Mist swiftly absorbs for long-lasting hydration with light weight and non-greasy finish. It leaves the skin smooth and supple, glow, and wrapped in fresh aroma of sensual aromas. A nourishing blend of jojoba oil, sunflower seed oil, grape seed oil, sesame oil, and shea oil, along with coffee root oil that are rich in vitamin E, omega-6, omega-9, and antioxidants deeply revitalise the skin whilst the bisabolol from Candeia-tree can help soothe the sensitive skin.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "HAND SERUM",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING HAND SERUM",
    "กลิ่น": "VELA SCENT",
    "สี": null,
    "ขนาด": "55 g",
    "ราคา": "1,290",
    "Img": "product/BODY OIL MIST.png",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "Indulge your skin with a unique blend of fast-absorbing and moisturising concentrated essence (three essential Ceramides, 3% Urea, Vitamin B3 and Provitamin B5), as well as revitalising extracts from antioxidant-rich coffee root and sacred lotus stamen. It helps restore dry and rough skin, nourishes and strengthens the skin’s natural moisture barrier, and enhances skin radiance and smoothness.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "SKINCARE",
    "ประเภท": "HAND SERUM",
    "รายการสินค้า": "ADVANCED HYDRATING & REVITALISING HAND SERUM",
    "กลิ่น": "MAYA SCENT",
    "สี": null,
    "ขนาด": "55 g",
    "ราคา": "1,290",
    "Img": "product/BODY OIL MIST.png",
    "SHORT DESCRIPTION": "",
    "DESCRIPTION": "Indulge your skin with a unique blend of fast-absorbing and moisturising concentrated essence (three essential Ceramides, 3% Urea, Vitamin B3 and Provitamin B5), as well as revitalising extracts from antioxidant-rich coffee root and sacred lotus stamen. It helps restore dry and rough skin, nourishes and strengthens the skin’s natural moisture barrier, and enhances skin radiance and smoothness.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": "FROST",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (W).png",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity — creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "Place the reed.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "HIDDEN GRACE",
    "สี": "FROST",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (W).png",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation — helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION": "Place the reed.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "FROST HOME DIFFUSER",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": "FROST",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (W).png",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "Place the reed.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils, Fragrance",
    "สถานะ": "Sold out"
  },

    {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": "MIDNIGHT",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (Black).png",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity — creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "HIDDEN GRACE",
    "สี": "MIDNIGHT",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (Black).png",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation — helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "HOME DIFFUSER",
    "รายการสินค้า": "MIDNIGHT HOME DIFFUSER",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": "MIDNIGHT",
    "ขนาด": "80 ml",
    "ราคา": "1,590",
    "Img": "product/Home Diffuser (Black).png",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": "Sold out"
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "HIDDEN GRACE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390",
    "Img": "product/INTERIOR PARFUM HIDDEN GRACE.png",
    "SHORT DESCRIPTION": "TURN ANXIETY INTO HARMONY",
    "DESCRIPTION": "Immerse in a balanced atmosphere of clarity calm, and renewed vitality. This revitalising blend sharpens memory and sparks motivation — helping you feel alert and inspired whilst promoting deep relaxation and restful sleep.",
    "DIRECTION": "Hold the bottle.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "TRACE OF SERENITY",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390",
    "Img": "product/INTERIOR PARFUM TRACE OF SERENITY.png",
    "SHORT DESCRIPTION": "DISCOVER YOUR INNER PEACE",
    "DESCRIPTION": "Create balance and a clear atmosphere of mindfulness, relaxation, and quiet strength. This exquisite blend gently relieves stress and anxiety, replacing tension with a serene sense of calm and renewed energy.",
    "DIRECTION": "Hold the bottle.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "TIME'S EMBRACE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "390",
    "Img": "product/INTERIOR PARFUM TIME'S EMBRACE.png",
    "SHORT DESCRIPTION": "ELEVATE YOUR CONCENTRATION",
    "DESCRIPTION": "Boost concentration and help you stay in the present moment. This exclusive blend sharpens focus, enhances mindfulness, and sparks positivity — creating a harmonious space where tranquility meets energy.",
    "DIRECTION": "Hold the bottle.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils",
    "สถานะ": ""
  },

  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "SERENE NIGHTFALL",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "490",
    "Img": "product/INTERIOR PARFUM SERENE NIGHTFALL.png",
    "SHORT DESCRIPTION": "DEEP CALM & RESTORATIVE SLEEP",
    "DESCRIPTION": "Indulge in the exquisite serenity of deep calm and emotional balance as your body is cradled into an effortless, ready state of profound rest.",
    "DIRECTION": "Hold the bottle.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "INTERIOR PARFUM",
    "รายการสินค้า": "INTERIOR PARFUM",
    "กลิ่น": "RESPIRE QUIETUDE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "490",
    "Img": "product/INTERIOR PARFUM RESPIRE QUIETUDE.png",
    "SHORT DESCRIPTION": "WELLNESS IN EVERY BREATH",
    "DESCRIPTION": "Elevate your senses and transform every breath into a moment of clarity and serenity with clear breath,calm mind, and strengthened immunity.",
    "DIRECTION": "Hold the bottle.",
    "INGREDIENTS": "Ethyl Alcohol, Essential Oils",
    "สถานะ": ""
  },

  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "100% ESSENTIAL OIL",
    "รายการสินค้า": "100% ESSENTIAL OIL",
    "กลิ่น": "SERENE NIGHTFALL",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "590",
    "Img": "product/SERENE NIGHTFALL.png",
    "SHORT DESCRIPTION": "DEEP CALM & RESTORATIVE SLEEP",
    "DESCRIPTION": "Indulge in the exquisite serenity of deep calm and emotional balance as your body is cradled into an effortless, ready state of profound rest.",
    "DIRECTION": "",
    "INGREDIENTS": "",
    "สถานะ": ""
  },
  {
    "หมวดหมู่": "ATMOSPHERE",
    "ประเภท": "100% ESSENTIAL OIL",
    "รายการสินค้า": "100% ESSENTIAL OIL",
    "กลิ่น": "RESPIRE QUIETUDE",
    "สี": null,
    "ขนาด": "10 ml",
    "ราคา": "590",
    "Img": "product/RESPIRE QUIETUDE.png",
    "SHORT DESCRIPTION": "WELLNESS IN EVERY BREATH",
    "DESCRIPTION": "Elevate your senses and transform every breath into a moment of clarity and serenity with clear breath,calm mind, and strengthened immunity.",
    "DIRECTION": "",
    "INGREDIENTS": "",
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
  document.getElementById('modal-title').textContent = product.รายการสินค้า;
  document.getElementById('modal-category').textContent = product.หมวดหมู่;
  document.getElementById('modal-type').textContent = product.ประเภท;
  document.getElementById('modal-scent').textContent = product.กลิ่น;
  document.getElementById('modal-size').textContent = product.ขนาด;
  document.getElementById('modal-price').textContent = product.ราคา + ' THB';

  // Handle color (optional field)
  const colorContainer = document.getElementById('modal-color-container');
  if (product.สี) {
    colorContainer.style.display = 'flex';
    document.getElementById('modal-color').textContent = product.สี;
  } else {
    colorContainer.style.display = 'none';
  }

  // Set description from product data
  const descriptionElement = document.getElementById('modal-description');
  if (product.DESCRIPTION && product.DESCRIPTION.trim() !== '') {
    descriptionElement.textContent = product.DESCRIPTION;
  } else {
    // Default fallback text if no description
    descriptionElement.textContent = 'Experience the essence of luxury with our carefully crafted formulation. Each product is designed to provide a holistic wellbeing experience that combines safe dermatological care with sophisticated scents.';
  }

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
      'HIDDEN GRACE': 'product/SCENT VEIL - HIDDEN GRACE.png',
      'TRACE OF SERENITY': 'product/SCENT VEIL - TRACE OF SERENITY.png',
      "TIME'S EMBRACE": "product/SCENT VEIL - TIME'S EMBRACE.png"
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProducts().then(() => {
    applyURLFilters();
  });
  setupFilters();
  setupModal();
});
