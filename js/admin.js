function guardarCambio(boton) {
    const fila = boton.parentNode.parentNode;

    // Ajuste: Ahora el nombre está dentro de un span en la celda-producto
    const producto = fila.querySelector('span').innerText;
    
    const nuevoStock = fila.querySelector('.input-stock').value;
    const nuevoPrecio = fila.querySelector('.input-precio').value;

    if (nuevoStock < 0 || nuevoPrecio < 0) {
        alert(" El stock y el precio no pueden ser negativos.");
        return;
    }

    alert(`¡Inventario Actualizado!\n\nProducto: ${producto}\nStock: ${nuevoStock} unidades\nPrecio: $${nuevoPrecio}`);
    console.log(`Cambio registrado: ${producto} - Stock: ${nuevoStock} - Precio: ${nuevoPrecio}`);
}

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

function eliminarProducto(boton) {
    if (confirm("¿Está seguro de que desea quitar este producto del menú?")) {
        const fila = boton.parentNode.parentNode;
        fila.remove();
        alert("Producto eliminado del catálogo.");
    }
}

// LÓGICA PARA AÑADIR NUEVO ITEM A LA LISTA
document.getElementById('form-nuevo-producto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Capturar valores
    const nombre = document.getElementById('nuevo-nombre').value;
    const precio = document.getElementById('nuevo-precio').value;
    const url = document.getElementById('nuevo-url').value;
    const tabla = document.getElementById('tabla-inventario');

    // 2. Crear la fila con la estructura que pide el admin.html (con imagen)
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td class="celda-producto">
            <img src="${url}" alt="${nombre}" class="img-tabla">
            <span>${nombre}</span>
        </td>
        <td><input type="number" value="0" class="input-stock"></td>
        <td><input type="number" step="0.1" value="${precio}" class="input-precio"></td>
        <td>
            <button class="btn-save" onclick="guardarCambio(this)">Actualizar</button>
            <button class="btn-delete" onclick="eliminarProducto(this)">Quitar</button>
        </td>
    `;

    // 3. Insertar en la tabla
    tabla.appendChild(nuevaFila);

    alert(`¡Producto "${nombre}" añadido con éxito al catálogo!`);
    this.reset();
});