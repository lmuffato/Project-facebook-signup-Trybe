const buttonLogin = document.querySelector('#button-login');
const emailFone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  window.alert(emailFone.value);
});

const personalizado = document.getElementById("personalizar");
function criarInput (chek){
let divConteiner = document.getElementById("radio-conteiner");

if(chek.target.checked === true ){
let input = document.createElement("input"); 
input.setAttribute("name", "gender-custom");
input.setAttribute("placeholder", "Gênero (opcional)");
input.classList.add("inputDinamico");
divConteiner.appendChild(input);
console.log(input);
}
else if(input.classList==="inputDinamico") {
input.remove("inputDinamico");

}
}
var btAdicionar = document.getElementById("personalizar");
btAdicionar.addEventListener("click", function (e){
criarInput(e)});
