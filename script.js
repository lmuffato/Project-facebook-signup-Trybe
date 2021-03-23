const buttonLogin = document.querySelector('#button-login');
const genderCustom = document.getElementById('genderP');
const genderPesonalize = document.getElementById('gender-custom');
const maleButton = document.getElementById('genderM');
const feminButton = document.getElementById('genderF');

// REQUISITO 7//

function alertLogin() {
  buttonLogin.addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
}
alertLogin();

// REQUISITO 19 //

function openCustom() {
  genderPesonalize.removeAttribute('class');
}
genderCustom.addEventListener('click', openCustom);

function closeCustom() {
  genderPesonalize.className = 'gender-personalize';
}
maleButton.addEventListener('click', closeCustom);
feminButton.addEventListener('click', closeCustom);

function emailAlert() {
  const emailLoginValue = document.getElementById('user-email-phone').value;
  alert(emailLoginValue);
}
buttonLogin.addEventListener('click', emailAlert);
