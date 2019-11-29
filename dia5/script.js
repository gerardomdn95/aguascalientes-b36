// // Punto de partida

// //       i = 0; 0 <= 5; 1
// //       0
// //       i = 1; 1 <= 5; 2
// //       1
// //       i = 2; 2 <= 5; 3
// //       2
// //       ...
// //       i = 5; 2 <= 5; 6
// //       5
// //       i = 6; 6 <= 5; 
// for (let i = 0; i <= 5; i++) {
//     // Scope i
//     if (i == 0) {
//         console.log(i + " No se puede determinar");
//     } else {
//         if (i % 2 == 0) {
//             console.log(i + " Es un número par");
//         } else {
//             console.log(i + " Es un número impar");
//         }
//     }
// }


// for (let i = 1; i <= 100; i++) { 
//     console.log(i); 
// }

// // Scope global
// let e = 0;

// // Javascript
// do {
//     console.log(e);
//     e++;
// } while(e <= 5);

// console.log(e);

// Genera un ciclo que imprima los primeros 100 números
// Si el número es múltiplo de 3 "Fizz"
// Si el número es múltiplo de 5 "Buzz"
// Si el número es múltiplo de 5 y 3 imprimir "FizzBuzz"

// 1
// 2
// fizz
// 4
// buzz
// 6

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}