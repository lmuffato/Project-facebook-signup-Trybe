const getButton = document.getElementById('button-login');

function alertLogin() {
  const textLogin = document.getElementById('user-email-phone');
  alert(textLogin.value);
}

getButton.addEventListener('click', alertLogin);
const btnSubmit = document.getElementById('facebook-register');
const registerForm = document.getElementById('register-form');

function invalidFields(event) {
  event.preventDefault();
  const inputContent = document.getElementsByTagName('input');
  const labelInvalid = document.querySelector('.labelInvalid');

  if (labelInvalid) {
    return 0;
  }

  for (let index = 0; index < 5; index += 1) {
    if (inputContent[index].value === '') {
      const alertEmpty = document.createElement('span');
      alertEmpty.innerHTML = 'Campos inválidos';
      alertEmpty.className = 'labelInvalid';
      registerForm.appendChild(alertEmpty);
      break;
    }
  }
}

btnSubmit.addEventListener('click', invalidFields);
