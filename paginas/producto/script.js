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

// Exchange Rates Data
const EXCHANGE_RATES = {
  USD: { buy: 850.5, sell: 870.0 },
  EUR: { buy: 920.0, sell: 940.0 },
  GBP: { buy: 1070.0, sell: 1090.0 },
};

// Services Data
const services = [
  {
    title: "Análisis de Datos",
    description: "Transformamos tus datos en decisiones estratégicas",
    features: [
      "Visualización de datos en tiempo real",
      "Informes personalizados",
      "Predicciones basadas en IA",
      "Integración con tus sistemas",
    ],
  },
  {
    title: "Ciberseguridad",
    description: "Protege tu negocio en el mundo digital",
    features: [
      "Auditorías de seguridad",
      "Protección contra amenazas",
      "Cumplimiento normativo",
      "Respuesta a incidentes",
    ],
  },
  // Add more services as needed
];

// International Payment Features
const features = [
  {
    title: "Pagos Globales",
    description: "Realiza transferencias internacionales a más de 180 países",
  },
  {
    title: "Múltiples Métodos",
    description: "Acepta pagos con tarjetas, transferencias y más",
  },
  {
    title: "Mejores Tasas",
    description: "Tipos de cambio competitivos y tarifas transparentes",
  },
  {
    title: "Soporte Empresarial",
    description: "Soluciones personalizadas para tu negocio",
  },
];

// Physical Locations Data
const locations = [
  {
    name: "Centro Financiero",
    address: "Av. Corrientes 1234, CABA",
    schedule: "Lun - Vie: 9:00 - 18:00",
    phone: "(011) 4555-0123",
  },
  {
    name: "Microcentro",
    address: "Florida 999, CABA",
    schedule: "Lun - Vie: 9:00 - 18:00",
    phone: "(011) 4555-0124",
  },
  {
    name: "Palermo",
    address: "Av. Santa Fe 3456, CABA",
    schedule: "Lun - Vie: 9:00 - 18:00",
    phone: "(011) 4555-0125",
  },
];

// Currency Exchange Calculator
function setupExchangeCalculator() {
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const operationSelect = document.getElementById("operation");
  const resultAmount = document.getElementById("result-amount");
  const exchangeInfo = document.getElementById("exchange-info");

  function calculateExchange() {
    const amount = parseFloat(amountInput.value) || 0;
    const currency = fromCurrencySelect.value;
    const operation = operationSelect.value;
    const rate = EXCHANGE_RATES[currency]?.[operation] || 0;

    resultAmount.textContent = `$ ${(amount * rate).toFixed(2)}`;
    exchangeInfo.textContent = `Tipo de cambio: ${rate} | Operación: ${
      operation === "buy" ? "Compra" : "Venta"
    }`;
  }

  [amountInput, fromCurrencySelect, operationSelect].forEach((element) => {
    element.addEventListener("input", calculateExchange);
  });
}

// Loan Calculator
function setupLoanCalculator() {
  const loanAmount = document.getElementById("loanAmount");
  const loanTerm = document.getElementById("loanTerm");
  const interestRate = document.getElementById("interestRate");
  const monthlyPayment = document.getElementById("monthly-payment");
  const loanInfo = document.getElementById("loan-info");

  function calculateLoan() {
    const principal = parseFloat(loanAmount.value) || 0;
    const monthlyRate = parseFloat(interestRate.value) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm.value);

    if (principal && monthlyRate && numberOfPayments) {
      const payment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      monthlyPayment.textContent = `$ ${payment.toFixed(2)}`;
      loanInfo.textContent = `Monto: $${principal} | Plazo: ${numberOfPayments} meses | Tasa: ${interestRate.value}%`;
    }
  }

  [loanAmount, loanTerm, interestRate].forEach((element) => {
    element.addEventListener("input", calculateLoan);
  });
}

/* PAGOS INTERNACIONALES */
var select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select("#animationWindow"),
  animData = {
    wrapper: animationWindow,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/world.json",
  },
  anim;

anim = bodymovin.loadAnimation(animData);
//anim.addEventListener("DOMLoaded", onDOMLoaded);
anim.setSpeed(1);

// Initialize all components
document.addEventListener("DOMContentLoaded", () => {
  setupExchangeCalculator();
  setupLoanCalculator();
  lucide.createIcons();


  // Selecciona las secciones que deseas animar
  const secciones = document.querySelectorAll(
    ".hero, .monedas, .pagos-internacionales, #cambio-internacional, .contenedor-calculadoras, #locations"
  );

  // Función para detectar cuando las secciones están en el viewport
  function checkVisibility() {
    secciones.forEach((seccion) => {
      const rect = seccion.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        seccion.classList.add("visible"); // Añade la clase para activar el fade-in
      }
    });
  }

  // Llama la función al hacer scroll
  window.addEventListener("scroll", checkVisibility);

  // Llama la función al cargar la página por si alguna sección ya está visible
  checkVisibility();
});