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
        const [senha__cuidador, setSenha_cuidador] = useState("");
      
         const callAgentFinder = async() => {
           try{
                const response = await fetch('http://localhost:3001/api/user')
                const data = response.json()
             data.then(
                  (val) => {setUsers(val.data)
      
                   }
                )
            }catch(error){
            }
         }

         const postUser = async () => {
            if (nome_cuidador !== "" && email_cuidador !== "" && celular_cuidador !== "" && cpf_cuidador !== "" && senha__cuidador !== "" ) {
              try {
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify({
                    username: username,
                    name: name,
                    email: email,
                    password: password,
                  }),
                };
                await fetch("http://localhost:3001/api/user", requestOptions);
                window.location.href = "./login";
              } catch (error) {
                console.log(error);
                setUsername("");
                setName("");
                setEmail("");
                setPassword("");
              }
            } else {
              // alert("vazio")
            }}
}

function ShowPassword(){
    var inputPass = document.getElementById('passwordC')
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
    var inputConfirmPass = document.getElementById('ConfirmPasswordC')
    var btnShowConfirmPass = document.getElementById('btn-confirm-password')

    if(inputConfirmPass.type === 'password'){
        inputConfirmPass.setAttribute('type', 'text')
        btnShowConfirmPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputConfirmPass.setAttribute('type', 'password')
        btnShowConfirmPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill',)
    }
}