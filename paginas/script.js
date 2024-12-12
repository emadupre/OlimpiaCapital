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
    USD: { buy: 850.50, sell: 870.00 },
    EUR: { buy: 920.00, sell: 940.00 },
    GBP: { buy: 1070.00, sell: 1090.00 },
};

// Services Data
const services = [
    {
        title: 'Análisis de Datos',
        description: 'Transformamos tus datos en decisiones estratégicas',
        features: [
            'Visualización de datos en tiempo real',
            'Informes personalizados',
            'Predicciones basadas en IA',
            'Integración con tus sistemas'
        ]
    },
    {
        title: 'Ciberseguridad',
        description: 'Protege tu negocio en el mundo digital',
        features: [
            'Auditorías de seguridad',
            'Protección contra amenazas',
            'Cumplimiento normativo',
            'Respuesta a incidentes'
        ]
    },
    // Add more services as needed
];

// International Payment Features
const features = [
    {
        title: 'Pagos Globales',
        description: 'Realiza transferencias internacionales a más de 180 países'
    },
    {
        title: 'Múltiples Métodos',
        description: 'Acepta pagos con tarjetas, transferencias y más'
    },
    {
        title: 'Mejores Tasas',
        description: 'Tipos de cambio competitivos y tarifas transparentes'
    },
    {
        title: 'Soporte Empresarial',
        description: 'Soluciones personalizadas para tu negocio'
    }
];

// Physical Locations Data
const locations = [
    {
        name: 'Centro Financiero',
        address: 'Av. Corrientes 1234, CABA',
        schedule: 'Lun - Vie: 9:00 - 18:00',
        phone: '(011) 4555-0123'
    },
    {
        name: 'Microcentro',
        address: 'Florida 999, CABA',
        schedule: 'Lun - Vie: 9:00 - 18:00',
        phone: '(011) 4555-0124'
    },
    {
        name: 'Palermo',
        address: 'Av. Santa Fe 3456, CABA',
        schedule: 'Lun - Vie: 9:00 - 18:00',
        phone: '(011) 4555-0125'
    }
];

// Currency Exchange Calculator
function setupExchangeCalculator() {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const operationSelect = document.getElementById('operation');
    const resultAmount = document.getElementById('result-amount');
    const exchangeInfo = document.getElementById('exchange-info');

    function calculateExchange() {
        const amount = parseFloat(amountInput.value) || 0;
        const currency = fromCurrencySelect.value;
        const operation = operationSelect.value;
        const rate = EXCHANGE_RATES[currency]?.[operation] || 0;
        
        resultAmount.textContent = `$ ${(amount * rate).toFixed(2)}`;
        exchangeInfo.textContent = `Tipo de cambio: ${rate} | Operación: ${operation === 'buy' ? 'Compra' : 'Venta'}`;
    }

    [amountInput, fromCurrencySelect, operationSelect].forEach(element => {
        element.addEventListener('input', calculateExchange);
    });
}

// Loan Calculator
function setupLoanCalculator() {
    const loanAmount = document.getElementById('loanAmount');
    const loanTerm = document.getElementById('loanTerm');
    const interestRate = document.getElementById('interestRate');
    const monthlyPayment = document.getElementById('monthly-payment');
    const loanInfo = document.getElementById('loan-info');

    function calculateLoan() {
        const principal = parseFloat(loanAmount.value) || 0;
        const monthlyRate = (parseFloat(interestRate.value) / 100) / 12;
        const numberOfPayments = parseFloat(loanTerm.value);

        if (principal && monthlyRate && numberOfPayments) {
            const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            
            monthlyPayment.textContent = `$ ${payment.toFixed(2)}`;
            loanInfo.textContent = `Monto: $${principal} | Plazo: ${numberOfPayments} meses | Tasa: ${interestRate.value}%`;
        }
    }

    [loanAmount, loanTerm, interestRate].forEach(element => {
        element.addEventListener('input', calculateLoan);
    });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    setupExchangeCalculator();
    setupLoanCalculator();

    // Render services
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Render features
    const featuresGrid = document.querySelector('.features-grid');
    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(featureCard);
    });

    // Render locations
    const locationsGrid = document.querySelector('.locations-grid');
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.innerHTML = `
            <h3>${location.name}</h3>
            <div class="location-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${location.address}</span>
            </div>
            <div class="location-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
                <span>${location.schedule}</span>
            </div>
            <div class="location-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>${location.phone}</span>
            </div>
        `;
        locationsGrid.appendChild(locationCard);
    });
});