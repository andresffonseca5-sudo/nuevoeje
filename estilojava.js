const titulo = document.getElementById('titulo');
const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const cambiarColorBtn = document.getElementById('cambiarColorBtn');
const body = document.body;

// Cambiar modo oscuro
modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('oscuro');
});

// Cambiar color del título
cambiarColorBtn.addEventListener('click', () => {
    titulo.classList.toggle('color-titulo');
});