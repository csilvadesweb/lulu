document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let phoneNumber = "5511991677373"; // Número do WhatsApp no formato correto
    let whatsappMessage = `Olá, meu nome é ${name}. Meu e-mail: ${email}. Mensagem: ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappURL; // Redireciona diretamente para o WhatsApp
});