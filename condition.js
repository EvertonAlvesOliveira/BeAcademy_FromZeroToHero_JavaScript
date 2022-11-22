// IF AND ELSE
// SE E SE NÃO

// let num = 10
// let num2 = 20
// let isAdmin = true
// // Pode ser usado todos os operadores
// // && (AND) || (OR) !(NOT)
// if (num >= 10 && num2 <= 10) {
//     console.log('VERDADE')
// } else {
//     console.log('FALSE')
// }

// if (num >= 10 || num2 <= 10) {
//     console.log('VERDADE')
// } else {
//     console.log('FALSE')
// }

// if (!isAdmin) {
//     console.log('Ele não é ADMIN')
// } else {
//     console.log('Ele é ADMIN, tem permissão')
// }

// if (num < 10) {
//     console.log('Sou Maior')
// } else if (num >= 10 && num2 <=20) {
//     console.log('Segunda resta Verdade')
// } else {
//     console.log('Resposta Falsa')
// }

// // Caso necessitam utilizar muitos IF e ELSE.
// // Melhor utilizar o SWITCH
// let myExpression = 'x'

// switch (myExpression) {
//     case 'a':
//         console.log('Apertou p A')
//         break
//     case 'b':
//         console.log('Apertou o B')
//         break
//     case 'c':
//         console.log('Apertou o C')
//         break
//     default:
//         console.log('Você apertououtra tecla', myExpression)
//         break
// }


// // Calculadora
// function calc (num1, operador, num2) {
//     let result
//     switch(operador) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             console.log('Não entendi')
//             break
//     }
//     return result
// }
// console.log(calc(12, '*', 3))


// Throw and Try Catch
// Saber a minha idade
function myAge(myage) {
    if (!myage) {
        throw 'Você precisa colocar a Idade!'
    }
    console.log('Eu tratei depois do erro!')
}
try{
    myAge(38)
    console.log('Já tratei e deu certo!')
} catch(error) {
    console.log(error)
}
console.log('Programa continua')