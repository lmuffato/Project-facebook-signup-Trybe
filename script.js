const getButton = document.getElementById('button-login');
const radioOptions = document.getElementsByName('gender')[2];
const binaryContainer = document.querySelector('.binary');

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

function removeBinary() {
  binaryContainer.removeChild(binaryContainer.childNodes[0]);
}

function binary() {
  if (document.getElementsByName('gender-custom')[0]) {
    removeBinary();
  }
  const binaryInput = document.createElement('input');
  binaryInput.name = 'gender-custom';
  binaryInput.placeholder = 'Gênero (opcional)';
  binaryContainer.appendChild(binaryInput);
}

radioOptions.addEventListener('change', binary);
btnSubmit.addEventListener('click', invalidFields);
