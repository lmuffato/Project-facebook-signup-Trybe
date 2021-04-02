const entrarButton = document.getElementById('button-login');

function alertButton() {
  const valorEmail = document.getElementById('user-email-phone').value;
  alert(valorEmail);
}

//  codigo encontrado no site https://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
// Author: robertc

function errorMessage() {
  const registerInputs = document.getElementsByTagName('input');
  for (let index = 2; index < registerInputs.length; index += 1) {
    registerInputs[index].oninvalid = function b(e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        e.target.setCustomValidity('Campos inválidos');
      }
    };
    registerInputs[index].oninput = function a(e) {
      e.target.setCustomValidity('');
    };
  }
}

document.addEventListener('DOMContentLoaded', errorMessage);
entrarButton.addEventListener('click', alertButton);
