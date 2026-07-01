document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 0. PANTALLA DE INICIO
    // ==========================================
    const btnComenzar = document.getElementById('btn-comenzar');
    const pantallaInicio = document.getElementById('pantalla-inicio');

    if (btnComenzar && pantallaInicio) {
        btnComenzar.addEventListener('click', function() {
            pantallaInicio.classList.add('oculto');
            document.body.classList.remove('bloqueo-scroll');
        });
    }

    // ==========================================
    // 1. ANIMACIÓN DE APARICIÓN (ScrollReveal)
    // ==========================================
    ScrollReveal().reveal('.animar-seccion', {
        delay: 200,
        distance: '30px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.grafico-container', {
        delay: 300,
        distance: '20px',
        duration: 1000,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.ficha-centrada', {
        delay: 300,
        distance: '20px',
        duration: 800,
        origin: 'bottom'
    });

    // ==========================================
    // 2. FICHAS INTERACTIVAS (Acordeón y Carrusel)
    // ==========================================
    var acordeones = document.querySelectorAll(".acordeon-btn");

    acordeones.forEach(function(btn) {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
           
            var panel = this.nextElementSibling;
            var icono = this.querySelector('.icono-acordeon'); // Buscamos si hay un icono + o -
           
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                if(icono) icono.textContent = '+'; // Solo lo cambia si existe
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                if(icono) icono.textContent = '-'; // Solo lo cambia si existe
            }
        });
    });

    // Lógica para el carrusel de información (diapositivas) dentro de cada ficha
    const panelesFicha = document.querySelectorAll('.acordeon-panel');
    
    panelesFicha.forEach(panel => {
        const slides = panel.querySelectorAll('.slide');
        const btnNext = panel.querySelector('.next');
        const btnPrev = panel.querySelector('.prev');
        let indexActual = 0;

        if (slides.length > 0 && btnNext && btnPrev) {
            btnNext.addEventListener('click', () => {
                slides[indexActual].classList.remove('activa');
                indexActual = (indexActual + 1) % slides.length;
                slides[indexActual].classList.add('activa');
            });

            btnPrev.addEventListener('click', () => {
                slides[indexActual].classList.remove('activa');
                indexActual = (indexActual - 1 + slides.length) % slides.length;
                slides[indexActual].classList.add('activa');
            });
        }
    });

    // ==========================================
    // 3. MENÚ SUPERIOR CONTRAÍBLE AL SCROLLEAR
    // ==========================================
    const navbar = document.getElementById('menu-superior');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       
        // Si el usuario baja más de 80px, la barra se contrae
        if (scrollTop > 80) {
            navbar.classList.add('contraida');
        } else {
            // Si sube al tope, la barra vuelve a su tamaño normal
            navbar.classList.remove('contraida');
        }
    });

});