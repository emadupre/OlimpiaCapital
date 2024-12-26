const header = document.getElementById("main-header");
const logo = document.getElementById("main-logo");

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

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
