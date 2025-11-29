// Product Page JavaScript
let allProducts = [];
let displayedProducts = []; // เก็บสินค้าที่กำลังแสดงอยู่
let currentFilter = 'all';
let currentType = 'all';

// Fallback product data (embedded in case JSON fetch fails)
const fallbackProducts = [
  {
    "หมวดหมู่":"SKINCARE",
    "ประเภท":"BODY OIL MIST",
    "รายการสินค้า":"ADVANCED HYDRATING & REVITALISING BODY OIL MIST - VELA SCENT",
    "กลิ่น":"VELA SCENT",
    "สี":null,
    "ขนาด":"60 ml",
    "Img":"product/BODY OIL MIST.png"
  },
  {
    "หมวดหมู่":"SKINCARE",
    "ประเภท":"BODY OIL MIST",
    "รายการสินค้า":"ADVANCED HYDRATING & REVITALISING BODY OIL MIST - MAYA SCENT",
    "กลิ่น":"MAYA SCENT",
    "สี":null,
    "ขนาด":"60 ml",
    "Img":"product/BODY OIL MIST.png"
  },
  {
    "หมวดหมู่":"SKINCARE",
    "ประเภท":"HAND SERUM",
    "รายการสินค้า":"ADVANCED HYDRATING & REVITALISING HAND SERUM - VELA SCENT",
    "กลิ่น":"VELA SCENT",
    "สี":null,
    "ขนาด":"55 g",
    "Img":"product/BODY OIL MIST.png"
  },
  {
    "หมวดหมู่":"SKINCARE",
    "ประเภท":"HAND SERUM",
    "รายการสินค้า":"ADVANCED HYDRATING & REVITALISING HAND SERUM - MAYA SCENT",
    "กลิ่น":"MAYA SCENT",
    "สี":null,
    "ขนาด":"55 g",
    "Img":"product/BODY OIL MIST.png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"FROST HOME DIFFUSER",
    "กลิ่น":"HIDDEN GRACE",
    "สี":"White",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (W).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"HOME DIFFUSER - TRACE OF SERENITY",
    "กลิ่น":"TRACE OF SERENITY",
    "สี":"White",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (W).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"HOME DIFFUSER - TIME'S EMBRACE",
    "กลิ่น":"TIME'S EMBRACE",
    "สี":"White",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (W).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"HOME DIFFUSER - HIDDEN GRACE",
    "กลิ่น":"HIDDEN GRACE",
    "สี":"Black",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (Black).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"HOME DIFFUSER - TRACE OF SERENITY",
    "กลิ่น":"TRACE OF SERENITY",
    "สี":"Black",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (Black).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"HOME DIFFUSER",
    "รายการสินค้า":"HOME DIFFUSER - TIME'S EMBRACE",
    "กลิ่น":"TIME'S EMBRACE",
    "สี":"Black",
    "ขนาด":"100 ml",
    "Img":"product/Home Diffuser (Black).png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"INTERIOR PARFUM",
    "รายการสินค้า":"SCENT VEIL - HIDDEN GRACE",
    "กลิ่น":"HIDDEN GRACE",
    "สี":null,
    "ขนาด":"10 ml",
    "Img":"product/SCENT VEIL - HIDDEN GRACE.png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"INTERIOR PARFUM",
    "รายการสินค้า":"SCENT VEIL - TRACE OF SERENITY",
    "กลิ่น":"TRACE OF SERENITY",
    "สี":null,
    "ขนาด":"10 ml",
    "Img":"product/SCENT VEIL - TRACE OF SERENITY.png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"INTERIOR PARFUM",
    "รายการสินค้า":"SCENT VEIL - TIME'S EMBRACE",
    "กลิ่น":"TIME'S EMBRACE",
    "สี":null,
    "ขนาด":"10 ml",
    "Img":"product/SCENT VEIL - TIME'S EMBRACE.png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"ESSENTIAL OIL",
    "รายการสินค้า":"ESSENTIAL OIL - SERENE NIGHTFALL",
    "กลิ่น":"SERENE NIGHTFALL",
    "สี":null,
    "ขนาด":"10 ml",
    "Img":"product/SERENE NIGHTFALL.png"
  },
  {
    "หมวดหมู่":"ATMOSPHERE",
    "ประเภท":"ESSENTIAL OIL",
    "รายการสินค้า":"ESSENTIAL OIL - RESPIRE QUIETUDE",
    "กลิ่น":"RESPIRE QUIETUDE",
    "สี":null,
    "ขนาด":"10 ml",
    "Img":"product/RESPIRE QUIETUDE.png"
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
        <p class="product-sale">Sold out</p>
        <img src="${product.Img || 'product/BODY OIL MIST.png'}"
             alt="${product.รายการสินค้า}"
             onerror="this.src='product/BODY OIL MIST.png'">
      </div>
      <div class="product-card-content">
        <h3 class="product-card-title">${product.รายการสินค้า}</h3>
        <h3 class="product-card-title">${product.กลิ่น}</h3>
        <p class="product-card-scent">
          1,000 THB
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

  // Handle color (optional field)
  const colorContainer = document.getElementById('modal-color-container');
  if (product.สี) {
    colorContainer.style.display = 'flex';
    document.getElementById('modal-color').textContent = product.สี;
  } else {
    colorContainer.style.display = 'none';
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
    'HOME DIFFUSER': product.สี === 'Black' ?
      'product/Home Diffuser (Black).png' :
      'product/Home Diffuser (W).png',
    'INTERIOR PARFUM': {
      'HIDDEN GRACE': 'product/SCENT VEIL - HIDDEN GRACE.png',
      'TRACE OF SERENITY': 'product/SCENT VEIL - TRACE OF SERENITY.png',
      "TIME'S EMBRACE": "product/SCENT VEIL - TIME'S EMBRACE.png"
    },
    'ESSENTIAL OIL': {
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
