// HIGH-TECH PORTFOLIO - INTERACTIVE JAVASCRIPT

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'})}})});

// Navbar Scroll Effect
const navbar=document.querySelector('.navbar');window.addEventListener('scroll',()=>{if(window.scrollY>50){navbar.style.background='rgba(10,10,15,0.95)';navbar.style.boxShadow='0 5px 30px rgba(0,240,255,0.2)'}else{navbar.style.background='rgba(10,10,15,0.7)';navbar.style.boxShadow='none'}});

// Hamburger Menu Toggle
const hamburger=document.querySelector('.hamburger');const navLinks=document.querySelector('.nav-links');if(hamburger){hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active');hamburger.classList.toggle('active')})};

// Scroll Reveal Animation
const revealElements=document.querySelectorAll('.section-title,.project-card,.skill-category,.stat-box,.contact-item');const revealOnScroll=()=>{revealElements.forEach(el=>{const elementTop=el.getBoundingClientRect().top;const windowHeight=window.innerHeight;if(elementTop<windowHeight-100){el.style.opacity='1';el.style.transform='translateY(0)'}})};revealElements.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(50px)';el.style.transition='all 0.6s ease-out'});window.addEventListener('scroll',revealOnScroll);revealOnScroll();

// Typing Effect for Hero
const heroText=document.querySelector('.hero h2');if(heroText){const text=heroText.textContent;heroText.textContent='';let i=0;const typeWriter=()=>{if(i<text.length){heroText.textContent+=text.charAt(i);i++;setTimeout(typeWriter,100)}};setTimeout(typeWriter,500)};

// Animated Counter for Stats
const counters=document.querySelectorAll('.stat-box h3');const speed=200;counters.forEach(counter=>{const updateCount=()=>{const target=+counter.getAttribute('data-target')||parseInt(counter.textContent);const count=+counter.innerText.replace(/\+/g,'');const inc=target/speed;if(count<target){counter.innerText=Math.ceil(count+inc)+'+';setTimeout(updateCount,1)}else{counter.innerText=target+'+'}};const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){updateCount();observer.unobserve(entry.target)}})},{threshold:0.5});observer.observe(counter)});

// Particle Effect
const createParticles=()=>{const particlesContainer=document.createElement('div');particlesContainer.className='particles';document.body.appendChild(particlesContainer);for(let i=0;i<50;i++){const particle=document.createElement('div');particle.className='particle';particle.style.cssText=`position:fixed;width:${Math.random()*4+1}px;height:${Math.random()*4+1}px;background:rgba(0,240,255,${Math.random()*0.5+0.2});border-radius:50%;pointer-events:none;left:${Math.random()*100}vw;top:${Math.random()*100}vh;animation:float ${Math.random()*20+10}s linear infinite;z-index:0`;particlesContainer.appendChild(particle)}};const style=document.createElement('style');style.textContent='@keyframes float{0%{transform:translateY(0) translateX(0)}50%{transform:translateY(-100px) translateX(50px)}100%{transform:translateY(0) translateX(0)}}';document.head.appendChild(style);createParticles();

// Form Submission Handler

// Cursor Follow Effect
const cursor=document.createElement('div');cursor.className='cursor-glow';cursor.style.cssText='position:fixed;width:400px;height:400px;background:radial-gradient(circle,rgba(0,240,255,0.1),transparent 70%);border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);transition:all 0.1s ease;z-index:9999';document.body.appendChild(cursor);document.addEventListener('mousemove',(e)=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});

// Project Card Tilt Effect
const projectCards=document.querySelectorAll('.project-card');projectCards.forEach(card=>{card.addEventListener('mousemove',(e)=>{const rect=card.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width;const y=(e.clientY-rect.top)/rect.height;const tiltX=(y-0.5)*10;const tiltY=(x-0.5)*-10;card.style.transform=`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;});card.addEventListener('mouseleave',()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0) translateY(0)'})});

console.log('%c Portfolio Loaded! ','background: linear-gradient(135deg, #00f0ff, #ff00ff); color: #fff; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
