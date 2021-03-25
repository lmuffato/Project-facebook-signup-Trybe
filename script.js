const loginButton = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');
const personalizadoRadioButton = document.querySelector('#personalizado');
const rightContent = document.querySelector('.right-content');
const rightContentChilds = document.querySelectorAll('.right-content *');
const campoDeTextoPersonalizado = document.createElement('input');
const submitFormButton = document.querySelector('#facebook-register');
const criaContaForm = document.querySelector('.right-content form');
const radioButtons = document.querySelectorAll('[name="gender"]');
const inputBlock = document.querySelector('.right-content form .input-block');
const firstNameEl = document.querySelector('#first-name');
const emailPhone = document.getElementById('phone-email');
let isFieldsValid = false;

function exibirAlertaDeLogin() {
  window.alert(emailPhoneInput.value);
}

function adicionaCampoPersonalizado() {
  campoDeTextoPersonalizado.type = 'text';
  campoDeTextoPersonalizado.id = 'personalizado-input';
  campoDeTextoPersonalizado.name = 'gender-custom';
  campoDeTextoPersonalizado.placeholder = 'Gênero';
  criaContaForm.insertBefore(campoDeTextoPersonalizado, submitFormButton);
}

loginButton.addEventListener('click', exibirAlertaDeLogin);
personalizadoRadioButton.addEventListener('click', adicionaCampoPersonalizado);

function exibirAlertaDeInvalidez() {
  if (criaContaForm.childNodes.length < 18) {
    const alertaInvalido = document.createElement('p');
    alertaInvalido.className = 'alertInvalidFields';
    alertaInvalido.innerHTML = 'Campos inválidos';
    criaContaForm.insertBefore(alertaInvalido, inputBlock);
  }
}

function validaCampoNome() {
  if (firstNameEl.value.length < 3) {
    firstNameEl.focus();
    exibirAlertaDeInvalidez();
    isFieldsValid = false
  }

  return isFieldsValid;
}
function validaCampoSobrenome() {
  if (document.getElementById('last-name').value.length < 3) {
    document.getElementById('last-name').focus();
    exibirAlertaDeInvalidez();
    isFieldsValid = false;
  }
  return isFieldsValid;
}

function validaCampoSenha() {
  if (document.getElementById('password').value.length < 3) {
    document.getElementById('password').focus();
    exibirAlertaDeInvalidez();
    isFieldsValid = false;
  }
  return isFieldsValid;
}

function validaCampoDataNascimento() {
  if (document.getElementById('birthdate').value.length < 3) {
    document.getElementById('birthdate').focus();
    exibirAlertaDeInvalidez();
    isFieldsValid = false;
  }
  return isFieldsValid;
}
function validaCampoEmailOuCelular() {
  if (emailPhone.value.length < 3) {
    emailPhone.focus();
    exibirAlertaDeInvalidez();
    isFieldsValid = false;
  }
  return isFieldsValid;
}

function validaGenero() {
  let isButtonChecked = false;
  for (let index = 0; index < radioButtons.length; index += 1) {
    if (radioButtons[index].checked === true) isButtonChecked = true;
  }
  return isButtonChecked;
}

function handleFunctions() {
  validaCampoNome();
  validaCampoSenha();
  validaCampoSobrenome();
  validaCampoDataNascimento();
  validaCampoEmailOuCelular();
  validaGenero();
}

function criarElementosDaConclusao() {
  const name = firstNameEl.value;
  const lastName = document.getElementById('last-name').value;
  const conclusionHeader = document.createElement('h1');
  const fullName = `${name} ${lastName}`;
  conclusionHeader.innerHTML = `Olá, ${fullName}`;
  rightContent.appendChild(conclusionHeader);
}

function exibirConclusaoDeCadastro() {
  if (isFieldsValid && validaGenero()) {
    for (let index = 0; index < rightContentChilds.length; index += 1) {
      rightContentChilds[index].style.display = 'none';
    }
    criarElementosDaConclusao();
  }
}

function preventDefForm(event) {
  event.preventDefault();
}

submitFormButton.addEventListener('click', preventDefForm, false);
submitFormButton.addEventListener('click', handleFunctions);
submitFormButton.addEventListener('click', exibirConclusaoDeCadastro);
