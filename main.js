// ============================================
// Header Scroll Effect
// ============================================

const header = document.getElementById('site-header');

function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check

// ============================================
// Mobile Navigation Toggle
// ============================================

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navList.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (!isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

navToggle.addEventListener('click', toggleNav);

// Close menu when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 767) {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 767) {
    const isClickInsideNav = navList.contains(e.target) || navToggle.contains(e.target);
    if (!isClickInsideNav && navList.classList.contains('active')) {
      toggleNav();
    }
  }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[data-scroll], a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const targetId = this.getAttribute('data-scroll') || href;
    
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ============================================
// Button Scroll Handlers
// ============================================

document.querySelectorAll('button[data-scroll]').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-scroll');
    
    if (targetId && targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
