/* immdiately invoked function expression ou IIFE */

// (function helloWorld() {
//     alert('Hello World!');
//   }
// )();

// (function (message){
//     alert(message);
//   }
// )('Hello Wolrd!!!');



/* Arrow Function */

/* function sum(a) {
    return a + 10;
} */

const sum = a => a + 100;
    console.log(sum(8))



// Exemplo com map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const newArray = materials.map(m => m.length)
    console.log(newArray)