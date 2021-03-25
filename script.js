const loginButton = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');
const personalizadoRadioButton = document.querySelector('#personalizado');
const rightContent = document.querySelector('.right-content');
const rightContentChilds = document.querySelectorAll('.right-content *');
const campoDeTextoPersonalizado = document.createElement('input');
const submitFormButton = document.querySelector('#facebook-register');
const criaContaForm = document.querySelector('.right-content form');
const radioButtons = document.querySelectorAll('[name="gender"]');
const inputBlock = document.querySelector('.right-content form .input-block');
const firstNameEl = document.querySelector('#first-name');
const emailPhone = document.getElementById('phone-email');
let buttonCheckedValue = '';

function exibirAlertaDeLogin() {
  window.alert(emailPhoneInput.value);
}

function adicionaCampoPersonalizado() {
  campoDeTextoPersonalizado.type = 'text';
  campoDeTextoPersonalizado.id = 'personalizado-input';
  campoDeTextoPersonalizado.name = 'gender-custom';
  campoDeTextoPersonalizado.placeholder = 'Gênero';
  criaContaForm.insertBefore(campoDeTextoPersonalizado, submitFormButton);
}

loginButton.addEventListener('click', exibirAlertaDeLogin);
personalizadoRadioButton.addEventListener('click', adicionaCampoPersonalizado);

function exibirAlertaDeInvalidez() {
  if (criaContaForm.childNodes.length < 18) {
    const alertaInvalido = document.createElement('p');
    alertaInvalido.className = 'alertInvalidFields';
    alertaInvalido.innerHTML = 'Campos inválidos';
    criaContaForm.insertBefore(alertaInvalido, inputBlock);
  }
}

function validaCampoNome() {
  if (firstNameEl.value.length < 3) {
    firstNameEl.focus();
    exibirAlertaDeInvalidez();
  }
}
function validaCampoSobrenome() {
  if (document.getElementById('last-name').value.length < 3) {
    document.getElementById('last-name').focus();
    exibirAlertaDeInvalidez();
  }
}

function validaCampoSenha() {
  if (document.getElementById('password').value.length < 3) {
    document.getElementById('password').focus();
    exibirAlertaDeInvalidez();
  }
}

function validaCampoDataNascimento() {
  if (document.getElementById('birthdate').value.length < 3) {
    document.getElementById('birthdate').focus();
    exibirAlertaDeInvalidez();
  }
}
function validaCampoEmailOuCelular() {
  if (emailPhone.value.length < 3) {
    emailPhone.focus();
    exibirAlertaDeInvalidez();
  }
}

function validaGenero() {
  let isButtonChecked = false;
  for (let index = 0; index < radioButtons.length; index += 1) {
    if (radioButtons[index].checked === true) {
      isButtonChecked = true;
      buttonCheckedValue = radioButtons[index].value;
    }
  }
  return isButtonChecked;
}

function handleFunctions() {
  validaCampoNome();
  validaCampoSenha();
  validaCampoSobrenome();
  validaCampoDataNascimento();
  validaCampoEmailOuCelular();
  validaGenero();
}

function criarElementosDaConclusao() {
  const name = firstNameEl.value;
  const lastName = document.getElementById('last-name').value;
  const birthdate = document.getElementById('birthdate').value;
  const conclusionText = document.createElement('p');
  conclusionText.innerHTML = `${emailPhone.value}\n\
${birthdate}\n
${buttonCheckedValue}`;
  const conclusionHeader = document.createElement('h1');
  conclusionHeader.innerHTML = `Olá, ${name} ${lastName}`;
  const sectionConclusion = document.createElement('section');
  sectionConclusion.className = 'form-conclusion';
  sectionConclusion.appendChild(conclusionHeader);
  sectionConclusion.appendChild(conclusionText);
  rightContent.appendChild(sectionConclusion);
}

function exibirConclusaoDeCadastro(e) {
  e.preventDefault();
  for (let index = 0; index < rightContentChilds.length; index += 1) {
    rightContentChilds[index].style.display = 'none';
  }
  criarElementosDaConclusao();
}

submitFormButton.addEventListener('click', handleFunctions);
criaContaForm.addEventListener('submit', (e) => exibirConclusaoDeCadastro(e));
