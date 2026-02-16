const words = ["Data Enthusiast", "Data Engineer", "System Thinker", "Problem Solver", "Team Player"];

let i = 0;            // index kata
let j = 0;            // index huruf
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

document.addEventListener("DOMContentLoaded", typeEffect);
