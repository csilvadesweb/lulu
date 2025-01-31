document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const container = document.querySelector(".container");

    // Carregar modo escuro salvo
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        container.style.background = "#444";
        container.style.color = "#fff";
        themeToggle.textContent = "☀️ Modo Claro";
    }

    // Alternar entre claro e escuro
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            container.style.background = "#444";
            container.style.color = "#fff";
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.textContent = "☀️ Modo Claro";
        } else {
            container.style.background = "white";
            container.style.color = "black";
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.textContent = "🌙 Modo Escuro";
        }
    });

    // Efeito de fade-in para imagens
    const images = document.querySelectorAll(".image");
    images.forEach(img => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.transition = "opacity 1s";
            img.style.opacity = "1";
        }, 500);
    });
});

