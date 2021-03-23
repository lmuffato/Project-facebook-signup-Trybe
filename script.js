const getButton = document.getElementById('button-login');
const selectBinary = document.getElementsByName('gender');
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

function verifyCustom() {
  if (document.getElementsByName('gender-custom')[0]) {
    binaryContainer.removeChild(binaryContainer.childNodes[0]);
  }
}

function removeBinary() {
  verifyCustom();
}

function binary() {
  verifyCustom();
  const binaryInput = document.createElement('input');
  binaryInput.name = 'gender-custom';
  binaryInput.placeholder = 'Gênero (opcional)';
  binaryContainer.appendChild(binaryInput);
}

selectBinary[0].addEventListener('change', removeBinary);
selectBinary[1].addEventListener('change', removeBinary);
selectBinary[2].addEventListener('change', binary);
btnSubmit.addEventListener('click', invalidFields);
