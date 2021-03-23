const btnLogin = document.querySelector('#button-login');
const userEmail = document.querySelector('#user-email-phone');

function alertEmail() {
  alert(userEmail.value);
}

btnLogin.addEventListener('click', alertEmail);

const btnRegister = document.querySelector('#facebook-register');
function checkInputs() {
  const userInputs = document.querySelectorAll('input');
  for (let index = 0; index < userInputs.length; index += 1) {
    if (userInputs[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
}
btnRegister.addEventListener('click', checkInputs);
