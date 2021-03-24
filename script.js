const loginButton = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');
const personalizadoRadioButton = document.querySelector('#personalizado');
const campoDeTextoPersonalizado = document.createElement('input');
const submitFormButton = document.querySelector('#facebook-register');
const criaContaForm = document.querySelector('.right-content form');

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
