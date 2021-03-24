function alert1() {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alert1);

function validateRegister() {
  const validate = document.querySelectorAll('.validate');
  if (validate === ' ') {
    alert("Campos inválidos");
  }
}

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', validateRegister);
