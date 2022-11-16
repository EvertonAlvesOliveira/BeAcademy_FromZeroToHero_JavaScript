## O que é uma Função no JavaScript ?

Uma função Javascript é um bloco de código projetado para executar uma tarefa específica.

Uma função Javascript é executada quando "algo" a invoca (chama).

Uma função Javascript é definida com a palavra - function chave, seguida por um name, seguido por parênteses () .

Os nomes das funções podem conter letras, digitos, sublinhados e cifrões (mesmas regras das variávies) .

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado, pela função, é colocado entre chaves: {}


# Documentação: https://www.w3schools.com/js/js_function.asp

# Anatomia Function

function myFunction () {
    // My code>
}

# Anatomia Function Anonymous

const myFunction = function () {
    // My code
}

# Execução

myFunction ()

# Parâmetros da Função

function myFunctionParameters(parameter1, parameter2){
    // My code
}

# Argumentos na Execução

myFunctionParamenters(arg1, arg2)

## Exemplos

function myFirstFunction(){
    console.log("Função Disparada !");
}

function mySecondFunction(){
    alert("Alerta na tela")
}

const anomymousFunction = function() {
    console.log("Função Anônima")
}

// Função com Parâmetros
function sum (number1, number2){
    console.log(number1 + number2)
}

// Executando, Inovando, Chamando
// execute, invoke, call
myFirstFunction()
mySecondFunction()


//=================================================

## Retornando Valores dentro da Função

--> Utilizar sempre que a função precisar retornar algum valor, como por exemplo
> Calculo, número, texto, objetos, vetores ...

# Exemplo
function sun (number1, number2) {
    total = number1 + number2
    // console.log(number1 + number2)
    return total
}
console.log(`Minha função de soma deu ${sum(12,12)}`)



## Teória do prato de comida
    Vou montar meu prato de comiga para almoçar
function almocar (comida1, comida2, comida3) {
    return `Meu almoço teve ${comida1}, ${comida2}, ${comida3}`;
}
//Preciso de um prato para armazenar a comida
const prato = almocar('arroz', 'feijão', 'frango')
console.log(prato)


## Array Function, maneira mais moderna de criar uma Função

# Exemplo
const arrowFunction = () => {
    console.log('Arrow Function')
}

# Exemplo com Parâmetro e Retorno

const arrowFunction = (num1, num2) => {
    total = num1 + num2
    return total
}
cont result = arrowFunction(90,20)
console.log(result)