/* Promisses */

// function show () {
//     setTimeout(() => {
//         console.log('OI!!!')
//     }, 5000);
//     console.log('Até Logo!')
// }

// //show()

// const minhaPromisse = new Promise((resolve, reject) => {
//     let n = 11
//     if(n > 10) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// minhaPromisse
// .then(result => console.log('resolveu'))
// .catch(err => console.log('errou'))
// .finally(() => console.log('Finally!'))



// ------ exemplo -------
// function showHello() {
//     console.log('Hello')
// }

// function showGoodbye() {
//     console.log('Goodbye')
// }



//import fetch from 'node-fetch';

// fetch()
/*const firstUser = (userId) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
// Para mim não funcionou a questão acima
firstUser(1)
*/


/*const cep = '01001000';
fetch(`https://viacep.com.br/ws/01001000/json/`)
.then[r => r.json()]
.then[cep => {
    console.log (`O Bairro é ${cep.bairro} e o Logradouro é ${cep.logradouro}`);
}];
*/


/* async / await */

/*const firstUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.resultJSON()
    //let data = resultJson.title
    console.log(resultJSON)
}
firstUser(1)
*/



import fetch from 'node-fetch';
/* try / catch */

async function user() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('error =====>', error)
        //throw new Error('Erro no fetch')
    } finally {
        console.log('acabou')
    }
} 
user()