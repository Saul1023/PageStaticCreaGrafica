import '../styles/styles.css'

// Datos de productos
const products = {
    parejas: [
        { name: "Taza Pareja Romántica", img: "/images/pareja.jpg", price: 22 },
        { name: "Taza Pareja Elegante", img: "/images/pareja2.jpg", price: 22 },
        { name: "Taza Pareja Divertida", img: "/images/Pareja3.jpg", price: 22 },
        { name: "Taza Pareja Moderna", img: "/images/Pareja4.jpg", price: 22 },
        { name: "Taza Pareja Clásica", img: "/images/Pareja5.jpg", price: 22 },
        { name: "Taza Pareja Original", img: "/images/pareja6.jpg", price: 22 }
    ],
    ninos: [
        { name: "Taza Niño Divertida", img: "/images/niño1.jpg", price: 22 },
        { name: "Taza Niño Colorida", img: "/images/niño2.jpg", price: 22 },
        { name: "Taza Niño Animado", img: "/images/niño3.jpg", price: 22 },
        { name: "Taza Niño Educativo", img: "/images/niño4.jpg", price: 22 },
        { name: "Taza Niño Personalizada", img: "/images/niño5.jpg", price: 22 },
        { name: "Taza Niño Original", img: "/images/niño6.jpg", price: 22 }
    ],
    graduacion: [
        { name: "Taza Graduación Elegante", img: "/images/Graduado.jpg", price: 22 },
        { name: "Taza Graduación Clásica", img: "/images/Graduado2.jpg", price: 22 },
        { name: "Taza Graduación Moderna", img: "/images/Graduado3.jpg", price: 22 },
        { name: "Taza Graduación Personalizada", img: "/images/Graduado4.jpg", price: 22 },
        { name: "Taza Graduación Original", img: "/images/Graduado5.jpg", price: 22 },
        { name: "Taza Graduación Especial", img: "/images/Graduado6.jpg", price: 22 }
    ]
};

// Función para cargar componentes HTML
async function loadComponent(selector, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = html;
        }
        return html;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        return null;
    }
}

// Renderizar productos
function renderProducts() {
    const parejasContainer = document.getElementById('products-parejas');
    if (parejasContainer) {
        parejasContainer.innerHTML = products.parejas.map(product => `
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${product.img}" alt="${product.name}" class="w-full h-64 object-cover" 
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${product.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart" 
                    data-name="${product.name}" data-price="${product.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join('');
    }

    const ninosContainer = document.getElementById('products-ninos');
    if (ninosContainer) {
        ninosContainer.innerHTML = products.ninos.map(product => `
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${product.img}" alt="${product.name}" class="w-full h-64 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${product.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart"
                    data-name="${product.name}" data-price="${product.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join('');
    }

    const graduacionContainer = document.getElementById('products-graduacion');
    if (graduacionContainer) {
        graduacionContainer.innerHTML = products.graduacion.map(product => `
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${product.img}" alt="${product.name}" class="w-full h-64 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${product.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart"
                    data-name="${product.name}" data-price="${product.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join('');
    }
}

// Carrito de compras
let cartCount = 0;

function updateCartCount() {
    const cartSpans = document.querySelectorAll('.cart-count');
    cartSpans.forEach(span => {
        span.textContent = cartCount;
    });
}

function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = `toast ${isError ? 'error' : ''}`;
    notification.innerHTML = `
    <div class="flex items-center">
      <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'} mr-2"></i>
      <span>${message}</span>
    </div>
  `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Inicializar eventos
function initializeEvents() {
    // Añadir al carrito
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.add-to-cart');
        if (button) {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            cartCount++;
            updateCartCount();
            showNotification(`${productName} agregado al carrito - ${productPrice} Bs`);
        }
    });

    // Menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Botón volver arriba
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name || !email || !message) {
                showNotification('Por favor completa todos los campos', true);
                return;
            }

            if (!email.includes('@')) {
                showNotification('Por favor ingresa un email válido', true);
                return;
            }

            showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput?.value.trim();

            if (!email || !email.includes('@')) {
                showNotification('Por favor ingresa un email válido', true);
                return;
            }

            showNotification('¡Gracias por suscribirte!');
            emailInput.value = '';
        });
    }

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Inicializar la aplicación
async function init() {
    await loadComponent('#navbar-container', '/src/components/navbar.html');
    await loadComponent('#hero-container', '/src/components/hero.html');
    await loadComponent('#products-container', '/src/components/products.html');
    await loadComponent('#footer-container', '/src/components/footer.html');

    renderProducts();
    initializeEvents();
    updateCartCount();
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}