const loginBtn = document.getElementById('button-login');
const userEmailInput = document.getElementById('user-email-phone');

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

otherInput.addEventListener('click', ShowInput);
maleInput.addEventListener('click', HideInput);
femaleInput.addEventListener('click', HideInput);

ShowInput();
HideInput();
