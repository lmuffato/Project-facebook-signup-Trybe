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
