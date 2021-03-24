const loginBtn = document.getElementById('button-login');
const userEmailInput = document.getElementById('user-email-phone');
const signInBtn = document.getElementById('facebook-register');
const nameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const cellEmailInput = document.getElementById('phone-email');
const newPasswordInput = document.getElementById('new-password');
const birthDateInput = document.getElementById('birth-date');
const errorMessageDiv = document.getElementById('error-message');

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

function checkFields() {
  if (!checkNamesEmail() || !checkPassWordBirth() || !checkRadio()) {
    errorMessageDiv.classList.remove('hidden');
  }
}

otherInput.addEventListener('click', ShowInput);
maleInput.addEventListener('click', HideInput);
femaleInput.addEventListener('click', HideInput);
signInBtn.addEventListener('click', checkFields);

ShowInput();
HideInput();
