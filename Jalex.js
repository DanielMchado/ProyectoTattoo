// ========== BURBUJA FLOTANTE DE WHATSAPP ==========
// Muestra un tooltip de bienvenida al cargar la página y permite
// mostrarlo/ocultarlo al pasar el mouse (PC) o al tocar (móvil).

document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('whatsappFloat');
    var tooltip = document.getElementById('whatsappTooltip');

    if (!boton || !tooltip) return;

    var esMobile = window.matchMedia('(max-width: 768px)').matches;

    // En PC: mostramos el tooltip un momento al cargar para llamar la atención
    if (!esMobile) {
        setTimeout(function () {
            tooltip.classList.add('mostrar');
        }, 1200);

        setTimeout(function () {
            tooltip.classList.remove('mostrar');
        }, 6000);

        // Mostrar/ocultar también al pasar el mouse
        boton.addEventListener('mouseenter', function () {
            tooltip.classList.add('mostrar');
        });
        boton.addEventListener('mouseleave', function () {
            tooltip.classList.remove('mostrar');
        });
    }
});