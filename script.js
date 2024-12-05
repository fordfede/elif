// Desplazamiento suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar el botón "Volver arriba" cuando el usuario hace scroll
window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop;
    let backToTopButton = document.getElementById("back-to-top");

    if (scrollPosition > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Ir al principio de la página con transición suave
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
