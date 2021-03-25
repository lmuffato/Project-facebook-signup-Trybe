const buttonLogin = document.querySelector('#button-login');
const emailFone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  window.alert(emailFone.value);
});


function criarInput (chek) {
const divConteiner = document.getElementById("radio-conteiner");
if (chek.target.checked === true && document.getElementsByClassName("inputDinamico").length == 0) {
  const criarIn = document.createElement("input"); 
  criarIn.setAttribute("name", "gender-custom");
  criarIn.setAttribute("placeholder", "Gênero (opcional)");
  criarIn.classList.add("inputDinamico");
  divConteiner.appendChild(criarIn);
  }
}
const btAdicionar = document.getElementById("personalizar");
btAdicionar.addEventListener("click", function (e) {
criarInput(e)});
const btnCadastro = document.getElementById("facebook-register");
btnCadastro.addEventListener("click", (e) => {
e.preventDefault()
});

