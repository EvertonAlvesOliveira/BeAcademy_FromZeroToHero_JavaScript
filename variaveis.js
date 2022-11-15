// Declarar

// let name = "Luan"
// console.log(name)

// name = 32
// console.log(name)

// name = "Monteiro"
// console.log(name)

//=======================================

// const name = "Luan"
// console.log(name)
// name = "Monteiro"

//========================================

// Globais
// Hoisting --> var

// console.log('Variável name exite aqui?', name)

// {// Scopo (bloco de código)
//     //Local
//     var name = "Luan"
// }

// console.log('Variável name existe aqui?', name)

//================================================

//Locais

// let name = "Luan"

// console.log('Meu nome chegou aqui?', name)

// {   //Scopo (bloco de código)
//     //Local
//     let name = "Jenifer"
//     console.log('Meu nome chegou aqui?', name)
// }

// console.log('Meu nome chegou aqui?', name)

//===================================================

//Objetos

// const human = {
//     name: "Luan Monteiro",
//     age: 30,
//     weight: 90,
//     isAthlete: true
// } // Objeto

// //console.log(human)
// console.log({human})

//  //  //  //  //  //  //  //  //  //  //  //  //
// const human = {
//     name: "Luan Monteiro",
//     age: 30,
//     weight: 90,
//     isAthlete: true,
//     walk: function walking(){
//         console.log('Eu ando bastante !')
//     }
// } // Objeto

// console.log(human.age)
// console.log(human.name)
// console.log(human.walk())

//  //  //  //  //  //  //  //  //  //  //  //  
// const human = {
//     name: "Luan Monteiro",
//     age: 30,
//     weight: 90,
//     isAthlete: true,
//     walk: function walking(){
//         console.log('Eu ando bastante !')
//     }
// } // Objeto

// // CONCATENAR
// console.log("O Humano " + human.name + " tem a idade " + human.age)

// //INTERPOLAÇÃO
// console.log(`O Humano ${human.name} tem a idade ${human.age}`)

//=============================================================================

//Array
// const animals = [
//     "Elefante",  // 0
//     "Gato",  // 1
//     "Leão",// 2
//     "Cachorro" // 3
// ]
// //Tamanho 4
// console.log(animals[0])

//  //  //  //  //  ///  //  //  //  
const animals = [
    "Elefante",  // 0
    "Gato",  // 1
    "Leão",// 2
    "Cachorro", // 3
    {// 4
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
//Tamanho 5
console.log(animals[4].weight)