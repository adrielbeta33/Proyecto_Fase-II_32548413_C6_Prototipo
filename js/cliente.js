let acumulado = 0;
const listaOl = document.getElementById('lista-compra');
const totalTexto = document.getElementById('monto-total');


document.querySelectorAll('.btn-add').forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = boton.getAttribute('data-item');
        const precio = parseFloat(boton.getAttribute('data-price'));

        if (acumulado === 0) listaOl.innerHTML = '';

        // Agregar a la lista visual
        const li = document.createElement('li');
        li.innerText = `${producto} ............. $${precio.toFixed(2)}`;
        listaOl.appendChild(li);

        // Sumar
        acumulado += precio;
        totalTexto.innerText = acumulado.toFixed(2);
    });
});

// Confirmar
document.getElementById('confirmar-pedido').addEventListener('click', () => {
    if (acumulado > 0) {
        alert("¡Pedido realizado con éxito! Total: $" + acumulado.toFixed(2));
        window.location.href = "index.html"; 
    } else {
        alert("El carrito está vacío");
    }
});

// nombre
function inicializarMenuUsuario() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    const displayNombre = document.getElementById('nombre-usuario');

    if (displayNombre) {
        if (nombreGuardado) {

            displayNombre.innerText = nombreGuardado.toUpperCase();
        } else {

            displayNombre.innerText = "CLIENTE UCV";
        }
    }
}


document.addEventListener('DOMContentLoaded', inicializarMenuUsuario);