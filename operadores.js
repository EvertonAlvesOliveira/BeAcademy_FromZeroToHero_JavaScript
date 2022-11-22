// OPERADORES LÓGICOS


// Operadores Incremento e Decremento
// ++ e --
// let incrementNumber = 4
// console.log(incrementNumber)
// // +1
// incrementNumber++ // 5
// console.log(incrementNumber)
// ++incrementNumber // 6+1
// console.log(incrementNumber)

// let descrementNumber = 50
// console.log(descrementNumber)
// descrementNumber -- //49
// console.log(descrementNumber)
// descrementNumber-- //48
// console.log(descrementNumber)
// descrementNumber-- //47
// console.log(descrementNumber)
// descrementNumber-- //46
// console.log(descrementNumber)


// Operadores Artitméticos
// +, -, /, *, %
// let note1 = 6.7
// let note2 = 3.5
// let note3 = 5.0
// let note4 = 8.9
// let avg = (note1 + note2 + note3 + note4) / 4
// console.log(avg)
// console.log(avg.toFixed(1)) // Diminui o número de casas decimais, mas agora ficaria como String, necessário converter.
// console.log(Number(avg.toFixed(2))) //Convertido para inteiro (número)
// console.log(Number(Math.round(avg))) // Arredondar o resultado
// console.log(Number(Math.floor(avg))) // Arredondar para baixo


// Operadores Relacionais e Igualdade
// < >, ==, ===. !=, !==, >=, <=
let numberRelation1 = 40
let numberRelation2 = 20

let relation = numberRelation1 != numberRelation2 // != Diferente no valor
console.log(relation)
relation = numberRelation1 !== numberRelation2 // !== Diferente no valor ou diferente no tipo (OR)
console.log(relation)
relation = numberRelation1 == numberRelation2 // Igual no valor
console.log(relation)
relation = numberRelation1 === numberRelation2 // Igual no valor e no tipo (AND)
console.log(relation)

// Operadores de Atribuição
let newNumber = 20
newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5
console.log(newNumber)


// Operadores Condicionais (Ternároio)
// (condition), ?, true, :, false
let value = 24
let valeu2 = 32

const newCondition = value >= valeu2 ? 'Isso é verdade'
                            : value <= valeu2 ? 'Isso é verdade, segunda resposta true' :
                            'Resposta falsa para tudo!!!'
console.log(newCondition)