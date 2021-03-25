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

// Requisito 18
const register = document.querySelector('#facebook-register');
const inputs = document.getElementsByTagName('input');
const form = document.querySelector('.facebook-register');

function inputValidate() {
  register.addEventListener('click', () => {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        const errorMsg = document.createElement('p');
        errorMsg.innerHTML = 'Campos inválidos';
        form.appendChild(errorMsg);
        break;
      }
    }
  });
}

inputValidate();
hideCustomMale();
hideCustomFemale();
genderCustom();
signAlert();
