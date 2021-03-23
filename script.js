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
