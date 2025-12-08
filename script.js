// HIGH-TECH PORTFOLIO - INTERACTIVE JAVASCRIPT

// Performance Optimization: Lazy load animations and deferred script loading
const lazyLoadElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.lazy-load').forEach(el => observer.observe(el));
};

if ('IntersectionObserver' in window) {
  lazyLoadElements();
}

// Initialize lazy loading on DOM ready for better performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lazyLoadElements);
} else {
  lazyLoadElements();
}

// Smooth Scrolling
document.querySelectorAll('a[href*="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth'})}}});

// Navbar Scroll Effect
const navbar=document.querySelector('.navbar');window.addEventListener('scroll',()=>{if(window.scrollY>50){navbar.style.background='rgba(10,10,15,0.95)'}});

// Hamburger Menu Toggle
const hamburger=document.querySelector('.hamburger');const navLinks=document.querySelector('.nav-links');if(hamburger){hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active')})}

// Scroll Reveal Animation
const revealElements=document.querySelectorAll('.section-title,.project-card,.skill-category,.stat-box,.contact-item');const createParticles=()=>{const particlesContainer=document.createElement('div');particlesContainer.className='particles';document.body.appendChild(particlesContainer)};

// Form Submission Handler

// Cursor Follow Effect
const cursor=document.createElement('div');cursor.className='cursor-glow';cursor.style.cssText='position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:-1';document.body.appendChild(cursor);

// Project Card Tilt Effect
const projectCards=document.querySelectorAll('.project-card');projectCards.forEach(card=>{card.addEventListener('mousemove',(e)=>{const rect=card.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width;const y=(e.clientY-rect.top)/rect.height;const rotX=(y-0.5)*20;const rotY=(x-0.5)*20;card.style.transform=`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`});card.addEventListener('mouseleave',()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0)'})});

console.log('%c Portfolio Loaded! ', 'background: linear-gradient(135deg, #00f0ff, #ff00ff); color: #fff; font-size: 20px; padding: 10px 20px;');
