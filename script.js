// === Typing Effect ===
const typedText = document.querySelector(".typed-text");
const words = ["Aditi Jain", "Developer", "Creative Thinker"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const typed = currentWord.substring(0, charIndex);
  typedText.textContent = typed;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// === Navbar Toggle ===
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// === Google Sheets Contact Form ===
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbx9MZJUFY653IenR--_xdJAcTzBlDwntNrXg7B-QXArib-lJaQx9ABv0U8e__L0fv4_/exec", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        msg.textContent = "Message sent successfully!";
        setTimeout(() => {
          msg.textContent = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => {
        msg.textContent = "Something went wrong.";
        console.error("Error:", error.message);
      });
  });
}