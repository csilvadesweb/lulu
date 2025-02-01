document.addEventListener("DOMContentLoaded", function () {
    const welcomeSection = document.querySelector("#welcome");
    welcomeSection.style.opacity = 0;
    welcomeSection.style.transition = "opacity 2s ease";

    setTimeout(function () {
        welcomeSection.style.opacity = 1;
    }, 500);
});