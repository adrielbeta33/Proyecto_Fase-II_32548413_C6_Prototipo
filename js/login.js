const urlParams = new URLSearchParams(window.location.search);
const rolElegido = urlParams.get('rol');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('clave').value;

    if (rolElegido === 'persona' && user === 'ClienteUCV' && pass === 'Central_123') {
        localStorage.setItem('nombreUsuario', user);
        window.location.href = "cliente.html?rol=persona";
    }

    else if (rolElegido === 'persona' && user === 'Adriel' && pass === 'cafe33') {
    localStorage.setItem('nombreUsuario', user);
    window.location.href = "cliente.html?rol=persona";
    }

    else if (rolElegido === 'caja' && user === 'caja_01' && pass === 'Cajero#123') {
        localStorage.setItem('nombreUsuario', user);
        window.location.href = "caja.html?rol=caja";
    }

    else if (rolElegido === 'admin' && user === 'adminRoot' && pass === 'cafetinAdmin') {
        localStorage.setItem('nombreUsuario', user);
        window.location.href = "admin.html?rol=admin";
    }

    else {
        const mensajeError = document.getElementById('mensajeError');
        mensajeError.style.display = 'block';
        mensajeError.innerText = "! Usuario o contraseña incorrectos para el nivel " + rolElegido;
    }
});