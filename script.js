const buttonLogin = document.querySelector('#button-login');
const emailFone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  window.alert(emailFone.value);
});

const registerButton = document.querySelector('#facebook-register');
const inputsTextAndPassword = document.querySelectorAll('.input-text-password');
const inputsRadio = document.querySelectorAll('.input-radio');

const invalidMessage = document.querySelector('#form-conteiner');

function validateInputsTextPassword() {
  let validation = true;
  for (let index = 0; index < inputsTextAndPassword.length; index += 1) {
    if (inputsTextAndPassword[index].value === '') {
      validation = false;
      break;
    }
  }
  return validation;
}

function validateInputsRadio() {
  let validation = true;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    if (inputsRadio[index].checked === false) {
      validation = false;
    } else {
      validation = true;
      break;
    }
  }
  return validation;
}

function validateForm(e) {
  e.preventDefault();
  const inputsValidation = validateInputsTextPassword() + validateInputsRadio();
  if (inputsValidation <= 1) {
    const invalidText = document.createElement('p');
    invalidMessage.appendChild(invalidText);
    invalidText.innerText = 'Campos Inválidos';
  }
}

registerButton.addEventListener('click', validateForm);

function criarInput(chek) {
  const divConteiner = document.getElementById('radio-conteiner');
  if (chek.target.checked === true
    && document.getElementsByClassName('inputDinamico').length === 0) {
    const criarIn = document.createElement('input');
    criarIn.setAttribute('name', 'gender-custom');
    criarIn.setAttribute('placeholder', 'Gênero (opcional)');
    criarIn.classList.add('inputDinamico');
    divConteiner.appendChild(criarIn);
  }
}
const btAdicionar = document.getElementById('personalizar');
btAdicionar.addEventListener('click', function(e) { criarInput(e) } );
const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', (e) => { e.preventDefault() } );
