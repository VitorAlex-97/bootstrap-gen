const email = document.querySelector('#email')
const descricao = document.querySelector('#descricao')

const regex = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'

let emailOk = false
let descricaoOk = false

function validaEmail() {
    let textEmail = document.querySelector('#textEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        textEmail.innerHTML = 'Email inválido'
        textEmail.style.color = 'red'
        textEmail.style.fontSize = '12px'
        textEmail.style.display = 'block'
    } else {
        textEmail.style.display = 'none'
        emailOk = true
    }
}

function validaAssunto() {
    let textDescricao = document.querySelector('#textDescricao')

    if (decricao.value.length >= 100) {
        textDescricao.innerHTML = 'Texto muito grande'
        textDescricao.style.color = 'red'
        textDescricao.style.fontSize = '12px'
        textDescricao.style.display = 'block'
    } else {
        textDescricao.style.display = 'none'
        descricaoOk = true
    }
}

function enviar() {
    if (emailOk == true && descricaoOk == true) {
        alert('Formulário enviado!')
    } else {
        alert('Preencha o formulário corretamente')
    }
}