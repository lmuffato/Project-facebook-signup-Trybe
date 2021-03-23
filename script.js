const btnLogin = document.querySelector('#button-login');
const userEmail = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(userEmail.value);
});

const btnRegister = document.querySelector('#facebook-register');
btnRegister.addEventListener('click', (event) => {
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
});
