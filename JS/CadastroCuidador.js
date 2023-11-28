var nome_cuidador = document.getElementById("nome_cuidador")
var email_cuidador = documento.getElementById("email_cuidador")
var celular_cuidador = document.getElementById("celular_cuidador")
var cpf_cuidador = document.getElementById("cpf_cuidador")
var senha_cuidador = document.getElementById("senha_cuidador")


    function Cadastro(){
   
        const [nome_cuidador, setNome_cuidador] = useState("");
        const [email_cuidador, setEmail_cuidador] = useState("");
        const [celular_cuidador, setCelular_cuidador] = useState("");
        const [cpf_cuidador, setCpf_cuidador] = useState("");
        const [senha_cuidador, setSenha_cuidador] = useState("");
      
        //  const callAgentFinder = async() => {
        //    try{
        //         const response = await fetch('http://localhost:3001/api/cuidador')
        //         const data = response.json()
        //      data.then(
        //           (val) => {setCuidador(val.data)
      
        //            }
        //         )
        //     }catch(error){
        //     }
        //  }

         const postCuidador = async () => {
            if (nome_cuidador !== "" && email_cuidador !== "" && celular_cuidador !== "" && cpf_cuidador !== "" && senha_cuidador !== "" ) {
              try {
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify({
                    nome_cuidador: nome_cuidador,
                    email_cuidador: email_cuidador,
                    celular_cuidador: celular_cuidador,
                    cpf_cuidador: cpf_cuidador,
                    senha_cuidador: senha_cuidador
                  }),
                };
                await fetch("http://localhost:3001/api/cuidador", requestOptions);
                window.location.href = "./loginCuidador.html";
              } catch (error) {
                console.log(error);
              
              }
            } else {
              // alert("vazio")
            }}
}

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