import '../styles/styles.css'

import navbarHtml from './components/navbar.html?raw'
import heroHtml from './components/hero.html?raw'
import productsHtml from './components/products.html?raw'
import footerHtml from './components/footer.html?raw'
import chatbotHtml from './components/chatbot.html?raw'

// ─── Datos de productos ───────────────────────────────────────────────────────
const products = {
    parejas: [
        { name: "Taza Pareja Romántica", img: "./images/pareja.jpg", price: 22 },
        { name: "Taza Pareja Elegante", img: "./images/pareja2.jpg", price: 22 },
        { name: "Taza Pareja Divertida", img: "./images/Pareja3.jpg", price: 22 },
        { name: "Taza Pareja Moderna", img: "./images/Pareja4.jpg", price: 22 },
        { name: "Taza Pareja Clásica", img: "./images/Pareja5.jpg", price: 22 },
        { name: "Taza Pareja Original", img: "./images/pareja6.jpg", price: 22 }
    ],
    ninos: [
        { name: "Taza Niño Divertida", img: "./images/niño1.jpg", price: 22 },
        { name: "Taza Niño Colorida", img: "./images/niño2.jpg", price: 22 },
        { name: "Taza Niño Animado", img: "./images/niño3.jpg", price: 22 },
        { name: "Taza Niño Educativo", img: "./images/niño4.jpg", price: 22 },
        { name: "Taza Niño Personalizada", img: "./images/niño5.jpg", price: 22 },
        { name: "Taza Niño Original", img: "./images/niño6.jpg", price: 22 }
    ],
    graduacion: [
        { name: "Taza Graduación Elegante", img: "./images/Graduado.jpg", price: 22 },
        { name: "Taza Graduación Clásica", img: "./images/Graduado2.jpg", price: 22 },
        { name: "Taza Graduación Moderna", img: "./images/Graduado3.jpg", price: 22 },
        { name: "Taza Graduación Personalizada", img: "./images/Graduado4.jpg", price: 22 },
        { name: "Taza Graduación Original", img: "./images/Graduado5.jpg", price: 22 },
        { name: "Taza Graduación Especial", img: "./images/Graduado6.jpg", price: 22 }
    ]
};

// ─── Inyector de componentes ──────────────────────────────────────────────────
function injectComponent(selector, htmlContent) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = htmlContent;
}

// ─── Render de productos ──────────────────────────────────────────────────────
function renderProducts() {
    const productCard = (product) => `
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
      </div>`;

    ['parejas', 'ninos', 'graduacion'].forEach(cat => {
        const el = document.getElementById(`products-${cat}`);
        if (el) el.innerHTML = products[cat].map(productCard).join('');
    });
}

// ─── Carrito ──────────────────────────────────────────────────────────────────
let cartCount = 0;

function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(s => s.textContent = cartCount);
}

function showNotification(message, isError = false) {
    const n = document.createElement('div');
    n.className = `toast ${isError ? 'error' : ''}`;
    n.innerHTML = `<div class="flex items-center">
      <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'} mr-2"></i>
      <span>${message}</span></div>`;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}

// ─── Eventos generales ────────────────────────────────────────────────────────
function initializeEvents() {
    // Carrito
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart');
        if (btn) {
            cartCount++;
            updateCartCount();
            showNotification(`${btn.dataset.name} agregado al carrito - ${btn.dataset.price} Bs`);
        }
    });

    // Menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));

    // Back to top
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', () =>
            backBtn.classList.toggle('hidden', window.pageYOffset <= 300));
        backBtn.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Formulario de contacto
    document.getElementById('contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        if (!name || !email || !message) {
            showNotification('Por favor completa todos los campos', true); return;
        }
        if (!email.includes('@')) {
            showNotification('Por favor ingresa un email válido', true); return;
        }
        showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        e.target.reset();
    });

    // Newsletter
    document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input[type="email"]');
        if (!input?.value.trim().includes('@')) {
            showNotification('Por favor ingresa un email válido', true); return;
        }
        showNotification('¡Gracias por suscribirte!');
        input.value = '';
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                mobileMenu?.classList.add('hidden');
            }
        });
    });
}

// ─── Chatbot ──────────────────────────────────────────────────────────────────
const KB = [
    {
        keys: ['hola', 'buenas', 'buenos', 'tardes', 'noches', 'saludos', 'qué tal', 'hey', 'hi'],
        answer: '¡Hola! 👋 Bienvenido a <strong>CREAGRAFICA</strong>. Somos especialistas en productos personalizados por sublimación. ¿En qué te puedo ayudar?',
        quick: ['Ver productos', 'Precios', 'Tiempos de entrega', 'Hacer un pedido']
    },
    {
        keys: ['producto', 'productos', 'catálogo', 'ofrecen', 'venden', 'artículos', 'hacen', 'qué tienen', 'fabrican'],
        answer: 'Trabajamos con una variedad de productos personalizados:\n\n☕ <strong>Tazas</strong> — blancas, mágicas y de viaje\n👕 <strong>Polos sublimados</strong>\n🎒 <strong>Tote bags</strong> personalizadas\n🔑 <strong>Llaveros</strong> con diseño propio\n🎁 <strong>Kits corporativos</strong> para empresas\n\n¿Quieres info de alguno en particular?',
        quick: ['Tazas personalizadas', 'Polos sublimados', 'Precios', 'Hacer un pedido']
    },
    {
        keys: ['taza', 'tazas', 'mug', 'mugs', 'magica', 'mágica', 'viaje', 'termo'],
        answer: '☕ Nuestras <strong>tazas personalizadas</strong>:\n\n• Taza blanca 11oz — desde <strong>22 Bs</strong>\n• Taza mágica (cambia de color) — desde <strong>35 Bs</strong>\n• Taza de viaje / termo — desde <strong>50 Bs</strong>\n\nImpresión de alta calidad resistente al lavado. ✅',
        quick: ['Quiero cotizar', '¿Cómo envío mi diseño?', 'Hacer un pedido']
    },
    {
        keys: ['polo', 'polos', 'camiseta', 'camisetas', 'remera', 'hoodie', 'ropa', 'sublimado'],
        answer: '👕 Personalizamos ropa con <strong>sublimación de alta calidad</strong>:\n\n• Polo básico sublimado — desde <strong>90 Bs</strong>\n• Polo premium algodón — desde <strong>110 Bs</strong>\n• Hoodie personalizado — desde <strong>180 Bs</strong>\n\nDisponible en tallas XS – XXXL. 🎨',
        quick: ['Cotizar polos', '¿Qué tallas tienen?', 'Precios', 'Hacer un pedido']
    },
    {
        keys: ['precio', 'precios', 'costo', 'cuánto cuesta', 'vale', 'valor', 'tarifa', 'cobran', 'cuánto'],
        answer: 'Nuestros precios:\n\n☕ Tazas desde <strong>22 Bs</strong>\n👕 Polos desde <strong>90 Bs</strong>\n🎒 Tote bags desde <strong>55 Bs</strong>\n🔑 Llaveros desde <strong>20 Bs</strong>\n\n📦 Pedidos de <strong>10+ unidades</strong> tienen descuento especial.',
        quick: ['Quiero cotizar', 'Descuentos por volumen', '¿Cómo pago?', 'Hacer un pedido']
    },
    {
        keys: ['descuento', 'descuentos', 'volumen', 'mayor', 'mayoreo', 'cantidad', 'oferta', 'promocion'],
        answer: '🎉 <strong>Descuentos por volumen</strong>:\n\n• 10–20 unidades → <strong>10% off</strong>\n• 21–50 unidades → <strong>15% off</strong>\n• 51+ unidades → <strong>20% off</strong>\n\nEn pedidos corporativos grandes el diseño puede ir sin costo.',
        quick: ['Cotización corporativa', '¿Cómo pago?', 'Tiempos de entrega', 'Contactar asesor']
    },
    {
        keys: ['tiempo', 'entrega', 'demora', 'cuánto tarda', 'días', 'plazo', 'espera', 'cuándo', 'listo'],
        answer: '⏱️ Tiempos de entrega:\n\n• <strong>Estándar:</strong> 3 a 5 días hábiles\n• <strong>Express:</strong> 24 – 48 horas (recargo)\n• <strong>Corporativos:</strong> 7 a 10 días hábiles\n\nTe avisamos por WhatsApp cuando esté listo. 📲',
        quick: ['¿Hay envío a domicilio?', '¿Cómo pago?', 'Hacer un pedido']
    },
    {
        keys: ['envío', 'envios', 'domicilio', 'delivery', 'despacho', 'llegan', 'envían', 'recojo'],
        answer: '🚚 Opciones de entrega:\n\n• <strong>Recojo en tienda</strong> — sin costo\n• <strong>Delivery La Paz y El Alto</strong> — costo según zona\n• <strong>Encomienda a otras ciudades</strong> — coordinamos',
        quick: ['¿Dónde están ubicados?', 'Tiempos de entrega', 'Hacer un pedido']
    },
    {
        keys: ['pago', 'pagar', 'transferencia', 'qr', 'efectivo', 'tarjeta', 'acepta', 'forma de pago', 'cómo pago'],
        answer: '💳 Métodos de pago:\n\n• <strong>Efectivo</strong> en tienda\n• <strong>Transferencia bancaria</strong> (Banco Unión, BCP)\n• <strong>Pago QR</strong> (Tigo Money, BNB)\n• <strong>Tarjeta débito/crédito</strong> en tienda\n\nSolicitamos <strong>50% de anticipo</strong> para iniciar. ✅',
        quick: ['¿Cómo envío mi diseño?', 'Tiempos de entrega', 'Hacer un pedido']
    },
    {
        keys: ['diseño', 'logo', 'archivo', 'imagen', 'formato', 'pdf', 'png', 'ai', 'psd', 'subir'],
        answer: '🎨 Envíanos tu diseño por <strong>WhatsApp o correo</strong>:\n\n✅ <strong>Ideal:</strong> AI, EPS, PDF vectorial\n✅ <strong>Aceptamos:</strong> PNG o JPG mínimo 300 dpi\n\n¿No tienes diseño? Lo creamos por ti desde <strong>50 Bs</strong>. 💡',
        quick: ['No tengo diseño', 'Hacer un pedido', 'Contacto']
    },
    {
        keys: ['no tengo diseño', 'quiero diseño', 'crear diseño', 'hacen diseño', 'sin diseño'],
        answer: '✏️ ¡No hay problema! Nuestro equipo diseña desde cero.\n\nServicio desde <strong>50 Bs</strong> según complejidad. Solo cuéntanos tu idea: colores, estilo, texto. 🎉',
        quick: ['Quiero cotizar', 'Hacer un pedido', 'Precios']
    },
    {
        keys: ['corporativo', 'empresa', 'empresas', 'kit', 'regalo empresa', 'negocio', 'factura'],
        answer: '🏢 Paquetes para <strong>empresas y eventos</strong>:\n\n• Descuentos del 10 al 20% por volumen\n• Diseño incluido en pedidos grandes\n• Factura y documentación contable\n• Asesor dedicado\n\n¡Conversemos y armamos una propuesta!',
        quick: ['Solicitar cotización', '¿Cómo pago?', 'Tiempos de entrega']
    },
    {
        keys: ['garantía', 'garantia', 'defecto', 'error', 'problema', 'devolución', 'reclamo', 'salió mal'],
        answer: '🛡️ Si el producto tiene un <strong>defecto de impresión o error nuestro</strong>, lo reponemos sin costo.\n\nNotificar dentro de <strong>48 horas</strong> con foto por WhatsApp. 😊',
        quick: ['Contactar asesor', 'Hacer un pedido', 'Precios']
    },
    {
        keys: ['ubicación', 'ubicados', 'tienda', 'local', 'dirección', 'donde están', 'dónde', 'visitar'],
        answer: '📍 <strong>Av. Siempre Viva 123 — La Paz, Bolivia</strong>\n\n🕘 Lun – Vie: 9:00 – 18:00\n🕙 Sábados: 9:00 – 13:00\n\nTambién atendemos por WhatsApp sin necesidad de visitar. 📲',
        quick: ['¿Hacen envíos?', 'Contacto WhatsApp', 'Hacer un pedido']
    },
    {
        keys: ['contacto', 'whatsapp', 'teléfono', 'llamar', 'comunicarme', 'hablar', 'asesor', 'humano'],
        answer: '📞 Contáctanos:\n\n💬 <strong>WhatsApp:</strong> +591 69608947\n📧 <strong>Email:</strong> info@creagrafica.com\n📘 <strong>Facebook:</strong> CreaGraficasubli\n\nAtendemos <strong>Lun–Vie 9–18 h y Sáb 9–13 h</strong>.',
        quick: ['Ver productos', 'Precios', 'Hacer un pedido']
    },
    {
        keys: ['pedido', 'hacer pedido', 'quiero pedir', 'cómo pido', 'ordenar', 'comprar', 'adquirir'],
        answer: '🛒 Pasos para hacer tu pedido:\n\n1️⃣ Elige el producto\n2️⃣ Envíanos tu diseño o idea\n3️⃣ Confirmamos detalles y precio\n4️⃣ Abonas el <strong>50% de anticipo</strong>\n5️⃣ Producimos y entregamos 🎉',
        quick: ['Tazas', 'Polos', 'Precios', 'Regalos corporativos']
    },
    {
        keys: ['gracias', 'perfecto', 'genial', 'excelente', 'listo', 'ok', 'chau', 'adiós', 'bye', 'hasta'],
        answer: '¡Un placer ayudarte! 😊 Atendemos <strong>Lun–Vie 9–18 h y Sáb 9–13 h</strong>.\n\n¡Que tengas un excelente día! 🎨✨',
        quick: ['Hacer un pedido', 'Ver productos', 'Contactar asesor']
    }
];

const DEFAULT_RESPONSE = {
    answer: '¡Buena pregunta! 🤔 No tengo esa info específica, pero un asesor puede ayudarte.\n\nAquí las consultas más frecuentes:',
    quick: ['Precios', 'Tiempos de entrega', '¿Cómo pago?', 'Hacer un pedido', 'Contactar asesor']
};

function initChatbot() {
    const launcher = document.getElementById('cg-launcher');
    const chatEl = document.getElementById('cg-chat');
    const msgBox = document.getElementById('cg-messages');
    const inputEl = document.getElementById('cg-input');
    const sendBtn = document.getElementById('cg-send');
    const closeBtn = document.getElementById('cg-close');
    const tooltip = document.getElementById('cg-tooltip');

    if (!launcher || !chatEl) return;

    // Ocultar tooltip después de 4 s
    setTimeout(() => { if (tooltip) tooltip.style.opacity = '0'; }, 4000);
    setTimeout(() => { if (tooltip) tooltip.style.display = 'none'; }, 4500);

    const getTime = () =>
        new Date().toLocaleTimeString('es-BO', { hour: '2-digit', minute: '2-digit' });
    const scroll = () => { msgBox.scrollTop = msgBox.scrollHeight; };

    function addMsg(html, role) {
        const div = document.createElement('div');
        div.className = `cgc-bubble ${role}`;
        div.innerHTML = html.replace(/\n/g, '<br>');
        msgBox.appendChild(div);
        scroll();
    }

    function addTS() {
        const ts = document.createElement('div');
        ts.className = 'cgc-ts';
        ts.textContent = getTime();
        msgBox.appendChild(ts);
    }

    function addQRs(opts) {
        const wrap = document.createElement('div');
        wrap.className = 'cgc-qrs';
        opts.forEach(o => {
            const btn = document.createElement('button');
            btn.className = 'cgc-qr';
            btn.textContent = o;
            btn.onclick = () => { wrap.remove(); handle(o); };
            wrap.appendChild(btn);
        });
        msgBox.appendChild(wrap);
        scroll();
    }

    function showTyping() {
        const t = document.createElement('div');
        t.className = 'cgc-typing';
        t.innerHTML = '<span></span><span></span><span></span>';
        msgBox.appendChild(t);
        scroll();
        return t;
    }

    function findResponse(text) {
        const q = text.toLowerCase();
        for (const entry of KB) {
            if (entry.keys.some(k => q.includes(k))) return entry;
        }
        return DEFAULT_RESPONSE;
    }

    function handle(text) {
        if (!text.trim()) return;
        addMsg(text, 'user');
        addTS();
        inputEl.value = '';
        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            const res = findResponse(text);
            addMsg(res.answer, 'bot');
            addTS();
            if (res.quick) addQRs(res.quick);
        }, 650 + Math.random() * 500);
    }

    function openChat() {
        chatEl.classList.add('open');
        launcher.classList.add('open');
        if (tooltip) tooltip.style.display = 'none';
        if (msgBox.children.length === 0) {
            setTimeout(() => {
                addMsg('¡Hola! 👋 Soy el asistente de <strong>CREAGRAFICA</strong>. ¿En qué te puedo ayudar hoy?', 'bot');
                addTS();
                addQRs(['Ver productos', 'Precios', 'Tiempos de entrega', '¿Cómo pago?', 'Hacer un pedido']);
            }, 200);
        }
        setTimeout(() => inputEl?.focus(), 300);
    }

    function closeChat() {
        chatEl.classList.remove('open');
        launcher.classList.remove('open');
    }

    launcher.addEventListener('click', () =>
        chatEl.classList.contains('open') ? closeChat() : openChat());
    closeBtn?.addEventListener('click', closeChat);
    sendBtn?.addEventListener('click', () => handle(inputEl.value));
    inputEl?.addEventListener('keydown', e => { if (e.key === 'Enter') handle(inputEl.value); });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
async function init() {
    // 1. Inyectamos TODO el HTML primero
    injectComponent('#navbar-container', navbarHtml);
    injectComponent('#hero-container', heroHtml);
    injectComponent('#products-container', productsHtml);
    injectComponent('#footer-container', footerHtml);
    injectComponent('#chatbot-container', chatbotHtml);

    // 2. Pequeña pausa (Microtask) para que el navegador "digiera" el nuevo HTML
    // Esto asegura que los IDs existan antes de que JS los busque
    requestAnimationFrame(() => {
        try {
            renderProducts();
            initializeEvents();
            updateCartCount();
            initChatbot();
            console.log("✅ CREAGRAFICA: Componentes y lógica cargados correctamente.");
        } catch (error) {
            console.error("❌ Error al inicializar la lógica:", error);
        }
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
