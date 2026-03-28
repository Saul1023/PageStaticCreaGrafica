(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={parejas:[{name:`Taza Pareja Romántica`,img:`/images/pareja.jpg`,price:22},{name:`Taza Pareja Elegante`,img:`/images/pareja2.jpg`,price:22},{name:`Taza Pareja Divertida`,img:`/images/Pareja3.jpg`,price:22},{name:`Taza Pareja Moderna`,img:`/images/Pareja4.jpg`,price:22},{name:`Taza Pareja Clásica`,img:`/images/Pareja5.jpg`,price:22},{name:`Taza Pareja Original`,img:`/images/pareja6.jpg`,price:22}],ninos:[{name:`Taza Niño Divertida`,img:`/images/niño1.jpg`,price:22},{name:`Taza Niño Colorida`,img:`/images/niño2.jpg`,price:22},{name:`Taza Niño Animado`,img:`/images/niño3.jpg`,price:22},{name:`Taza Niño Educativo`,img:`/images/niño4.jpg`,price:22},{name:`Taza Niño Personalizada`,img:`/images/niño5.jpg`,price:22},{name:`Taza Niño Original`,img:`/images/niño6.jpg`,price:22}],graduacion:[{name:`Taza Graduación Elegante`,img:`/images/Graduado.jpg`,price:22},{name:`Taza Graduación Clásica`,img:`/images/Graduado2.jpg`,price:22},{name:`Taza Graduación Moderna`,img:`/images/Graduado3.jpg`,price:22},{name:`Taza Graduación Personalizada`,img:`/images/Graduado4.jpg`,price:22},{name:`Taza Graduación Original`,img:`/images/Graduado5.jpg`,price:22},{name:`Taza Graduación Especial`,img:`/images/Graduado6.jpg`,price:22}]};async function t(e,t){try{let n=await(await fetch(t)).text(),r=document.querySelector(e);return r&&(r.innerHTML=n),n}catch(e){return console.error(`Error loading ${t}:`,e),null}}function n(){let t=document.getElementById(`products-parejas`);t&&(t.innerHTML=e.parejas.map(e=>`
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
    `).join(``));let n=document.getElementById(`products-ninos`);n&&(n.innerHTML=e.ninos.map(e=>`
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
    `).join(``));let r=document.getElementById(`products-graduacion`);r&&(r.innerHTML=e.graduacion.map(e=>`
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
    `).join(``))}var r=0;function i(){document.querySelectorAll(`.cart-count`).forEach(e=>{e.textContent=r})}function a(e,t=!1){let n=document.createElement(`div`);n.className=`toast ${t?`error`:``}`,n.innerHTML=`
    <div class="flex items-center">
      <i class="fas ${t?`fa-exclamation-circle`:`fa-check-circle`} mr-2"></i>
      <span>${e}</span>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}function o(){document.addEventListener(`click`,e=>{let t=e.target.closest(`.add-to-cart`);if(t){let e=t.getAttribute(`data-name`),n=t.getAttribute(`data-price`);r++,i(),a(`${e} agregado al carrito - ${n} Bs`)}});let e=document.getElementById(`menu-btn`),t=document.getElementById(`mobile-menu`);e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`)});let n=document.getElementById(`back-to-top`);n&&(window.addEventListener(`scroll`,()=>{window.pageYOffset>300?n.classList.remove(`hidden`):n.classList.add(`hidden`)}),n.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}));let o=document.getElementById(`contact-form`);o&&o.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`name`)?.value.trim(),n=document.getElementById(`email`)?.value.trim(),r=document.getElementById(`message`)?.value.trim();if(!t||!n||!r){a(`Por favor completa todos los campos`,!0);return}if(!n.includes(`@`)){a(`Por favor ingresa un email válido`,!0);return}a(`¡Mensaje enviado con éxito! Te contactaremos pronto.`),o.reset()});let s=document.getElementById(`newsletter-form`);s&&s.addEventListener(`submit`,e=>{e.preventDefault();let t=s.querySelector(`input[type="email"]`),n=t?.value.trim();if(!n||!n.includes(`@`)){a(`Por favor ingresa un email válido`,!0);return}a(`¡Gracias por suscribirte!`),t.value=``}),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,n=>{let r=e.getAttribute(`href`);if(r===`#`||r===``)return;let i=document.querySelector(r);i&&(n.preventDefault(),i.scrollIntoView({behavior:`smooth`,block:`start`}),t&&!t.classList.contains(`hidden`)&&t.classList.add(`hidden`))})})}async function s(){await t(`#navbar-container`,`/src/components/navbar.html`),await t(`#hero-container`,`/src/components/hero.html`),await t(`#products-container`,`/src/components/products.html`),await t(`#footer-container`,`/src/components/footer.html`),n(),o(),i()}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,s):s();