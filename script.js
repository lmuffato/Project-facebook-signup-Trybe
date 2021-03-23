function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

/* const fields = document.querySelectorAll('[required]');

console.log(fields);

function checkErrors(field) {
  let errorFound = false;
  for (const error in field.validity) {
    if (error !== 'customError' && field.validity[error]) {
      errorFound = true;
    }
  }
  return errorFound;
}

function checkField(event) {
  const field = event.target;
  const result = checkErrors(field);
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
}*/

function checkTextInputs() {
  const inputList = document.querySelectorAll('.input-text');
  let emptyField = false;
  for (let input in inputList) {
    if (input.value === '') {
      emptyField = true;
    }
  }
  return emptyField;
}

function checkRadioInputs() {
  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let input in inputsRadio) {
    if (input.checked) {
      count += 1;
    }
  }
  return count;
}

let messageShown = false;

function checkInputs() {
  if (checkTextInputs() === true || checkRadioInputs() === 0) {
    const message = document.createElement('p');
    document.querySelector('.main-form').appendChild(message);
    if (messageShown === false) {
      message.innerText = 'Campos inválidos';
      messageShown = true;
    }
  }
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', checkInputs); 

window.onload = function startSession() {
  activeAlert();
};
