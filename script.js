function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

const fields = document.querySelectorAll('[required]');

console.log(fields);

function checkField(event) {
  const field = event.target;
  function checkErrors() {
    let errorFound = false;
    for (let error in field.validity) {
      if (error !== 'customError' && field.validity[error]) {
        errorFound = true;
      }
    }
    return errorFound;
  }
  const result = checkErrors();
  if (result) {
    field.setCustomValidity('Campo inválido');
  } else {
    field.setCustomValidity('');
  }
}

function validateInputs() {
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].addEventListener('invalid', checkField);
  }
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', validateInputs);

/* function checkTextInputs() {
  const inputs = document.querySelectorAll('.main-form input');
  let emptyField = false;
  for (let index = 0; index < inputs.length - 3; index += 1) {
    if (inputs[index].value === '') {
      emptyField = true;
    }
  }
  return emptyField;
}

function checkRadioInputs() {
  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let indexRadio = 0; indexRadio < inputsRadio.length; indexRadio += 1) {
    if (inputsRadio[indexRadio].checked) {
      count += 1;
    }
  }
  return count;
}

function checkInputs() {
  if (checkTextInputs() === true || checkRadioInputs() === 0) {
    alert('Campos inválidos');
  }
} */

window.onload = function startSession() {
  activeAlert();
};
