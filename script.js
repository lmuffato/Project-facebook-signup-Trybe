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
const genderField = document.querySelector('.gender-custom');
const custom = document.querySelector('#custom');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const newGender = document.createElement('input');
newGender.name = 'gender-custom';
newGender.placeholder = 'Gênero (opcional)';

function genderCustom() {
  custom.addEventListener('click', () => {
    genderField.appendChild(newGender);
  });
}

function hideCustomMale() {
  male.addEventListener('click', () => {
    genderField.removeChild(newGender);
  });
}

function hideCustomFemale() {
  female.addEventListener('click', () => {
    genderField.removeChild(newGender);
  });
}

// Requisito 18
const form = document.querySelector('.facebook-register');
const register = document.querySelector('#facebook-register');
const inputs = document.getElementsByTagName('input');

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
