function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);

function validateForm() {
  const list = document.querySelectorAll('input');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].value === '') {
      alert('Campos inválidos');
    }
  }
}

const buttonRegister = document.querySelector('#facebook-register');

buttonRegister.addEventListener('click', validateForm);
