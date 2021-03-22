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

// Alerta botão entrar
const btn = document.querySelector('#button-login');

function alertLogin() {
  const emailTel = document.querySelector('#user-email-phone').value;

  alert(emailTel);
}

btn.addEventListener('click', alertLogin);

// Criar campo personalizado
const genderForm = document.querySelector('#gender-form');

function genderCustom(event) {
  const createInput = document.createElement('input');
  createInput.setAttribute('name', 'gender-custom');
  createInput.setAttribute('placeholder', 'Gênero (opcional)');

  genderForm.appendChild(createInput);
}

const btnCustom = document.querySelector('#custom');

btnCustom.addEventListener('change', genderCustom);
