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
const formInputs = document.querySelectorAll('.right-content form input');
const firstNameEl = document.querySelector('#first-name');
const emailPhone = document.getElementById('phone-email');
let radioButtonValue = '';

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

function validaInputValue() {
  let isFieldsValid = true;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      isFieldsValid = false;
      exibirAlertaDeInvalidez();
    }
  }
  return isFieldsValid;
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
      radioButtonValue = radioButtons[index].value;
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
  const fullName = `${name} ${lastName}`;
  const birthdate = document.getElementById('birthdate').value;
  const phoneEmail = emailPhone.value;
  const gender = radioButtonValue;
  const conclusionHeader = document.createElement('p');
  conclusionHeader.innerHTML = `Olá, ${fullName} 
  ${birthdate}
  ${phoneEmail}
  ${gender}`;
  rightContent.appendChild(conclusionHeader);
}

function exibirConclusaoDeCadastro() {
  if (validaInputValue() && validaGenero()) {
    for (let index = 0; index < rightContentChilds.length; index += 1) {
      rightContentChilds[index].style.display = 'none';
    }
    criarElementosDaConclusao();
  }
}

function preventDefForm(event) {
  event.preventDefault();
}

submitFormButton.addEventListener('click', preventDefForm, false);
submitFormButton.addEventListener('click', handleFunctions);
submitFormButton.addEventListener('click', exibirConclusaoDeCadastro);
