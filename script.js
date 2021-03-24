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
function genderCustom() {
  const custom = document.querySelector('#custom');
  custom.addEventListener('click', () => {
    gender.style.display = 'flex';
  });
}

function hideCustomMale() {
  const male = document.querySelector('#male');
  male.addEventListener('click', () => {
    gender.style.display = 'none';
  });
}

function hideCustomFemale() {
  const female = document.querySelector('#female');
  female.addEventListener('click', () => {
    gender.style.display = 'none';
  });
}

hideCustomMale();
hideCustomFemale();
genderCustom();
signAlert();
