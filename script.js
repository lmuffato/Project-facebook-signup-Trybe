function alertLogin() {
  alert(document.querySelector('#user-email-phone').value);
}

const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', alertLogin);

const otherGender = document.querySelector('#other');
function genderCustomInput() {
  const otherRadio = document.querySelector('.input-gender-hidden');
  if (otherGender.checked) {
    otherRadio.style.display = 'unset';
  }
}
otherGender.addEventListener('click', genderCustomInput);

function radiosBtn() {
  const inputRadios = document.querySelectorAll('.radio-genders input');
  let checked;
  for (let index = 0; index < inputRadios.length; index += 1) {
    if (inputRadios[index].checked) {
      checked = inputRadios[index].value;
    }
  }
  return checked;
}

function checkInputs() {
  let checkInputsValue = false;
  const allInputs = document.querySelectorAll('.required');
  for (let index = 0; index < allInputs.length; index += 1) {
    if (allInputs[index].value === '' || radiosBtn() === undefined) {
      checkInputsValue = true;
    }
  }
  return checkInputsValue;
}

function welcomeGreetings() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerText = `
  Olá, ${document.querySelector('#first-name').value}
  ${document.querySelector('#last-name').value}
  ${document.querySelector('#phone-email-input').value}
  ${document.querySelector('#input-birthdate').value}
  ${radiosBtn()}`;
}

window.onload = () => {
  const registerBtn = document.querySelector('#facebook-register');
  const errorInput = document.querySelector('#errorInput');
  registerBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorInput.innerText = '';
    if (checkInputs()) {
      errorInput.innerText = 'Campos inválidos';
      errorInput.style.color = 'red';
    } else {
      welcomeGreetings();
    }
  });
};
