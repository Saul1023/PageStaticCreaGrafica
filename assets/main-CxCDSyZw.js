(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const m={parejas:[{name:"Taza Pareja Romántica",img:"./images/pareja.jpg",price:22},{name:"Taza Pareja Elegante",img:"./images/pareja2.jpg",price:22},{name:"Taza Pareja Divertida",img:"./images/Pareja3.jpg",price:22},{name:"Taza Pareja Moderna",img:"./images/Pareja4.jpg",price:22},{name:"Taza Pareja Clásica",img:"./images/Pareja5.jpg",price:22},{name:"Taza Pareja Original",img:"./images/pareja6.jpg",price:22}],ninos:[{name:"Taza Niño Divertida",img:"./images/niño1.jpg",price:22},{name:"Taza Niño Colorida",img:"./images/niño2.jpg",price:22},{name:"Taza Niño Animado",img:"./images/niño3.jpg",price:22},{name:"Taza Niño Educativo",img:"./images/niño4.jpg",price:22},{name:"Taza Niño Personalizada",img:"./images/niño5.jpg",price:22},{name:"Taza Niño Original",img:"./images/niño6.jpg",price:22}],graduacion:[{name:"Taza Graduación Elegante",img:"./images/Graduado.jpg",price:22},{name:"Taza Graduación Clásica",img:"./images/Graduado2.jpg",price:22},{name:"Taza Graduación Moderna",img:"./images/Graduado3.jpg",price:22},{name:"Taza Graduación Personalizada",img:"./images/Graduado4.jpg",price:22},{name:"Taza Graduación Original",img:"./images/Graduado5.jpg",price:22},{name:"Taza Graduación Especial",img:"./images/Graduado6.jpg",price:22}]};async function d(r,t){try{const e=await(await fetch(t)).text(),a=document.querySelector(r);return a&&(a.innerHTML=e),e}catch(n){return console.error(`Error loading ${t}:`,n),null}}function h(){const r=document.getElementById("products-parejas");r&&(r.innerHTML=m.parejas.map(e=>`
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
    `).join(""));const t=document.getElementById("products-ninos");t&&(t.innerHTML=m.ninos.map(e=>`
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
    `).join(""))}let v=0;function b(){document.querySelectorAll(".cart-count").forEach(t=>{t.textContent=v})}function l(r,t=!1){const n=document.createElement("div");n.className=`toast ${t?"error":""}`,n.innerHTML=`
    <div class="flex items-center">
      <i class="fas ${t?"fa-exclamation-circle":"fa-check-circle"} mr-2"></i>
      <span>${r}</span>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}function x(){document.addEventListener("click",i=>{const o=i.target.closest(".add-to-cart");if(o){const s=o.getAttribute("data-name"),c=o.getAttribute("data-price");v++,b(),l(`${s} agregado al carrito - ${c} Bs`)}});const r=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");r&&t&&r.addEventListener("click",()=>{t.classList.toggle("hidden")});const n=document.getElementById("back-to-top");n&&(window.addEventListener("scroll",()=>{window.pageYOffset>300?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));const e=document.getElementById("contact-form");e&&e.addEventListener("submit",i=>{var u,g,p;i.preventDefault();const o=(u=document.getElementById("name"))==null?void 0:u.value.trim(),s=(g=document.getElementById("email"))==null?void 0:g.value.trim(),c=(p=document.getElementById("message"))==null?void 0:p.value.trim();if(!o||!s||!c){l("Por favor completa todos los campos",!0);return}if(!s.includes("@")){l("Por favor ingresa un email válido",!0);return}l("¡Mensaje enviado con éxito! Te contactaremos pronto."),e.reset()});const a=document.getElementById("newsletter-form");a&&a.addEventListener("submit",i=>{i.preventDefault();const o=a.querySelector('input[type="email"]'),s=o==null?void 0:o.value.trim();if(!s||!s.includes("@")){l("Por favor ingresa un email válido",!0);return}l("¡Gracias por suscribirte!"),o.value=""}),document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",o=>{const s=i.getAttribute("href");if(s==="#"||s==="")return;const c=document.querySelector(s);c&&(o.preventDefault(),c.scrollIntoView({behavior:"smooth",block:"start"}),t&&!t.classList.contains("hidden")&&t.classList.add("hidden"))})})}async function f(){await d("#navbar-container","./components/navbar.html"),await d("#hero-container","./components/hero.html"),await d("#products-container","./components/products.html"),await d("#footer-container","./components/footer.html"),h(),x(),b()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();
