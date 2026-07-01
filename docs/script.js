document.addEventListener("DOMContentLoaded", function() {
    
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
        origin: 'left'
    });

    // ==========================================
    // 2. FICHAS INTERACTIVAS (Acordeón)
    // ==========================================
    // Seleccionamos todos los botones de acordeón
    var acordeones = document.querySelectorAll(".acordeon-btn");

    acordeones.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Alterna la clase 'active' para cambiar el color del botón
            this.classList.toggle("active");
            
            // Selecciona el panel que está inmediatamente después del botón
            var panel = this.nextElementSibling;
            var icono = this.querySelector('.icono-acordeon');
            
            // Si el panel está abierto (tiene max-height), lo cerramos
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                icono.textContent = '+';
            } else {
                // Si está cerrado, le damos de max-height el tamaño de su contenido
                panel.style.maxHeight = panel.scrollHeight + "px";
                icono.textContent = '-';
            }
        });
    });

    // ==========================================
    // 3. MENÚ CONTRAÍBLE (SCROLL)
    // ==========================================
    let lastScrollTop = 0;
    const navbar = document.getElementById('menu-superior');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Si el usuario scrollea hacia ABAJO
        if (scrollTop > lastScrollTop && scrollTop > 150) {
            navbar.style.transform = 'translateY(-100%)'; 
        } 
        // Si el usuario scrollea hacia ARRIBA
        else if (scrollTop < lastScrollTop) {
            navbar.style.transform = 'translateY(0)';     
        }
        
        // Asegurar que arriba de todo siempre se vea el menú
        if (scrollTop <= 50) {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

});