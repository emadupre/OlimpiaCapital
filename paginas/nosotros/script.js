// Función para manejar la visibilidad de las sections
const handleSectionVisibility = () => {
  const sections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
};

// Función para manejar el menú toggle
const handleMenuToggle = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
};

// Función para crear círculos flotantes
const createFloatingCircles = () => {
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

// Función para revelar contenido al hacer scroll
const revealOnScroll = () => {
  const element = document.querySelector('.about-content');
  const elementTop = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight - 100) {
    element.classList.add('visible');
  }
};

// Función para revelar tarjetas con retraso
const revealStepCards = () => {
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
};

// Función para manejar la clase de scroll en el header
const handleHeaderScroll = () => {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
};

// Inicialización de todas las funciones
const init = () => {
  handleSectionVisibility();
  handleMenuToggle();
  createFloatingCircles();
  handleHeaderScroll();

  // Agregar eventos de scroll
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('scroll', revealStepCards);

  // Llamada inicial para revelar contenido si ya es visible al cargar
  revealOnScroll();
  revealStepCards();
};

// Iniciar todas las funciones al cargar la página
document.addEventListener('DOMContentLoaded', init);



