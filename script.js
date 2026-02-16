// =========================
// Typing Effect
// =========================
const words = ["Data Enthusiast", "Data Engineer", "System Thinker", "Problem Solver", "Team Player"];
let i = 0; // index kata
let j = 0; // index huruf
let isDeleting = false;
let speed = 100;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  const currentWord = words[i];
  
  if (!isDeleting) {
    // Typing
    typingElement.textContent = currentWord.slice(0, j++);
    
    if (j > currentWord.length) {
      isDeleting = true;
      speed = 1500; // pause setelah selesai ketik
    }
  } else {
    // Deleting
    typingElement.textContent = currentWord.slice(0, j--);
    
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      speed = 200;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : speed);
}

// start typing effect after DOM ready
document.addEventListener("DOMContentLoaded", typeEffect);


// =========================
// ScrollReveal Animations
// =========================
const sr = ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  reset: false, // true jika mau animasi muncul lagi saat scroll balik
});

// Hero Section
sr.reveal('.hero-left', { origin: 'left', delay: 300 });
sr.reveal('.hero-right', { origin: 'right', delay: 500 });

// About Section
sr.reveal('.about-left', { origin: 'left', delay: 200 });
sr.reveal('.about-right', { origin: 'right', delay: 400 });

// Experience Section
sr.reveal('.timeline-item', { origin: 'bottom', interval: 200 });

// Projects Section
sr.reveal('.project-card', { origin: 'bottom', interval: 200 });

// Contact Section
sr.reveal('.contact-card', { origin: 'bottom', interval: 200 });

// Optional: Footer fade-in
sr.reveal('footer', { origin: 'bottom', delay: 200 });

// =========================
// Skill Bar Animation
// =========================
sr.reveal('.skill', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  interval: 200,
  afterReveal: function(el) {
    const fill = el.querySelector('.skill-fill');
    if (fill) {
      fill.style.width = fill.getAttribute('data-percentage');
    }
  }
});
