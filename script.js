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

function handleGenderSelected(event) {
  const target = event.target.value;
  if (target === 'Personalizado') {
    genderField.appendChild(newGender);
  } else {
    const customGenderInput = genderField.getElementsByTagName('input')[0];
    if (customGenderInput !== undefined) {
      customGenderInput.remove();
    }
  }
}

custom.addEventListener('click', handleGenderSelected);
male.addEventListener('click', handleGenderSelected);
female.addEventListener('click', handleGenderSelected);

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
const inputsText = document.getElementsByClassName('input-register');
const inputsGender = document.getElementById('genderOption')
  .getElementsByTagName('input');

function inputGenderValidate() {
  let inputGender = false;
  for (let index = 0; index < inputsGender.length; index += 1) {
    if (inputsGender[index].checked === true) {
      inputGender = true;
    }
  }
  return inputGender;
}

function inputTextValidate() {
  let inputText = true;
  for (let index = 0; index < inputsText.length; index += 1) {
    if (inputsText[index].value === '') {
      inputText = false;
    }
  }

  return inputText;
}

function inputValidate(event) {
  event.preventDefault();
  if (inputTextValidate() === false || inputGenderValidate() === false) {
    const errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Campos inválidos';
    form.appendChild(errorMsg);
  } else {
    saveData();
  }
}

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', inputValidate);

signAlert();
