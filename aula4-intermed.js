/* Prototypes */
// function Pessoa(nome, idade, peso) {
//     this.nome = nome;
//     this.idade = idade;
//     this.peso = peso;
// }
// const marcelo = new Pessoa('Marcelo', 44, 80);
// //console.log(Pessoa.prototype)
// const pessoa = 'Marcelo'



const notebook = {
    cor: 'preta',
    ano: 2022,
    specifications: function(value) {
        return `Este custa R$${value},00; cor ${this.cor}; ano ${this.ano}`        
    }
}
    //console.log(notebook.cor)

const dell = {
    marca: 'Dell'
}
const macBook = {
    marca: 'MacBook'
}

Object.setPrototypeOf(dell, notebook)
Object.setPrototypeOf(macBook, notebook)
    console.log(dell.specifications(5000))
    console.log(macBook.specifications(15000))