const loginButton = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');
const personalizadoRadioButton = document.querySelector('#personalizado');
const campoDeTextoPersonalizado = document.createElement('input');
const submitFormButton = document.querySelector('#facebook-register');
const criaContaForm = document.querySelector('.right-content form');
const radioButtons = document.querySelectorAll('[name="gender"]');

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

function validaCampoNome() {
  if (document.getElementById('first-name').value.length < 3) {
    document.getElementById("first-name").focus();
  }
}
function validaCampoSobrenome() {
  if (document.getElementById('last-name').value.length < 3) {
    document.getElementById("last-name").focus();
  }
}

function validaCampoSenha() {
  if (document.getElementById('password').value.length < 3) {
    document.getElementById("password").focus();
  }
}

function validaCampoDataNascimento() {
  if (document.getElementById('birthdate').value.length < 3) {
    document.getElementById("birthdate").focus();
  }
}
function validaCampoEmailOuCelular() {
  if (document.getElementById('phone-email').value.length < 3) {
    document.getElementById("phone-email").focus();
  }
}

function validaGenero() {
  let isButtonChecked = false;
  for (let index = 0; index <= radioButtons.length; index += 1) {
    if (radioButtons.checked === true); {
      isButtonChecked = true
    };
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

submitFormButton.addEventListener('click', handleFunctions);
