document.getElementById("modo-toggle").addEventListener("click", function () {
    document.body.classList.toggle("claro");
});

if (localStorage.getItem("modo") === "claro") {
    document.body.classList.add("claro");
}