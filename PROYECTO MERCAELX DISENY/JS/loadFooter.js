document.addEventListener("DOMContentLoaded", function () {
    fetch("TEMPLATES/footer.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector("footer").innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el footer:", error));
});