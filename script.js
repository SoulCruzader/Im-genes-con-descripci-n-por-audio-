// Esta función lee en voz alta un texto y también lo escribe en pantalla
function leer(texto, cajaId) {
    document.getElementById(cajaId).textContent = ' ' + texto;
    var voz = new SpeechSynthesisUtterance(texto); // prepara la voz
    voz.lang = 'es-ES'; // en español
    speechSynthesis.speak(voz); // habla
}
// Lo que "entiende" el lector de pantalla de cada imagen
function describir(idFoto) {
    var foto = document.getElementById(idFoto);
    var descripcion = foto.getAttribute('alt'); // lee el atributo alt
    if (descripcion) {
        return 'Imagen: ' + descripcion;
    } else {
        return 'Imagen: lomo punto jpg'; // sin alt solo lee el nombre del archivo
    }
}
// Botón de la tarjeta mal hecha
document.getElementById('escuchar-mal').addEventListener('click', function () {
    leer(describir('foto-mal') + '. Plato del día: 14 soles.', 'texto-mal');
});
// Botón de la tarjeta bien hecha
document.getElementById('escuchar-bien').addEventListener('click', function () {
    leer(describir('foto-bien') + '. Plato del día: 14 soles.', 'texto-bien');
});
