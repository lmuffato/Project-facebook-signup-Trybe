function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);

const alertText = document.createElement('p');
alertText.innerText = 'Campos inválidos';

const buttonRegister = document.querySelector('#facebook-register');

function preventButton(evt) {
  evt.preventDefault();
}

function validateForm(evt) {
  const list = document.querySelectorAll('.right-content input');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].value === '') {
      document.querySelector('#formMain').appendChild(alertText);
      evt.preventDefault();
      }
  }
}

buttonRegister.addEventListener('click', validateForm);
