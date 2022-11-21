
// Manipulando String e Arrays
/*
    Separamos um texto que contem espaços, em um novo arry onde
    cada texto é uma posição do Array.
*/

// let newPhrase = "Fala meus queridos e queridos."
//     console.log(newPhrase)
// let phraseToArray = newPhrase.split(' ')
//     console.log(phraseToArray)

// Convertendo novamente o texto para String.
// .join(" ") -> Permite que eu gere separações (- , _ / '')

// let phraseModify = phraseToArray.join(" ").toLowerCase()
//     console.log(phraseModify)

// Manipulando Strings e Arrays
// Verificar se contém palavras ou letras

// let stringInclude = "Veem ne mim PayLivre, pay pay"
//     console.log(stringInclude.includes("PayLivre"))

// // Objetos

// let arrayInclide = [
//     "PayLivre",
//     "veem",
//     "ne mim,",
//     "Meu amor",
//     {
//         firstName: "Pay",
//         lastName: "Livre"
//     }
// ]
// console.log(arrayInclide.includes("Meu amor"))

// String startwith
// console.log(stringInclude.startsWith("Ve"))
// // String endswith
// console.log(stringInclude.endsWith("e"))

// // Transformando um Array em Caracteres
// let wordToArray = "Quem ta gostando diz Hey!!!"
//     console.log(Array.from(wordToArray))

// Manipulando Arrays
const animals = ["🐫","🐇", "🐊", "🐕‍🦺"] //4 (length 5)
    console.log(animals)

// Adicionar item no fim do array
console.log(animals.push("🐀"))
console.log(animals)
//Adicionar item no começo
console.log(animals.unshift("🐗"))
console.log(animals)
// Remover item no fim
console.log(animals.pop())
console.log(animals)
//Remover item no começo
console.log.apply(animals.shift())
console.log(animals)
// Pegar somente alguns elementos do Array
//Não modificar o Array
console.log(animals.slice(0,3))
console.log(animals)
// Remover 1 ou mais itens do Array
//animals.slice(1,3)
console.log(animals)

// Encontrar a posição do Array
let index = animals.indexOf('🐇')
console.log(index)
animals.slice(index, 1)
console.log(animals)