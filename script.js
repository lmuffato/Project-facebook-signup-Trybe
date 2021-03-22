// Validar formulário

const formValidate = document.querySelectorAll('.form-validate');
const accForm = document.querySelector('#form-create-account');
const createParagraph = document.createElement('p');

function validateForm(event) {
  let testIfTrue = 0;
  for (let formsItems = 0; formsItems < formValidate.length; formsItems += 1) {
    if (formValidate[formsItems].value.length < 2) {
      testIfTrue += 1;
    }
  }
  if (testIfTrue > 0) {
    createParagraph.innerText = 'Campos inválidos';
    accForm.appendChild(createParagraph);
    event.preventDefault();
  }
}

const btnRegister = document.querySelector('#facebook-register');

btnRegister.addEventListener('click', validateForm);
