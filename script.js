const btnLogin = document.querySelector('#button-login');
const userEmail = document.querySelector('#user-email-phone');

function alertEmail() {
  alert(userEmail.value);
}

btnLogin.addEventListener('click', alertEmail);

const btnRegister = document.querySelector('#facebook-register');
function checkInputs(event) {
  const userInputs = document.querySelectorAll('.user-data');
  event.preventDefault();

  for (let index = 0; index < userInputs.length; index += 1) {
    if (userInputs[index].value === '') {
      const formAlert = document.querySelector('.create-acount');
      const spanAlert = document.createElement('span');
      spanAlert.innerText = 'Campos inválidos';
      formAlert.appendChild(spanAlert);
      break;
    }
  }
}
btnRegister.addEventListener('click', checkInputs);
