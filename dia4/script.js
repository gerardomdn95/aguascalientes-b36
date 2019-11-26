// alert("Funciona");

// Declarar variables

/* String */
let x = "Gerardo";
// Numéricas
let edad = 2;
// Booleana
// Camel Case
let mayorEdad = true; // false

// alert(x);

// Log normal
console.log(x);
// Log de warning
console.warn(x);
// Log de error
console.error(x);

// Operaciones aritméticas

let a = 25;
let b = 5;

// Declarar variable suma
let suma = a + b;
console.log(suma);
console.log("La suma de " + a + " + " + b + " = " + suma);
// La suma de 25 + 5 = suma

let resta = a - b;
console.log(resta);
console.log("La resta de " + a + " - " + b + " = " + resta);

let multiplicacion = a * b;
console.log(multiplicacion);
console.log("La multiplicación de " + a + " * " + b + " = " + multiplicacion);

let division = a / b;
console.log(division);
console.log("La división de " + a + " / " + b + " = " + division);

// Módulo
let residuo = 21 % 2;
console.log(residuo);
console.log("El residui de " + a + " % " + b + " = " + residuo);

// 0.1 => 10%
// 1 => 100%

// Exponencial
let exponente = 5**2;
console.log(exponente);

// Concatenar
let y = "Gerardo" + 24;
console.log(y);


// 24 < 18 falso
if(edad < 18) {
    // true
    console.warn("Eres menor de edad");
    if (x != "Gerardo") {
        console.log("Bienvenido " + x);
    } else {
        console.log("No eres  " + x);
    }
} else {
    // false
    console.log("Eres mayor de edad");
}

let numero = 4;

if(numero % 2 == 0) {
    console.log(numero + " es par");
} else {
    console.warn(numero + " es impar");
}

let seguro1 = 150;
let seguro2 = 130;

if(seguro1 < seguro2) {
    console.log("Te conviene adquirir seguro 1");
} else {
    console.log("Te conviene adquirir seguro 2");
}

