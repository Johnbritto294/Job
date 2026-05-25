/**
 * 404.js - Premium animations and interactions for standalone 404 page
 */

document.addEventListener('DOMContentLoaded', () => {
  init3DParallax();
  initFloatingParticles();
});

// Interactive 3D Parallax Tilt Effect
function init3DParallax() {
  const card = document.querySelector('.error-card');
  const errNum = document.getElementById('error-num');
  const errGlow = document.getElementById('error-glow');
  
  if (!card || !errNum || !errGlow) return;
  
  // Throttle movement to ensure top-tier performance
  let ticking = false;
  
  card.addEventListener('mousemove', (e) => {
    if (ticking) return;
    
    ticking = true;
    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Sophisticated calculation for ultra-smooth perspective tilt
      const rotateX = -y / 16;
      const rotateY = x / 16;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // Move 404 texts with variable depth ratios (3D layer shift)
      const moveX = x / 10;
      const moveY = y / 10;
      errNum.style.transform = `translate3d(${moveX}px, ${moveY}px, 60px)`;
      errGlow.style.transform = `translate3d(${moveX}px, ${moveY}px, 45px) scale(0.95)`;
      
      ticking = false;
    });
  });
  
  card.addEventListener('mouseleave', () => {
    requestAnimationFrame(() => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      errNum.style.transform = 'translate3d(0, 0, 60px)';
      errGlow.style.transform = 'translate3d(0, 0, 45px) scale(0.95)';
    });
  });
}

// Generate dynamic floating neon background particles
function initFloatingParticles() {
  const wrap = document.getElementById('particles-wrap');
  if (!wrap) return;
  
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    
    // Vary size between 2px and 8px
    const size = Math.random() * 6 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-20px';
    
    // Random delays and float speeds
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = Math.random() * 8 + 6 + 's';
    
    // Balanced color split matching core brand tokens (cyan neon vs violet)
    p.style.background = Math.random() > 0.5 ? 'var(--neon)' : 'var(--secondary)';
    
    wrap.appendChild(p);
  }
}
