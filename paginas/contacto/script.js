const header = document.getElementById("main-header");
const logo = document.getElementById("main-logo");

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

function validateForm(event) {
  event.preventDefault();
  
  document.querySelectorAll('input, textarea').forEach(element => {
      element.classList.remove('error');
  });
  
  let isValid = true;
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const telefono = document.getElementById('telefono');
  const email = document.getElementById('email');
  const provincia = document.getElementById('provincia');
  const mensaje = document.getElementById('mensaje');
  
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
      nombre.classList.add('error');
      isValid = false;
  }
  
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
      apellido.classList.add('error');
      isValid = false;
  }
  
  if (!/^[0-9]{10}$/.test(telefono.value)) {
      telefono.classList.add('error');
      isValid = false;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      isValid = false;
  }
  
  if (provincia.value.trim() === '') {
      provincia.classList.add('error');
      isValid = false;
  }
  
  if (mensaje.value.trim().length < 10) {
      mensaje.classList.add('error');
      isValid = false;
  }
  
  if (isValid) {
      document.getElementById('successMessage').style.display = 'block';
      
      setTimeout(() => {
          document.getElementById('contactForm').reset();
          document.getElementById('successMessage').style.display = 'none';
      }, 2000);
  }
  
  return false;
}

document.querySelectorAll('input, textarea').forEach(element => {
  element.addEventListener('input', function() {
      this.classList.remove('error');
  });
});
