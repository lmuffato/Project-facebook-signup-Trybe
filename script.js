const getButton = document.getElementById('button-login');

function alertLogin() {
  const textLogin = document.getElementById('user-email-phone');
  alert(textLogin.value);
}

getButton.addEventListener('click', alertLogin);
const btnSubmit = document.getElementById('facebook-register');
const registerForm = document.getElementById('register-form');

btnSubmit.addEventListener('click', () => {
  const inputContent = document.getElementsByTagName('input');

  for (let index = 0; index < 5; index += 1) {
    if (inputContent[index].value === '') {
      const alertEmpty = document.createElement('span');
      alertEmpty.innerHTML = 'Campos inválidos';
      registerForm.appendChild(alertEmpty);
      break;
    }
  }
});
