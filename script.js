function enterButton() {
  const emailOrCel = document.getElementById('user-email-phone').value;
  if (emailOrCel !== '') {
    alert(emailOrCel);
  }
}

const radio = document.getElementById('gender');
const customGenderId = 'custom-gender';

function customGender() {
  const newField = document.createElement('input');
  const hasField = document.getElementById(customGenderId);
  if (hasField === null) {
    newField.id = customGenderId;
    newField.name = 'gender-custom';
    newField.placeholder = 'Gênero (opcional)';
    radio.appendChild(newField);
  }
}

function removeCustomField() {
  const hasField = document.getElementById(customGenderId);
  if (hasField !== null) {
    radio.removeChild(hasField);
  }
}

const button = document.getElementById('button-login');
button.addEventListener('click', enterButton);

const personal = document.getElementById('personalizado');
personal.addEventListener('click', customGender);

const genderMale = document.getElementById('masculino');
genderMale.addEventListener('click', removeCustomField);

const genderFemale = document.getElementById('feminino');
genderFemale.addEventListener('click', removeCustomField);

// Requisito 18

// Recupera um nodelist com todos os inputs com o atributo required
const fields = document.querySelectorAll('[required]');

// Função para trocar a mensagem para "Campos Inválidos"
function customValidation(event) {
  const field = event.target;
  field.setCustomValidity('Campos inválidos');
}

// aplica a nova mensagem em todos os campos
function applyCustomValidation() {
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].addEventListener('invalid', customValidation);
  }
}

applyCustomValidation();
