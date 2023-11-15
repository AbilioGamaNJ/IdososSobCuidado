var nome_cuidador = document.getElementById("nome_cuidador")
var celular_cuidador = document.getElementById("celular_cuidador")
var cpf_cuidador = document.getElementById("cpf_cuidador")
var senha_cuidador = document.getElementById("senha_cuidador")
var confimar_senha_cuidador = document.getElementById("confirmar_senha_cuidador")

function ShowPassword(){
    var inputPass = document.getElementById('senha_cuidador')
    var btnShowPass = document.getElementById('btn-password')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill',)
    }
}

function ShowConfirmPassword(){
    var inputConfirmPass = document.getElementById('confirmar_senha_cuidador')
    var btnShowConfirmPass = document.getElementById('btn-confirm-password')

    if(inputConfirmPass.type === 'password'){
        inputConfirmPass.setAttribute('type', 'text')
        btnShowConfirmPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputConfirmPass.setAttribute('type', 'password')
        btnShowConfirmPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill',)
    }
}