document.querySelector('#button-login').addEventListener('click', () => {
  const phoneOrEmail = document.querySelector('#user-email-phone').value;
  alert(phoneOrEmail);
});

const buttonCadastro = document.getElementById('facebook-register');
const newFields = document.querySelector('.fields');
const selectCustom = document.getElementById('custom');
const form = document.getElementById('collectName');
const divGender = document.getElementById('collect-gender');

function addAviso() {
  const element = document.createElement('p');
  element.innerText = 'Campos inválidos';
  element.id = 'aviso';
  form.appendChild(element);
}

function checkFields() {
  const arrayValues = [newFields[0].value, newFields[1].value,
    newFields[2].value, newFields[4].value, newFields[8].value];
  const aviso = document.getElementById('aviso');
  if (aviso !== null) {
    aviso.remove();
  }
  for (let index = 0; index < arrayValues.length; index += 1) {
    if (arrayValues[index] === '') {
      addAviso();
      return;
    }
  }
}

function createField() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  divGender.appendChild(newInput);
}

window.onload = function init() {
  buttonCadastro.addEventListener('click', checkFields);
  selectCustom.addEventListener('click', createField);
};
