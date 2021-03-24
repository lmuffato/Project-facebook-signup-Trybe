function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

function showCustom(value) {
  if (value === 'Personalizado') {
    document.getElementById('gender-custom-content').style.display = 'block';
  } else {
    document.getElementById('gender-custom-content').style.display = 'none';
  }
}

function clickGender() {
  const radioOptions = document.querySelectorAll('[name=gender]');
  console.log(radioOptions);
  Array.from(radioOptions).forEach((radio) => {
    radio.addEventListener('click', (event) => {
      showCustom(event.target.value);
    });
  });
}

const fields = document.querySelectorAll('[required]');

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
}

function checkTextInputs() {
  const inputList = document.querySelectorAll('.input-text');
  let emptyField = false;
  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].value === '') {
      emptyField = true;
    }
  }
  return emptyField;
}

function checkRadioInputs() {
  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    if (inputsRadio[index].checked) {
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
  clickGender();
};
