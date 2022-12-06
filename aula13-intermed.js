// rest parameters
function getSun(...args) {
    let total = 0
    for(const arg of args) {
        total += arg
    }
    return total
}
//console.log(getSun(2, 5, 10, 2))



// spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5]
//console.log(arr2)



// merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = [0, 'Everton', ...array1, ...array2];
//console.log(mergeArrays)




// Destructuring
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}
//const marca = carro.marca
//const ano = carro.ano

const {marca, ano, portas} = carro;
//console.log(`O carro é da marca ${marca}, do ano ${ano} e de ${portas} portas !!!`)
//console.log(ano)


const cliente = {
    nome: 'Everton',
    compras: {
        digitais: {
            livros: ['Inferno de Gabriel', 'A garota do calendário'],
            filmes: ['50 Tons de Cinza', 'Inferno de Gabriel']
        },
        fisicas: {
            cadernos: ['Caderno']
        }
    }
}
/*console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.filmes);*/

const {livros, filmes} = cliente.compras.digitais;
/*console.log(livros);
console.log(filmes);*/

// destructuring arrays
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;
console.log(primeira)