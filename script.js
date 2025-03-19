document.addEventListener("DOMContentLoaded", function () {
  const tiles = document.querySelectorAll(".tile");


  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  if (tiles.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const tile = entry.target;

          if (entry.isIntersecting) {
            tile.classList.add("visible");
            tile.classList.remove("hidden");
          } else {
            tile.classList.remove("visible");
            tile.classList.add("hidden");
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral según necesites
    );

    tiles.forEach((tile) => {
      observer.observe(tile);
    });
  }

  const sections = [
    document.querySelector(".hubs"),
    document.querySelector(".mission-container"),
    document.querySelector(".tarjetas-accordion"),
    document.querySelector(".horizontal-container"),
  ];

  // Función para detectar cuando una sección está en el viewport
  function checkVisibility() {
    sections.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("visible"); // Añade la clase para activar el fade-in
        }
      }
    });
  }
  // Llama la función al hacer scroll
  window.addEventListener("scroll", checkVisibility);

  // Llama la función al cargar la página por si alguna sección ya está visible
  checkVisibility();

  gsap.registerPlugin(ScrollTrigger);

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

  // Scrolling cards functionality
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll(".card[data-scroll]").forEach((card) => {
    observer.observe(card);
  });

  const handleSmoothScroll = () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll(".card[data-scroll]").forEach((card) => {
      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > cardTop) {
        const distance = (scrollPosition + windowHeight - cardTop) * 0.1;
        card.style.transform = `translateY(-${Math.min(
          distance,
          cardHeight * 0.2
        )}px)`;
      }
    });
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleSmoothScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  const heroImage = document.querySelector(".hero-image img");

  if (heroImage) {
    heroImage.classList.add("loaded");
  }

  // TARJETAS

  const { ScrollObserver, valueAtPercentage } = aat;

  const cardsContainer = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  cardsContainer.style.setProperty("--cards-count", cards.length);
  cardsContainer.style.setProperty(
    "--card-height",
    `${cards[0].clientHeight}px`
  );
  Array.from(cards).forEach((card, index) => {
    const offsetTop = 20 + index * 20;
    card.style.paddingTop = `${offsetTop}px`;
    if (index === cards.length - 1) {
      return;
    }
    const toScale = 1 - (cards.length - 1 - index) * 0.1;
    const nextCard = cards[index + 1];
    const cardInner = card.querySelector(".card__inner");
    ScrollObserver.Element(nextCard, {
      offsetTop,
      offsetBottom: window.innerHeight - card.clientHeight,
    }).onScroll(({ percentageY }) => {
      cardInner.style.scale = valueAtPercentage({
        from: 1,
        to: toScale,
        percentage: percentageY,
      });
      cardInner.style.filter = `brightness(${valueAtPercentage({
        from: 1,
        to: 0.6,
        percentage: percentageY,
      })})`;
    });
  });

  const tarjetas = document.querySelectorAll(".che_tarjeta-flotante");

  if (tarjetas.length > 0) {
    const observador = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("che_mostrar");
            observador.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    tarjetas.forEach((tarjeta) => {
      observador.observe(tarjeta);
    });
  }

  const track = document.querySelector(".carousel-track");

  if (track) {
    // Función para reiniciar la animación cuando sea necesario
    const resetAnimation = () => {
      track.style.animation = "none";
      track.offsetHeight; // Trigger reflow
      track.style.animation = null;
    };

    // Reiniciar la animación cuando termine
    track.addEventListener("animationend", resetAnimation);
  }

  // Seleccionar los elementos
  const horizontalElement = document.querySelector(".horizontal");
  const horizontalContainer = document.querySelector(".horizontal-container");

  // Configurar la animación para el scroll horizontal
  if (horizontalElement && horizontalContainer) {
    gsap.to(horizontalElement, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalContainer,
        start: "top top",
        end: () => "+=" + horizontalElement.offsetWidth,
        scrub: true,
        pin: true,
      },
    });
  }

  const phrases = [
    "Soluciones Financieras",
    "Unete ahora a Olimpia",
  ];

  const el = document.querySelector(".text");
  
  let counter = 0;
  
  const next = () => {
    el.style.opacity = 0;  // Hacer que el texto se desvanezca

    setTimeout(() => {
      el.textContent = phrases[counter];  // Cambiar el texto
      el.style.opacity = 1;  // Volver a hacer visible el nuevo texto
    }, 1000);  // Tiempo de espera antes de cambiar el texto

    counter = (counter + 1) % phrases.length; // Alternar entre las frases
  };

  next(); // Iniciar la animación
  setInterval(next, 4000); // Cambiar de texto cada 3 segundos
});
