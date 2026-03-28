(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const h=`<nav class="bg-blue-600 shadow-lg sticky top-0 z-50">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="flex justify-between h-16">\r
      <div class="flex items-center">\r
        <a href="/" class="text-white text-xl font-bold flex items-center">\r
          <i class="fas fa-palette mr-2"></i> CREAGRAFICA\r
        </a>\r
      </div>\r
      <div class="hidden md:flex items-center space-x-6">\r
        <a href="#productos" class="text-white hover:text-blue-200 px-3 py-2 transition-all">Productos</a>\r
        <a href="#nosotros" class="text-white hover:text-blue-200 px-3 py-2 transition-all">Nosotros</a>\r
        <a href="#contacto" class="text-white hover:text-blue-200 px-3 py-2 transition-all">Contacto</a>\r
        \r
        <a href="#" class="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center">\r
          <i class="fas fa-shopping-cart mr-2"></i>\r
          <span class="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1 cart-count">0</span>\r
        </a>\r
      </div>\r
      <div class="md:hidden flex items-center">\r
        <button id="menu-btn" class="text-white focus:outline-none">\r
          <i class="fas fa-bars text-2xl"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <div id="mobile-menu" class="hidden md:hidden bg-blue-700 pb-4">\r
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">\r
      <a href="#productos" class="text-white block px-3 py-2 hover:bg-blue-600 rounded-md">Productos</a>\r
      <a href="#nosotros" class="text-white block px-3 py-2 hover:bg-blue-600 rounded-md">Nosotros</a>\r
      <a href="#contacto" class="text-white block px-3 py-2 hover:bg-blue-600 rounded-md">Contacto</a>\r
      <a href="#" class="bg-white text-blue-600 block px-3 py-2 rounded-md font-medium text-center mt-2 flex items-center justify-center">\r
        <i class="fas fa-shopping-cart mr-2"></i> Carrito\r
        <span class="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1 cart-count">0</span>\r
      </a>\r
    </div>\r
  </div>\r
</nav>`,v=`<header class="hero text-white py-20 md:py-32 text-center">\r
  <div class="max-w-4xl mx-auto px-4">\r
    <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">CREA GRAFICA</h1>\r
    <p class="text-xl md:text-2xl mb-8">Productos personalizados hechos con amor y creatividad</p>\r
    <a href="#productos" class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all inline-block">\r
      Ver Productos <i class="fas fa-arrow-down ml-2"></i>\r
    </a>\r
  </div>\r
</header>`,y=`<section id="productos" class="mb-20">\r
  <div class="text-center mb-12">\r
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Nuestras Tazas Personalizadas</h2>\r
    <div class="w-20 h-1 bg-blue-600 mx-auto"></div>\r
  </div>\r
\r
  <div class="mb-16">\r
    <h3 class="text-2xl font-semibold text-gray-800 mb-8 text-center">Diseños para Parejas</h3>\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-parejas"></div>\r
  </div>\r
\r
  <div class="mb-16">\r
    <h3 class="text-2xl font-semibold text-gray-800 mb-8 text-center">Diseños para Niños</h3>\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-ninos"></div>\r
  </div>\r
\r
  <div>\r
    <h3 class="text-2xl font-semibold text-gray-800 mb-8 text-center">Diseños para Graduación</h3>\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-graduacion"></div>\r
  </div>\r
</section>\r
\r
<section id="nosotros" class="mb-20 bg-white rounded-xl shadow-md p-8">\r
  <div class="text-center mb-12">\r
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>\r
    <div class="w-20 h-1 bg-blue-600 mx-auto"></div>\r
  </div>\r
  <div class="flex flex-col md:flex-row items-center gap-8">\r
    <div class="md:w-1/2">\r
      <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" \r
           alt="Nuestro taller" class="rounded-lg shadow-lg w-full h-auto">\r
    </div>\r
    <div class="md:w-1/2">\r
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Nuestra Pasión por la Sublimación</h3>\r
      <p class="text-gray-600 mb-4">En CREAGRAFICA nos especializamos en crear productos personalizados de alta calidad. Cada taza es diseñada con atención al detalle y pasión por el arte de la sublimación.</p>\r
      <p class="text-gray-600 mb-6">Nuestro equipo de diseñadores trabaja cuidadosamente para ofrecerte diseños únicos que capturen momentos especiales y los transformen en regalos memorables.</p>\r
      <div class="flex flex-wrap gap-4">\r
        <div class="flex items-center bg-blue-50 px-4 py-2 rounded-lg">\r
          <i class="fas fa-check-circle text-blue-600 mr-2"></i>\r
          <span class="text-gray-700">Calidad Premium</span>\r
        </div>\r
        <div class="flex items-center bg-blue-50 px-4 py-2 rounded-lg">\r
          <i class="fas fa-check-circle text-blue-600 mr-2"></i>\r
          <span class="text-gray-700">Diseños Exclusivos</span>\r
        </div>\r
        <div class="flex items-center bg-blue-50 px-4 py-2 rounded-lg">\r
          <i class="fas fa-check-circle text-blue-600 mr-2"></i>\r
          <span class="text-gray-700">Entrega Rápida</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<section id="contacto" class="bg-white rounded-xl shadow-md p-8 mb-20">\r
  <div class="text-center mb-12">\r
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>\r
    <div class="w-20 h-1 bg-blue-600 mx-auto"></div>\r
  </div>\r
  <div class="flex flex-col md:flex-row gap-8">\r
    <div class="md:w-1/2">\r
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>\r
      <div class="space-y-4">\r
        <div class="flex items-start">\r
          <i class="fas fa-map-marker-alt text-blue-600 mt-1 mr-4"></i>\r
          <div>\r
            <h4 class="font-medium text-gray-800">Dirección</h4>\r
            <p class="text-gray-600">Av. Siempre Viva 123, Springfield</p>\r
          </div>\r
        </div>\r
        <div class="flex items-start">\r
          <i class="fas fa-phone-alt text-blue-600 mt-1 mr-4"></i>\r
          <div>\r
            <h4 class="font-medium text-gray-800">Teléfono</h4>\r
            <p class="text-gray-600">+591 12345678</p>\r
          </div>\r
        </div>\r
        <div class="flex items-start">\r
          <i class="fas fa-envelope text-blue-600 mt-1 mr-4"></i>\r
          <div>\r
            <h4 class="font-medium text-gray-800">Email</h4>\r
            <p class="text-gray-600">info@creagrafica.com</p>\r
          </div>\r
        </div>\r
        <div class="flex items-start">\r
          <i class="fas fa-clock text-blue-600 mt-1 mr-4"></i>\r
          <div>\r
            <h4 class="font-medium text-gray-800">Horario de Atención</h4>\r
            <p class="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>\r
            <p class="text-gray-600">Sábados: 9:00 - 13:00</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="mt-8">\r
        <h4 class="font-medium text-gray-800 mb-4">Síguenos en Redes Sociales</h4>\r
        <div class="flex space-x-4">\r
          <a href="https://www.facebook.com//CreaGraficasubli" class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all">\r
            <i class="fab fa-facebook-f"></i>\r
          </a>\r
          <a href="https://vm.tiktok.com/ZMBny4FeU/" class="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-all">\r
            <i class="fab fa-tiktok"></i>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="md:w-1/2">\r
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Envía un Mensaje</h3>\r
      <form id="contact-form" class="space-y-4">\r
        <div>\r
          <label for="name" class="block text-gray-700 mb-2">Nombre Completo</label>\r
          <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        </div>\r
        <div>\r
          <label for="email" class="block text-gray-700 mb-2">Correo Electrónico</label>\r
          <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        </div>\r
        <div>\r
          <label for="phone" class="block text-gray-700 mb-2">Teléfono</label>\r
          <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        </div>\r
        <div>\r
          <label for="message" class="block text-gray-700 mb-2">Mensaje</label>\r
          <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>\r
        </div>\r
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all w-full">\r
          Enviar Mensaje <i class="fas fa-paper-plane ml-2"></i>\r
        </button>\r
      </form>\r
    </div>\r
  </div>\r
</section>`,w=`<footer class="bg-gray-800 text-white py-12">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">\r
      <div>\r
        <h3 class="text-xl font-bold mb-4 flex items-center">\r
          <i class="fas fa-mug-hot mr-2"></i> CREAGRAFICA\r
        </h3>\r
        <p class="text-gray-400">Productos personalizados hechos con amor y dedicación para momentos especiales.</p>\r
      </div>\r
      <div>\r
        <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>\r
        <ul class="space-y-2">\r
          <li><a href="#productos" class="text-gray-400 hover:text-white transition-all">Productos</a></li>\r
          <li><a href="#nosotros" class="text-gray-400 hover:text-white transition-all">Nosotros</a></li>\r
          <li><a href="#contacto" class="text-gray-400 hover:text-white transition-all">Contacto</a></li>\r
        </ul>\r
      </div>\r
      <div>\r
        <h4 class="text-lg font-semibold mb-4">Productos</h4>\r
        <ul class="space-y-2">\r
          <li><a href="#" class="text-gray-400 hover:text-white transition-all">Tazas Personalizadas</a></li>\r
          <li><a href="#" class="text-gray-400 hover:text-white transition-all">Polos Sublimados</a></li>\r
          <li><a href="#" class="text-gray-400 hover:text-white transition-all">Llaveros</a></li>\r
        </ul>\r
      </div>\r
      <div>\r
        <h4 class="text-lg font-semibold mb-4">Newsletter</h4>\r
        <p class="text-gray-400 mb-4">Suscríbete para recibir ofertas especiales y novedades.</p>\r
        <form id="newsletter-form" class="flex">\r
          <input type="email" placeholder="Tu correo" class="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full">\r
          <button type="submit" class="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all">\r
            <i class="fas fa-paper-plane"></i>\r
          </button>\r
        </form>\r
      </div>\r
    </div>\r
    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">\r
      <p>&copy; 2024 CREAGRAFICA. Todos los derechos reservados.</p>\r
    </div>\r
  </div>\r
</footer>\r
\r
<a href="https://wa.me/59169608947" target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50">\r
  <i class="fab fa-whatsapp text-2xl"></i>\r
</a>\r
\r
<button id="back-to-top" class="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hidden z-50">\r
  <i class="fas fa-arrow-up"></i>\r
</button>`,m={parejas:[{name:"Taza Pareja Romántica",img:"./images/pareja.jpg",price:22},{name:"Taza Pareja Elegante",img:"./images/pareja2.jpg",price:22},{name:"Taza Pareja Divertida",img:"./images/Pareja3.jpg",price:22},{name:"Taza Pareja Moderna",img:"./images/Pareja4.jpg",price:22},{name:"Taza Pareja Clásica",img:"./images/Pareja5.jpg",price:22},{name:"Taza Pareja Original",img:"./images/pareja6.jpg",price:22}],ninos:[{name:"Taza Niño Divertida",img:"./images/niño1.jpg",price:22},{name:"Taza Niño Colorida",img:"./images/niño2.jpg",price:22},{name:"Taza Niño Animado",img:"./images/niño3.jpg",price:22},{name:"Taza Niño Educativo",img:"./images/niño4.jpg",price:22},{name:"Taza Niño Personalizada",img:"./images/niño5.jpg",price:22},{name:"Taza Niño Original",img:"./images/niño6.jpg",price:22}],graduacion:[{name:"Taza Graduación Elegante",img:"./images/Graduado.jpg",price:22},{name:"Taza Graduación Clásica",img:"./images/Graduado2.jpg",price:22},{name:"Taza Graduación Moderna",img:"./images/Graduado3.jpg",price:22},{name:"Taza Graduación Personalizada",img:"./images/Graduado4.jpg",price:22},{name:"Taza Graduación Original",img:"./images/Graduado5.jpg",price:22},{name:"Taza Graduación Especial",img:"./images/Graduado6.jpg",price:22}]};function d(i,a){const n=document.querySelector(i);n&&(n.innerHTML=a)}function j(){const i=document.getElementById("products-parejas");i&&(i.innerHTML=m.parejas.map(e=>`
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${e.img}" alt="${e.name}" class="w-full h-64 object-cover" 
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${e.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${e.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart" 
                    data-name="${e.name}" data-price="${e.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join(""));const a=document.getElementById("products-ninos");a&&(a.innerHTML=m.ninos.map(e=>`
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${e.img}" alt="${e.name}" class="w-full h-64 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${e.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${e.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart"
                    data-name="${e.name}" data-price="${e.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join(""));const n=document.getElementById("products-graduacion");n&&(n.innerHTML=m.graduacion.map(e=>`
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover">
        <img src="${e.img}" alt="${e.name}" class="w-full h-64 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible'">
        <div class="p-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-2">${e.name}</h4>
          <p class="text-gray-600 mb-4">Taza sublimada con diseño exclusivo.</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-bold text-xl">${e.price} Bs</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all add-to-cart"
                    data-name="${e.name}" data-price="${e.price}">
              <i class="fas fa-cart-plus mr-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    `).join(""))}let b=0;function x(){document.querySelectorAll(".cart-count").forEach(a=>{a.textContent=b})}function c(i,a=!1){const n=document.createElement("div");n.className=`toast ${a?"error":""}`,n.innerHTML=`
    <div class="flex items-center">
      <i class="fas ${a?"fa-exclamation-circle":"fa-check-circle"} mr-2"></i>
      <span>${i}</span>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}function E(){document.addEventListener("click",t=>{const s=t.target.closest(".add-to-cart");if(s){const o=s.getAttribute("data-name"),l=s.getAttribute("data-price");b++,x(),c(`${o} agregado al carrito - ${l} Bs`)}});const i=document.getElementById("menu-btn"),a=document.getElementById("mobile-menu");i&&a&&i.addEventListener("click",()=>{a.classList.toggle("hidden")});const n=document.getElementById("back-to-top");n&&(window.addEventListener("scroll",()=>{window.pageYOffset>300?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));const e=document.getElementById("contact-form");e&&e.addEventListener("submit",t=>{var u,p,g;t.preventDefault();const s=(u=document.getElementById("name"))==null?void 0:u.value.trim(),o=(p=document.getElementById("email"))==null?void 0:p.value.trim(),l=(g=document.getElementById("message"))==null?void 0:g.value.trim();if(!s||!o||!l){c("Por favor completa todos los campos",!0);return}if(!o.includes("@")){c("Por favor ingresa un email válido",!0);return}c("¡Mensaje enviado con éxito! Te contactaremos pronto."),e.reset()});const r=document.getElementById("newsletter-form");r&&r.addEventListener("submit",t=>{t.preventDefault();const s=r.querySelector('input[type="email"]'),o=s==null?void 0:s.value.trim();if(!o||!o.includes("@")){c("Por favor ingresa un email válido",!0);return}c("¡Gracias por suscribirte!"),s.value=""}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",s=>{const o=t.getAttribute("href");if(o==="#"||o==="")return;const l=document.querySelector(o);l&&(s.preventDefault(),l.scrollIntoView({behavior:"smooth",block:"start"}),a&&!a.classList.contains("hidden")&&a.classList.add("hidden"))})})}function f(){d("#navbar-container",h),d("#hero-container",v),d("#products-container",y),d("#footer-container",w),j(),E(),x()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();
