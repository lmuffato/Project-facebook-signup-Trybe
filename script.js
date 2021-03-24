const loginBtn = document.getElementById('button-login');
const userEmailInput = document.getElementById('user-email-phone');
const signUpBtn = document.getElementById('facebook-register');
const nameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const cellEmailInput = document.getElementById('phone-email');
const newPasswordInput = document.getElementById('new-password');
const birthDateInput = document.getElementById('birth-date');
const errorMessageDiv = document.getElementById('error-message');
const rightContent = document.querySelector('.right-content');

function emitAlert(e) {
  e.preventDefault();
  alert(userEmailInput.value);
}

loginBtn.addEventListener('click', emitAlert);

const otherInput = document.querySelector('#other');
const maleInput = document.querySelector('#male');
const femaleInput = document.querySelector('#female');
const customInput = document.querySelector('#customGender');

let inputOpen = false;

function ShowInput() {
  customInput.style.display = 'block';
  inputOpen = true;
}

function HideInput() {
  if (inputOpen === true) {
    customInput.style.display = 'none';
    inputOpen = false;
  }
}

function checkNamesEmail() {
  if (!nameInput.value || !lastNameInput.value || !cellEmailInput.value) {
    return false;
  }

  return true;
}

function checkPassWordBirth() {
  if (!newPasswordInput.value || !birthDateInput.value) {
    return false;
  }

  return true;
}

// Consultado em 'How can I check whether a radio button is selected with JavaScript?'
// https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript
function checkRadio() {
  if (maleInput.checked || femaleInput.checked || otherInput.checked) {
    return true;
  }

  return false;
}

function selectedRadio() {
  if (maleInput.checked) return maleInput.value;
  if (femaleInput.checked) return femaleInput.value;
  if (otherInput.checked) return otherInput.value;
  return false;
}

function accountCreated() {
  const newRightContent = `
  Olá, ${nameInput.value} ${lastNameInput.value}
  Seu e-mail/telefone: ${cellEmailInput.value}
  Data de nascimento: ${birthDateInput.value}
  Gênero: ${selectedRadio()}
  `;
  rightContent.innerHTML = newRightContent;
}

function checkFields() {
  if (!checkNamesEmail() || !checkPassWordBirth() || !checkRadio()) {
    errorMessageDiv.classList.remove('hidden');
  } else {
    accountCreated();
  }
}

otherInput.addEventListener('click', ShowInput);
maleInput.addEventListener('click', HideInput);
femaleInput.addEventListener('click', HideInput);
signUpBtn.addEventListener('click', checkFields);

ShowInput();
HideInput();
