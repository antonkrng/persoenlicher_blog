document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const dropdown = button.nextElementSibling;
        dropdown.classList.toggle("open");
    });
});

