// 1. Declare uma variável de nome person
//var person

// 2. Que tipo de dado é a variável acima?
//console.log(typeof person)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: Number (integer)
    * weight: Number (float)
    * isAdmin: Boolean
    * isAMan: boolean

*/
// person = {
//     name: "Everton",
//     age: 38,
//     weight: 71,
//     isAdmin: false,
//     isAMan: true
// }

/*
    4. A variável human abaixo é de que tipo de dados?
        Object

    4.1 Atribua a ela as mesmas propriedaddes e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem,:
    O humano <nome> tem o peso <weight> kg.

*/
let human = {
    name: "Everton",
    age: 38,
    weight: 71,
    isAdmin: false,
    isAMan: true,
}
console.log(`O Humano ${human.name} tem o peso ${human.weight}`);

/*
5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.

*/

// let humans = [
//     human
// ]
// console.log(humans)
//console.log(humans[0].name)


/*
6. Reatribua valor para uma variável acima, colocando dentro dela o objeto human da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado inserir ele no Array)

*/

// humans = [
// human
// ]
//console.log(humans)

/*
7. Coloque no console o valor da posição zero do Array acima.
*/
//console.log(human[0])
//console.log(humans[0].name)

/*
8. Crie um novo objeto human e coloque na posição 1 do Array humans
*/

const newHuman = {
        name: "Everton",
        age: 30,
        weight: 90.1,
        isAdmin: true,
        isAMan: true,
};

console.log(newHuman)

    humans = [
        human,
        newHuman
]
console.log(humans)
console.log(humans[1])

/*
9. Sem rodar o código responda o valor da saída abaixo:
*/

// a) = undefined

// b) = undefined
        // 2
        // undefined

// c) = b is not defined


// d) = erro, pois const não pode mudar.