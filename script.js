// Requisito 7
function signAlert() {
  const button = document.querySelector('#button-login');
  const email = document.querySelector('#user-email-phone');
  console.log(email);
  button.addEventListener('click', () => {
    alert(email.value);
  });
}

// Requisito 19
const gender = document.querySelector('#gender-custom');
const custom = document.querySelector('#custom');
const male = document.querySelector('#male');
const female = document.querySelector('#female');

function genderCustom() {
  custom.addEventListener('click', () => {
    gender.style.display = 'flex';
  });
}

function hideCustomMale() {
  male.addEventListener('click', () => {
    gender.style.display = 'none';
  });
}

function hideCustomFemale() {
  female.addEventListener('click', () => {
    gender.style.display = 'none';
  });
}

hideCustomMale();
hideCustomFemale();
genderCustom();
signAlert();
