// requisito 7
const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);

// requisito 18 validar se todos os campos foram preenchidos
function validateInputText() {
  const inputText = document.querySelectorAll('.input-text');
  let validate = 0;

  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      validate += 1;
    }
  }
  console.log(validate);
  return validate;
}

function validateInputRadio() {
  const inputRadio = document.querySelectorAll('.input-radio');
  let validate = 1;

  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked === true) {
      validate = 0;
    }
  }
  console.log(validate);
  return validate;
}

const message = document.createElement('span');
const div = document.querySelector('#error-message');
div.appendChild(message);

function validateInputs(event) {
  event.preventDefault();
  const validateAll = validateInputText() + validateInputRadio();

  if (validateAll >= 1) {
    message.innerText = 'Campos inválidos';
  } else {
    message.innerText = '';
  }
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', validateInputs);

// requisito 19 adicionar campo personalizado
const pers = document.getElementById('personalizado');
const fem = document.getElementById('feminino');
const mas = document.getElementById('masculino');

function check() {
  const containerGender = document.getElementById('gender-container');
  console.log(pers.checked);

  if (pers.checked) {
    containerGender.style.display = 'flex';
  } else {
    containerGender.style.display = 'none';
  }
}
pers.addEventListener('click', check);
fem.addEventListener('click', check);
mas.addEventListener('click', check);
