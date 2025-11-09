// document.addEventListener("DOMContentLoaded", function() {
//   // --- Slider ---
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');
//   let current = 0;
//   let timer;

//   function showSlide(idx) {
//     slides.forEach((slide, i) => {
//       slide.classList.toggle('active', i === idx);
//       dots[i].classList.toggle('active', i === idx);
//     });
//     current = idx;
//   }

//   function nextSlide() {
//     let next = (current + 1) % slides.length;
//     showSlide(next);
//   }

//   function startAutoSlide() {
//     timer = setInterval(nextSlide, 3500);
//   }

//   function stopAutoSlide() {
//     clearInterval(timer);
//   }

//   dots.forEach((dot, idx) => {
//     dot.addEventListener('click', () => {
//       showSlide(idx);
//       stopAutoSlide();
//       startAutoSlide();
//     });
//   });

//   showSlide(0);
//   startAutoSlide();


// });

// --- Hamburger menu ---
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const menuClose = document.querySelector('.menu-close');

function toggleMenu() {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  // ป้องกันการ scroll เมื่อเมนูเปิด
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
  navMenu.classList.remove('active');
  navToggle.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle.onclick = toggleMenu;
menuClose.onclick = closeMenu;

// ปิดเมนูเมื่อคลิกที่ลิงก์
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 1024) {
      closeMenu();
    }
  });
});

// --- Dropdown (mobile only) ---
document.querySelectorAll('.dropdown > a').forEach(function(el) {
  el.onclick = function(e) {
    if(window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  };
});

// --- Read More/Show Less for ingredients ---
function toggleIngredients(btn) {
  const container = btn.parentElement;
  const shortText = container.querySelector('.ingredients-short');
  const fullText = container.querySelector('.ingredients-full');
  if (fullText.style.display === "none") {
    fullText.style.display = "inline";
    shortText && (shortText.style.display = "none");
    btn.textContent = "Show Less";
  } else {
    fullText.style.display = "none";
    shortText && (shortText.style.display = "inline");
    btn.textContent = "Read More";
  }
}

// --- Dropdown click outside to close ---
function toggleDropdown(event) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    const dropdown = event.target.parentElement;
    dropdown.classList.toggle('open');
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});

// --- Smooth scroll ---
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// --- Highlight active menu on scroll ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  // เพิ่ม scrolled class เมื่อเลื่อนเกิน 100px (ทุกขนาดหน้าจอ)
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active menu
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  let currentId = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) {
      currentId = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
});

// --- Scroll reveal animations ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.channel-card, .fact-card, .point, .info-item, .carousel-item');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

// --- Form submission handler ---
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.submit-button');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(function() {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = '#4caf50';

      setTimeout(function() {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        contactForm.reset();
      }, 2000);
    }, 1500);
  });
}