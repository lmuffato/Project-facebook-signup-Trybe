function alertLogin() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
  input.value = '';
}

const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', alertLogin);

const formInputs = document.querySelectorAll('.form-inputs');
const fbForm = document.getElementById('fb-form');
const createP = document.createElement('p');
const buttonRegister = document.getElementById('facebook-register');

function validateFields(event) {
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      event.preventDefault();
      createP.innerHTML = 'Campos inválidos';
      fbForm.appendChild(createP);
      return true;
    }
  }
  return false;
}

buttonRegister.addEventListener('click', validateFields);
