function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var boton = document.getElementById('boton');
var mensaje = document.getElementById('mensaje');

if (isMobile()) {
    mensaje.innerHTML = "Estás usando un dispositivo móvil.";
} else {
    mensaje.innerHTML = "Estás usando un PC.";
}