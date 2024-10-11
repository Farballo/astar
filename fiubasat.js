// script.js
window.onscroll = function() { stickyHeader(); };

var header = document.querySelector("header");
var sticky = header.offsetTop + 1500; // Ajusta el valor para el punto donde el header debe dejar de ser fijo

function stickyHeader() {
    var width = window.innerWidth; // Recalcular el ancho de la pantalla en cada scroll

    if (width > 1156) {
        if (window.pageYOffset > sticky) {
            header.classList.remove("sticky");
            header.style.position = "absolute";
            header.style.top = sticky + "px"; // Mantén el header en su posición fija
        } else {
            header.classList.add("sticky");
            header.style.position = "fixed";
            header.style.top = "0";
        }
    } else {
        // Para pantallas pequeñas, quitar la clase sticky y resetear el estilo
        header.classList.remove("sticky");
        header.style.position = "";
        header.style.top = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez se ha mostrado
            }
        });
    });

    // Observar cada elemento con la clase 'fade-in'
    elements.forEach(element => {
        observer.observe(element);
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});