let totalActual = 0;

function seleccionarPedido(monto) {
    totalActual = monto;
    document.getElementById('monto-a-cobrar').innerText = totalActual.toFixed(2);
    document.getElementById('vuelto').innerText = "0.00";
    document.getElementById('paga-con').value = "";
}

document.getElementById('btn-calcular').addEventListener('click', () => {
    const pagaCon = parseFloat(document.getElementById('paga-con').value);
    
    if (isNaN(pagaCon) || pagaCon < totalActual) {
        alert("El monto recibido es insuficiente o inválido");
        return;
    }

    const vueltoCalculado = pagaCon - totalActual;
    document.getElementById('vuelto').innerText = vueltoCalculado.toFixed(2);
    
    setTimeout(() => {
        if(confirm("¿Desea finalizar el pedido y entregar recibo?")) {
            alert("Venta registrada con éxito.");
            location.reload();
        }
    }, 500);
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