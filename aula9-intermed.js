/* Função Callback */

function hello(name) {
    console.log(name)
}

function helloUser(Callback) {
    Callback('Marcelo')
}



// helloUser (hello)


const Callback = e => alert('Foi clicado')

window.addEventListener('click', Callback)