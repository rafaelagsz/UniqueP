let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  // evento keyup, valida o que está dentro da aerofunction

  if(nome.value.length <= 2){
    // length é a quantidade de valores no campo

    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 4 caracteres'
    // se o nome tiver menos de 4 letras, é necessário preencher corretamente
    // innerHTML pode colocar funções em html, <strong> para negrito, inserir no min 4

    nome.setAttribute('style', 'border-color: red')
    // cor vermelha para requisição incorreta

    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    // cor vermelha para requisição correta

    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  // evento keyup, valida o que está dentro da aerofunction

  if(usuario.value.length <= 4){
    // length é a quantidade de valores no campo

    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 6 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  // evento keyup, valida o que está dentro da aerofunction

  if(senha.value.length <= 7){
    // length é a quantidade de valores no campo

    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  // evento keyup, valida o que está dentro da aerofunction

  if(senha.value != confirmSenha.value){
    // validar se as senhas são iguais

    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não são iguais'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
    // se a senha for diferente valida como falso e aparece o recado em vermelho
    
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
    // valida como true aparece o recado em verde
  }
})

function cadastrar(){
  // para validar, usei variável booleana
  //ao entrar na página, sem preencher e clicar no botão cadastro é dado como falso, senão true

  if(validNome && validUsuario && validSenha && validConfirmSenha){
    // usar && para que o usuário seja validado somente se todos os dados estiverem preenchidos

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    //json.parse tranforma o que foi colocado dentro do localStorage em json
    //ele adiciona o array que já existe na variável, que é um array, ou ele cria um array vazio
    
    listaUser.push(
    // foi usado um array de objetos por conta dos quatro campos
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    ) //push para passar os objetos, ou seja, receber os valores nome, usuario e senha
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    //chamo o localStorage para criar um novo registro com dois parâmetros
    //lista user e o que vai ser colocado nos campos
    //se todos estiverem corretos, ele adiciona o localStorage
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../html/signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  // adicionei o evento click e uma aero funtion, essa função pega o id senha
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
// if para pegar o tipo de senha e o atributo, se o atributo for senha
// ele troca o tipo para texto, senão troca para senha, fazendo o efeito aparecer ou não

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})