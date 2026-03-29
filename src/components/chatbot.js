export async function renderChatbot() {
    const container = document.getElementById('chatbot-container');
    if (!container) return;

    // 1. Cargar el HTML (ruta relativa para GitHub Pages)
    const response = await fetch('src/components/chatbot.html');
    const html = await response.text();
    container.innerHTML = html;

    // 2. Referencias a los elementos
    const launcher = document.getElementById('cg-launcher');
    const chatWindow = document.getElementById('cg-chat');
    const closeBtn = document.getElementById('cg-close');
    const input = document.getElementById('cg-input');
    const sendBtn = document.getElementById('cg-send');
    const messagesContainer = document.getElementById('cg-messages');

    // 3. Eventos de abrir y cerrar
    launcher.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // 4. Lógica de mensajes
    const sendMessage = () => {
        const text = input.value.trim();
        if (text) {
            // Añadir mensaje del usuario
            messagesContainer.innerHTML += `<div class="message user">${text}</div>`;
            input.value = '';

            // Simular respuesta automática
            setTimeout(() => {
                messagesContainer.innerHTML += `<div class="message bot">¡Hola! Gracias por escribir a CREAGRAFICA. En breve un humano te atenderá. 🎨</div>`;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
}