// alert("Funciona");

// Funciones

//   Parámetros
//   Punto A        ________
//              =>  l      l  =>   Precio estimado
//   Punto B        --------

//   Suma de dos números
//   Número1        ________
//              =>  l      l  =>   Suma de estos dos números
//   Número2        --------

//   Función vacía
//   Número1        ________
//              =>  l      l  =>   NADA
//   Número2        --------

//              x     y
// Una función puede recibir n número de parámetros
// function suma(num1, num2) {
//     let resultado = num1 + num2;
//     console.log(resultado);
//     return resultado;
// }

// // Esta función no está recibiendo parámetros
// // Esta función no está retornando algo
// function alerta() {
//     alert("Alert dentro de mi función");
// }

// suma(5, 8);
// suma(9, 15);
// suma(1, 1);

// let res = suma(3, 6);
// console.log(res);

// // alerta();

// // Función que convierta de C a F

// // Función que reciba un número y determine si es par o impar

// // C => F
// function convertir(c) {
//     let f = (c * 1.8) + 32;
//     console.log(f);
//     return f;
// }

// convertir(18);

// function par(x) {
//     // 5
//     // 2
//     if(x % 2 == 0) {
//         let res = "Es par";
//         console.log(x + " Es par");
//         return res;
//     } else {
//         let res = "Es impar";
//         console.log(x + " Es impar");
//         return res;
//     }
// }

// par(5);
// par(2);

// -------------------------------------------------

// Objetos
// String
// Number
// Booleanos
let x = 3;
let name = "gerardo";
let lluvia = false;
// JSON = Objeto
// JavaScript Object Notation
const control = {
    color: "blanco",
    material: "plástico",
    display: true,
    altura: 10,
    ancho: 5,
    botones: {
        // Método
        // Función dentro de un objeto
        encender: function () {
            alert("Aire encendido");
        },
        apagar: function () {
            alert("Aire apagado");
        }
    },
};

console.log(control);
console.log(control.color);

// DOM Document Object Model

// EJEMPLO
let colorControl = document.getElementById("color");

console.log(colorControl);
console.log(colorControl.innerHTML);
console.log(colorControl.id);

document.getElementById("color").innerHTML = control.color;
document.getElementById("material").innerHTML = control.material;
document.getElementById("display").innerHTML = control.display;
document.getElementById("altura").innerHTML = control.altura;
document.getElementById("ancho").innerHTML = control.ancho;