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

// Requisito 20
function clearData() {
  const elements = document.getElementsByClassName('right-content');
  elements[0].innerHTML = '';
}

function welcomeUser(fullName, phoneEmail, birthdate, genderSelected) {
  const rightContent = document.getElementsByClassName('right-content')[0];
  const nameData = document.createElement('p');
  nameData.classList.add('name-data');
  nameData.appendChild(document.createTextNode(`Olá, ${fullName}`));
  const phoneEmailData = document.createElement('p');
  phoneEmailData.classList.add('phone-email-data');
  phoneEmailData.appendChild(document.createTextNode(phoneEmail));
  const birthdateData = document.createElement('p');
  birthdateData.classList.add('birth-data');
  birthdateData.appendChild(document.createTextNode(birthdate));
  const genderData = document.createElement('p');
  genderData.appendChild(document.createTextNode(genderSelected));
  genderData.classList.add('gender-data');
  rightContent.appendChild(nameData);
  rightContent.appendChild(phoneEmailData);
  rightContent.appendChild(birthdateData);
  rightContent.appendChild(genderData);
}

function saveData() {
  const name = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const birthdate = document.getElementById('birthdate').value;
  const genders = document.getElementById('genderOption')
    .getElementsByTagName('input');
  let genderSelected;
  for (let index = 0; index < genders.length; index += 1) {
    if (genders[index].checked === true) {
      genderSelected = genders[index].value;
      break;
    }
  }
  clearData();
  welcomeUser(`${name} ${lastname}`, phoneEmail, birthdate, genderSelected);
}

// Requisito 18
const form = document.querySelector('.facebook-register');
const register = document.querySelector('#facebook-register');
const inputs = document.getElementsByClassName('facebook-register')[0]
  .getElementsByTagName('input');

function inputValidate() {
  register.addEventListener('click', (event) => {
    // Como impedir que o formulário seja enviado automaticamente para que a função de inserir texto funcione https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        console.log(inputs[index]);
        const errorMsg = document.createElement('p');
        errorMsg.innerHTML = 'Campos inválidos';
        form.appendChild(errorMsg);
        return;
      }
    }
    saveData();
  });
}

inputValidate();
hideCustomMale();
hideCustomFemale();
genderCustom();
signAlert();
