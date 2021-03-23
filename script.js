// requisito 7
const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);

// requisito 18 validar se todos os campos foram preenchidos
const submit = document.querySelector('#facebook-register');
const inputText = document.querySelectorAll('.input-text');
const inputRadio = document.querySelectorAll('.input-radio');

function validateInputs(event) {
  event.preventDefault();

  let validate = 0;

  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value = " ") {
    validate += 1;
    }
  }

  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked = false) {
    validate += 1;
    }
  }

  if (validate > 1) {
    const message = document.createElement('span');
    message.innerText = 'Campos inválidos';
    const div = document.querySelector('#error-message');
    div.appendChild(message);
  } 
}

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
