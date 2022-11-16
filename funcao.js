// // Exemplo 1

//         // Method
// function myFirstFunction() {
//     //Entra meu código
//     console.log("Olhaaaa a Função!!!")
// }
// //Execute
// myFirstFunction()


// // Função com parâmetros e argumentos
// //number1 = 32 e number2 = 24
// function sum(number1, number2) {
//     console.log(number1 + number2)
// }
// sum(32,24)


// // Função com Return
// function myFirstFunctionWithReturn(num1, num2) {
//     let total = num1 + num2
//     return total
// }
// console.log(myFirstFunctionWithReturn(20,20))
// // --> Total = 40


// // Restaurante
// function meuPratoComida(comida1, comida2, comida3, comida4) {
//     return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
// }
// const prato = meuPratoComida('arroz', 'feijão', 'bife', 'batata frita')
// console.log(prato)


// // Arrow Function
// const myFirstArrowFunction = (number1, number2) => {
//     let total = number1 + number2
//     return total;
// }
// const result = myFirstArrowFunction(90, 20)
// console.log(result)






// Função Anônima
// (function() {
//     console.log('PayLivre S2')
// })()// Autoexecução

// setTimeout(function(){
//     console.log('Vou levar 10 segundos para ser Executado!!!')
// },10000)//10s



// Part 1
// let assunto
// function criarAssunto(assunto) {
//     return assunto
// }
// console.log(criarAssunto(assunto));
// underfined


// Parte 2
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     return assunto //
// }
// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'estudar'


// Parte 3
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     assunto = "Escutar Música" // Mudança de valor
//     return assunto //
// }
// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'Escutar Música'


// Parte 4
// let assunto = 'Estudar' // var = valor
// function criarAssunto() {  // Sem parâmetro
//     assunto = "Estudar Música"  // Mudança de valor
//     return assunto //
// }
// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'Escutar Música'



// Hoisting
// digaMinhaIdade()
// function digaMinhaIdade(){
//     return console.log(38)
// }

// Para saber mais pode pesquisar no google "msn web docs" - e digitar no nome dafunção desejada.


// Callback
// function minhaFuncao (Callback) {
//     console.log(' Inicio da minha Função =) ')

//     Callback(15,15)

//     console.log('Final da minha Função')
// }
// minhaFuncao(
//     (num1, num2) => {
//         return console.log(num1 + num2)
//     }
// )


// Funções Construtoras
//Function Construct

//Exemplo
// function Sum (){
//     this.num1,
//     this.num2,
//     this.calc = function (num1, num2) {
//        return total = num1 + num2
//        // return total = num1 * num2
//        // return total = num1 - num2
//        // return total = num1 / num2
//     }
// }

// const math = new Sum()
// //console.log(math)
// console.log(math.calc(32,32))

// const math2 = new Sum()
// console.log(math2.calc(50,64))


//Exemplo
// function Sum (){
//     this.num1,
//     this.num2,
//     this.calc = function (num1, num2) {
//        return total = num1 + num2
//        // return total = num1 * num2
//        // return total = num1 - num2
//        // return total = num1 / num2
//     }
// }
// const math = new Sum()
// const num1 = math.num1 = 24
// const num2 = math.num2 = 50

// console.log(num1)
// console.log(num2)
// console.log(math.calc(num1, num2))

// const math2 = new Sum()
// const number1 = math2.num1 = 30
// const number2 = math2.num1 = 10
// console.log(math2.calc(number1, number1))
// console.log(math2.calc(number2, number2))



// Exemplo
// function Sum (){
//     this.num1,
//     this.num2,
//     this.calc = function (num1, num2) {
//        return total = num1 + num2
//        // return total = num1 * num2
//        // return total = num1 - num2
//        // return total = num1 / num2
//     }
// }
// const math = new Sum().calc(45,45)
// console.log(math)


// Exemplo
function Sum (num1, num2){
    this.num1 = num1,
    this.num2 = num2,
    this.calc = function (num1, num2) {
       return total = num1 + num2
       // return total = num1 * num2
       // return total = num1 - num2
       // return total = num1 / num2
    }
}
const math = new Sum().calc(20,45)
console.log(math)

const data = new Date().getDate();
console.log(data)