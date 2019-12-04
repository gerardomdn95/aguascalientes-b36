// Camel Case
const titulo = document.getElementById("titulo");
const cajaDeTexto = document.getElementById("cajaDeTexto");

console.log(titulo.className);

// // innerHTML cambiar el texto de la etiqueta
// titulo.innerHTML = "Título desde JS";
// // cambia estilo del atributo
// titulo.style.color = "red";

function changeColor(color) {
    titulo.style.color = color;
}

function addClass(clase) {
    titulo.className = clase;
}

function changeText() {
    titulo.innerHTML = cajaDeTexto.value;
}