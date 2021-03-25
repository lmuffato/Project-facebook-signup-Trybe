const getButtonEntrar = document.querySelector('#button-login');
const fields = document.querySelectorAll('[required]');
const getRadioPerson = document.querySelector('#person');

function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}
function customValidation() {
  const divInvalid = document.querySelector('#invalid-input');
  const insertText = document.createElement('p');
  if (document.querySelectorAll('.div-invalida').length === 0) {
    insertText.innerText = 'Campos inválidos';
    divInvalid.appendChild(insertText);
    insertText.classList.add('div-invalida');
  }
}
getButtonEntrar.addEventListener('click', spamAlert);

for (let i = 0; i < fields.length; i += 1) {
  fields[i].addEventListener('invalid', customValidation);
}

function createGenderCustom() {
  const divPersonGender = document.querySelector('#person-gender');
  const newText = document.createElement('input');
  // const getInputExist = document.querySelector('.input-exist');
  if (document.querySelectorAll('.input-exist').length === 0) {
    newText.type = 'text';
    newText.name = 'gender-custom';
    newText.placeholder = 'Gênero (opcional)';
    newText.classList.add('input-exist');
    divPersonGender.appendChild(newText);
  }
}

getRadioPerson.addEventListener('click', createGenderCustom);

function createTextWelcome() {
  const getRightContent = document.querySelector('.right-content');
  const listInputs = document.getElementsByTagName('input');
  const valueGender0 = document.querySelector('input[name="gender"]:checked');
  const valueGender = valueGender0.value;
  const firstName = listInputs.namedItem('firstname').value;
  const lastName = listInputs.namedItem('lastname').value;
  const textInsert = `Olá, ${firstName} ${lastName}.
  `;
  const textInsert2 = `\n ${listInputs.namedItem('phone_email').value},
  ${listInputs.namedItem('birthdate').value},
  ${valueGender}`;
  const elementInsert = document.createElement('p');
  elementInsert.innerText = textInsert;
  elementInsert.innerText += textInsert2;
  while (getRightContent.lastChild) {
    getRightContent.removeChild(getRightContent.lastChild);
  }
  getRightContent.appendChild(elementInsert);
}

const idForm = document.querySelector('#form');
idForm.addEventListener('onsubmit', createTextWelcome);
