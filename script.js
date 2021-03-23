const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);

// requisito 18 validar se todos os campos foram preenchidos
const submit = document.querySelector('#facebook-register');
const inputForm = document.querySelectorAll('.input-form');

function validateInputs() {
  for (let index = 0; index < inputForm.length; index += 1) {
    if (inputForm[index].value === '') {
      alert('Campos inválidos');
    }
  }
}

submit.addEventListener('click', validateInputs);

// requisito 19 adicionar campo personalizado
const personalizado = document.querySelector('#personalizado');

function addInput() {
  const input = document.createElement('input');
  personalizado.appendChild(input);
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
}

personalizado.addEventListener('click', addInput);
