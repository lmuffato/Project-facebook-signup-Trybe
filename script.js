const loginButton = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');

function exibirAlertaDeLogin() {
  window.alert(emailPhoneInput.value);
}

loginButton.addEventListener('click', exibirAlertaDeLogin);
