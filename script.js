// Seleccionamos los elementos del header y del nav
const header = document.querySelector('header');
const nav = document.querySelector('nav');

let lastScrollY = window.scrollY; // Guarda la posición previa del scroll

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; // Guarda la posición actual del scroll

    if (currentScrollY > header.offsetHeight) {
        // Si el scroll baja más allá de la altura del header
        nav.classList.add('sticky'); // Fija el nav
        header.classList.add('hidden'); // Oculta el header con el logo
    } else {
        // Si volvemos al inicio
        nav.classList.remove('sticky'); // El nav vuelve a su posición normal
        header.classList.remove('hidden'); // El header reaparece
    }

    // Si el usuario está subiendo
    if (currentScrollY < lastScrollY) {
        header.classList.remove('hidden'); // Mostrar el header con el logo
    }

    lastScrollY = currentScrollY; // Actualizar el último valor del scroll
});


// Seleccionar las imágenes y el modal
const images = document.querySelectorAll('.producto img'); // Todas las imágenes dentro de '.producto'
const modal = document.getElementById('modal'); // Modal principal
const modalImg = document.getElementById('modal-img'); // Imagen dentro del modal
const closeBtn = document.querySelector('.close'); // Botón para cerrar el modal

// Abrir el modal al hacer clic en una imagen
images.forEach((image) => {
    image.addEventListener('click', () => {
        modalImg.src = image.src; // Establece la imagen ampliada
        modal.classList.add('show'); // Muestra el modal
    });
});

// Cerrar el modal al hacer clic en el botón "X"
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show'); // Oculta el modal
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show'); // Oculta el modal si haces clic fuera
    }
});