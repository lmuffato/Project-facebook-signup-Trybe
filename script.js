document.querySelector('#button-login').addEventListener('click', () => {
  const phoneOrEmail = document.querySelector('#user-email-phone').value;
  alert(phoneOrEmail);
});

const buttonCadastro = document.getElementById('facebook-register');
const newFields = document.querySelector('.fields');
const selectCustom = document.getElementById('custom');
const form = document.getElementById('collectName');
const divGender = document.getElementById('collect-gender');
const rightContent = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');
const buttonFemale = document.getElementById('female');
const buttonMale = document.getElementById('male');

function addAviso() {
  const element = document.createElement('p');
  element.innerText = 'Campos inválidos';
  element.id = 'aviso';
  form.appendChild(element);
}

function checkButtonSellect() {
  if (buttonFemale.checked) {
    return 'Feminino';
  } if (buttonMale.checked) {
    return 'Masculino';
  }
  return 'Personalizado';
}

function replaceRightContent() {
  rightContent.remove();
  const newDiv = document.createElement('div');
  newDiv.className = 'right-content';
  const finalText = document.createElement('p');
  finalText.innerText = `Olá, ${newFields[0].value} ${newFields[1].value}`;
  const emailAndBirthdate = document.createElement('p');
  emailAndBirthdate.innerText = `Seu email ou  celular:
  ${newFields[2].value}; Sua data de nascimento:${newFields[4].value}.`;
  const sex = document.createElement('p');
  sex.innerText = `Sexo selecionado: ${checkButtonSellect()}`;
  newDiv.appendChild(finalText);
  newDiv.appendChild(emailAndBirthdate);
  newDiv.appendChild(sex);
  mainContent.appendChild(newDiv);
}

function checkFields() {
  const arrayValues = [newFields[0].value, newFields[1].value,
    newFields[2].value, newFields[3].value, newFields[4].value];
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
  replaceRightContent();
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
