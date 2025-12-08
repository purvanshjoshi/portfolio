// Professional Portfolio - Interactive JavaScript

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Card Hover Effects with Tilt
const cards = document.querySelectorAll('.stat-card, .skill-category, .project-card, .contact-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    const rotateX = (yPercent - 50) * 0.5;
    const rotateY = (50 - xPercent) * 0.5;
    
    card.style.perspective = '1000px';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

// Parallax Scroll Effect for Hero Section
const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroSection.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
  });
}

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinksList = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  document.documentElement.style.setProperty('--cursor-x', `${x}px`);
  document.documentElement.style.setProperty('--cursor-y', `${y}px`);
});

// Button Click Effects
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Type Animation for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let index = 0;
  
  const typeInterval = setInterval(() => {
    if (index < text.length) {
      heroTitle.textContent += text[index];
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, 50);
}

// Handle External Links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', (e) => {
    // Optional: Add tracking or other logic
    link.style.textDecoration = 'underline';
  });
});

// Smooth Page Load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Log portfolio loaded
console.log('%cPortfolio Loaded Successfully', 'color: #00f0ff; font-size: 16px; font-weight: bold;');
