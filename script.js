document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let phoneNumber = "5511991677373";
    let whatsappMessage = `Olá, meu nome é ${name}.\nMeu e-mail: ${email}\nMensagem: ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});