const female = document.querySelector('#female');
const male = document.querySelector('#male');

document.querySelector('#button-login').addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

// requisito 18
function validateText() {
  const inputText = document.querySelectorAll('.input-text');
  let validate = 0;

  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      validate += 1;
    }
  }
  return validate;
}

const message = document.createElement('span');
const div = document.querySelector('#erro');
div.appendChild(message);

function validateInputs(event) {
  const validateAll = validateText();

  if (validateAll >= 1) {
    event.preventDefault();
    message.innerText = 'Campos inválidos';
  }
}

const btn = document.querySelector('#facebook-register');
btn.addEventListener('click', validateInputs);

// Requisito 19 - Cria um input de texto quando clica no radio button 'Personalizado'
document.querySelector('#custom').addEventListener('click', () => {
  const listRegister = document.querySelector('#container');
  if (listRegister.lastElementChild.type !== 'text') {
    const customInput = document.createElement('input');
    customInput.id = 'custom-box';
    customInput.type = 'text';
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    customInput.style.margin = '8px';
    listRegister.appendChild(customInput);
  }
});

// Requisito 19 - Remove o input de texto criado quando clica nos radio buttons 'Feminino' e 'Masculino'
[female, male].forEach((item) => {
  item.addEventListener('click', () => {
    const customBox = document.querySelector('#custom-box');
    if (customBox) {
      customBox.remove();
    }
  });
});
