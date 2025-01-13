document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");

    fetch("TEMPLATES/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading navigation: ${response.statusText}`);
            }
            return response.text();
        })
        .then(navHtml => {
            navbarContainer.innerHTML = navHtml;
        })
        .catch(error => {
            console.error("Failed to load navigation:", error);
        });
});