// // JS Moderno
// var x = 7;

// // Scope
// let variable = "Puede cambiar";
// const pi = 3.1416;

// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// // Objetos literales
// const ciudadano = {
//     name: "Gerardo",
//     edad: 24,
//     nacionalidad: "mexicana",
//     entidad: "Querétaro"
// }

// // JS Moderno
// // Clase

// // Función que sume dos números

// // function suma(a, b) {
// //     const resultado = a + b;
// //     return resultado;
// // }

// // Arrow functions
// // const suma = (a, b) => {
// //     return a + b;
// // }

// const suma = (a, b) => a + b;

// console.log(suma(4, 6));

// // Quitar paréntesis un parámetro
// const cuadrado = a => a**2;

// console.log(cuadrado(5));

// // Función que determine si es mayor de edad o menor de edad

// const mayorEdad = n => n >= 18 ? "Es mayor de edad" : "Es menor de edad";
//     // if(n >= 18) {
//     //     return "Legal";
//     // } else {
//     //     return "Es menor de edad";
//     // }

// console.log(mayorEdad(19));

class animal {
    constructor(nombre, edad, reino) {
        this.nombre = nombre;
        this.edad = edad;
        this.reino = reino;
    }
}

// Instancia
const perro = new animal("Firulais", 3, "Animalia");
console.log(perro);
const perico = new animal("Chocotorro", 2, "Animalia");
console.log(perico);
const nopal = new animal("Penquita", 10, "Plantae");

// Hola mi nimbre es Firulais, tengo 3 años y pertenezco al reino Animalia

console.log("Hola mi nombre es " + perro.nombre + " tengo " + perro.edad + "años y pertenezco al reino " + perro.reino);
// String interpolation
console.log(`Hola mi nombre es ${perro.nombre} 
tengo ${perro.edad} años
y pertenezco al reino ${perro.reino}`);

const temperatura = (valor) => alert(`La temperatura es ${valor || "Error"} grados.`);

temperatura(18);
temperatura();


// 2
// 3 2 1 0

// 0 0 0 0 => 0
// 0 0 0 1 => 1
// 0 0 1 0 => 2
// 0 0 1 1 => 3
// 0 1 0 0 => 4
// 0 1 0 1 => 5
// 0 1 1 0 => 6
