const inputsValid = document.getElementsByClassName('inputs');
const divAlert = document.getElementById('divInvalid');
const createP = document.createElement('p');

function alertFunction() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
}

function alertButtonLogin() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', alertFunction);
}
alertButtonLogin();

function validateInputs(event) {
  for (let index = 0; index < inputsValid.length; index += 1) {
    if (inputsValid[index].value === '') {
      event.preventDefault();
      divAlert.appendChild(createP).innerText = 'Campos inválidos';
    }
    if (divAlert.children.length > 1) {
      divAlert.removeChild(createP);
    }
  }
}
function validateRadioButtons(event) {
  const inputsGenders = document.querySelectorAll('.inputsGender');
  let validationKey = false;
  for (let index = 0; index < inputsGenders.length; index += 1) {
    if (inputsGenders[index].checked === true) {
      validationKey = true;
    }
  }
  if (validationKey === false) {
    event.preventDefault();
    divAlert.appendChild(createP).innerText = 'Campos inválidos';
  }
  if (divAlert.children.length > 1) {
    divAlert.removeChild(createP);
  }
}
function submitButton() {
  const buttonSubmit = document.getElementById('facebook-register');
  buttonSubmit.addEventListener('click', validateInputs);
  buttonSubmit.addEventListener('click', validateRadioButtons);
}

submitButton();
