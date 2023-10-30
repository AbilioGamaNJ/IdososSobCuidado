function ShowPassword(){
    var inputPass = document.getElementById('password')
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
    var inputConfirmPass = document.getElementById('ConfirmPassword')
    var btnShowConfirmPass = document.getElementById('btn-confirm-password')

    if(inputConfirmPass.type === 'password'){
        inputConfirmPass.setAttribute('type', 'text')
        btnShowConfirmPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputConfirmPass.setAttribute('type', 'password')
        btnShowConfirmPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill',)
    }
}