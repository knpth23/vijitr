// Products page functionality - Isolated to prevent conflicts
(function() {
  'use strict';

  // Check if we're on the products page
  if (!document.querySelector('.products-main')) {
    return; // Exit if not on products page
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Category filter functionality - from nav menu only
    const categoryLinks = document.querySelectorAll('.category-link');
    const productCategories = document.querySelectorAll('.product-category');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const menuClose = document.querySelector('.menu-close');

    // Return early if elements don't exist
    if (!categoryLinks.length || !productCategories.length) {
      return;
    }

    // Function to filter categories
    function filterCategory(selectedCategory) {
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));

      // Add active class to matching link
      categoryLinks.forEach(l => {
        if (l.getAttribute('data-category') === selectedCategory) {
          l.classList.add('active');
        }
      });

      // Show/hide categories based on selection
      if (selectedCategory === 'all') {
        productCategories.forEach(category => {
          category.classList.remove('hidden');
        });
      } else {
        productCategories.forEach(category => {
          if (category.getAttribute('data-category') === selectedCategory) {
            category.classList.remove('hidden');
          } else {
            category.classList.add('hidden');
          }
        });
      }

      // Scroll to first visible category
      setTimeout(() => {
        const firstVisible = document.querySelector('.product-category:not(.hidden)');
        if (firstVisible && selectedCategory !== 'all') {
          firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    // Category links click event (from navbar)
    if (categoryLinks.length > 0) {
      categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const selectedCategory = this.getAttribute('data-category');
          filterCategory(selectedCategory);

          // Close mobile menu if open
          if (navMenu) navMenu.classList.remove('active');
          if (navToggle) navToggle.classList.remove('active');
        });
      });
    }

    // Mobile menu toggle
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        if (navMenu) {
          navMenu.classList.toggle('active');
          this.classList.toggle('active');
        }
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', function() {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
      });
    }

    // Shop button functionality
    const shopButtons = document.querySelectorAll('.shop-button');
    if (shopButtons.length > 0) {
      shopButtons.forEach(button => {
        button.addEventListener('click', function() {
          const productInfo = this.closest('.product-info');
          if (productInfo) {
            const productNameEl = productInfo.querySelector('h3');
            const productName = productNameEl ? productNameEl.textContent : 'this product';
            alert(`Thank you for your interest in ${productName}!\n\nThis product will be added to your shopping cart.`);

            // Add animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
              this.style.transform = '';
            }, 200);
          }
        });
      });
    }

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  });
})();
