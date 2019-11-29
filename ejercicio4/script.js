// Simulador de piedra papel o tijeras

// piedra papel tijeras
let j1 = prompt("Escribe la opción de J1");
let j2 = prompt("Escribe la opción de J2");
// let j2 = "tijeras";

// J1 3 Veces
// J2 3 Veces
// Empate 3 Vecess
// piedra papel tijeras

if (j1 == "piedra") {
    if (j2 == "piedra") {
        console.log("Empate");
    } else if (j2 == "papel") {
        console.log("J2 Gana");
    } else if (j2 == "tijeras") {
        console.log("J1 Gana");
    } else {
        alert("Opción no válida");
    }
} else if (j1 == "papel") {
    if (j2 == "piedra") {
        console.log("J1 Gana");
    } else if (j2 == "papel") {
        console.log("Empate");
    } else if (j2 == "tijeras") {
        console.log("J2 Gana");
    } else {
        alert("Opción no válida");
    }
} else if (j1 == "tijeras") {
    if (j2 == "piedra") {
        console.log("J2 Gana");
    } else if (j2 == "papel") {
        console.log("J1 Gana");
    } else if (j2 == "tijeras") {
        console.log("Empate");
    } else {
        alert("Opción no válida");
    }
} else {
    alert("Opción no válida")
}