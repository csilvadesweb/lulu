document.getElementById("modo-toggle").addEventListener("click", function () {
    document.body.classList.toggle("claro");
    if (document.body.classList.contains("claro")) {
        localStorage.setItem("modo", "claro");
    } else {
        localStorage.removeItem("modo");
    }
});

if (localStorage.getItem("modo") === "claro") {
    document.body.classList.add("claro");
}