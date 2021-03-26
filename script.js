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

document.getElementById('facebook-register').addEventListener('click', saveData);

function saveData (event) {
//Como impedir que o formulário seja enviado automaticamente para que a função de inserir texto funcione https://www.w3schools.com/jsref/event_preventdefault.asp
event.preventDefault();
  const name = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const birthdate = document.getElementById('birthdate').value;
  const genders = document.getElementById('genderOption').getElementsByTagName('input');
  let genderSelected;
  for (index = 0; index < genders.length; index += 1) {
    if (genders[index].checked === true) {
      genderSelected = genders[index].value;
      break;
    }
  }

  const elements = document.getElementsByClassName('right-content');
  document.getElementsByClassName('right-content')[0].remove();
  welcomeUser(name, lastname, phoneEmail, birthdate, genderSelected);
} 

function welcomeUser (name, lastname, phoneEmail, birthdate, genderSelected) {
  const welcome = document.createElement('p');
  document.getElementsByClassName('main-content')[0].appendChild(welcome);
  welcome.appendChild(document.createTextNode('Olá,' + name + lastname + phoneEmail + birthdate + genderSelected));
} 
