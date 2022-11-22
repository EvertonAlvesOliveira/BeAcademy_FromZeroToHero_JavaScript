// FOR
// for (let i = 10; i>=1; i++) {
//     console.log(i);
// }

// for (let i = 1; i<=10; i++) {
//     if(i === 5) {
//         break
//         continue
//     }
//     console.log(i)
// }

// // WHILE (ENQUANTO)
// let interator = 1
// while (interator <= 20) {
//     console.log(interator)
// 
//      // Incremento
// }     interator++




// FOR OF
// ARRAY

// let number = [2,4,3,5,6]
// // num = numbers (FOR OF)
// // FOR OF (Valores do Array)
//     for (num of number) {
//         if (num > 4) {
//             console.log(num)
//         }
//     }


//     let number = ['Maria','Pedro','joão','Jenifer','Luan']
// // num = numbers (FOR OF)
// // FOR OF (Valores do Array)
//     for (num of number) {
//         console.log(num)
//         }
    
// FOR IN
// let animals = {
//     name: 'Leão',
//     weight: 200,
//     age: 4
// }
// for (item in animals) {
//     // Tipo 1: para capturar valores de objeto em um FOR IN
//     console.log(animals["age"])
//     // Tipo 2: para capturar todo o objeto
//     console.log(animals)
//     // Tipo 3: mostra os valores dentro das propriedades de um objeto
//     console.log(animals[item])
//     // Tipo 4: capturar valores individuais das propriedades de um objeto
//     console.log(animals.name)

// }


let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName) {
   // console.log(arrayName) // Mostrar todo o Array
   // console.log(arrayName[item]) // Mostrar todos os valores
   //console.log(arrayName[2]) // Mostrar diretamente um vetor
   console.log(item) // index dos vetores (Posições)


}