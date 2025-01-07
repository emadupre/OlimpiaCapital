const header = document.getElementById("main-header");
const logo = document.getElementById("main-logo");

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

const createCircles = () => {
  const container = document.getElementById('floatingCircles');
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.width = `${Math.random() * 50 + 20}px`;
    circle.style.height = circle.style.width;
    circle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(circle);
  }
};
const revealOnScroll = () => {
  const element = document.querySelector('.about-content');
  const elementTop = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (elementTop < windowHeight - 100) {
    element.classList.add('visible');
  }
};
function revealStepCards() {
  const cards = document.querySelectorAll('.step-card');
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 200);
    }
  });
}
createCircles();
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', revealStepCards);
revealOnScroll();
revealStepCards();


// Rutas corregidas
const defaultLogo = "./src/LOGO-HORIZONTAL-PNG-A-COLOR.png";
const scrolledLogo = "./src/LOGO-SOLO-A-COLOR.png";

// Función para manejar el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
