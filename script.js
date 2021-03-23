const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  const emailOuTelefone = document.getElementById('user-email-phone');
  alert(emailOuTelefone.value);
});

// Requisito 18 - Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido
const facebookForm = document.getElementById('facebook-form');
const span = document.createElement('span');
function validatingForm(event) {
  for (let key = 0; key < 7; key += 1) {
    if (facebookForm.elements[key].value === '') {
      event.preventDefault();
      span.innerHTML = 'Campos inválidos';
      facebookForm.appendChild(span);
      return true;
    }
  } return false;
}

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', validatingForm);

// Requisito 19
const genderField = document.getElementById('gender-custom');
function createField() {
  genderField.style.display = 'flex';
}

const custom = document.getElementById('custom');
custom.addEventListener('click', createField);

const male = document.getElementById('male');
const female = document.getElementById('female');

// Tive que incluir a função hideField, porque, ao clicar em qualquer um dos radio buttons, o display do
// gender-custom tava indo pra flex.

function hideField() {
  genderField.style.display = 'none';
}
male.addEventListener('click', hideField);
female.addEventListener('click', hideField);

/* Substitua o conteúdo do container com a classe right-content se o formulário
estiver completamente preenchido e validado */

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const celEmail = document.getElementById('celOuEmail');
const birth = document.getElementById('birthdate');

function gender() {
  if (female.checked) {
    return female.value;
  }
  if (male.checked) {
    return male.value;
  }
  if (custom.checked) {
    return custom.value;
  }
}

function validatingGender() {
  if (male.checked) {
    return true;
  }
  if (female.checked) {
    return true;
  }
  if (custom.checked) {
    return true;
  }
  return false;
}

function revalidatingForm() {
  if (firstName.value !== '' && lastName.value !== '') {
    return true;
  }
  if (celEmail.value !== '' && birth.value !== '') {
    return true;
  }
  return false;
}

function helloMessage(e) {
  const rightContent = document.querySelector('.right-content');
  e.preventDefault();
  if (revalidatingForm() && !validatingForm() && validatingGender()) {
    rightContent.innerHTML = '';
    rightContent.innerHTML = `<p>Olá, ${firstName.value} ${lastName.value}</p>`;
    rightContent.innerHTML += `<br><p>${celEmail.value}</p>`;
    rightContent.innerHTML += `<br><p>${birth.value}</p>`;
    rightContent.innerHTML += `<br><p>${gender()}`;
  }
}

btnSubmit.addEventListener('click', helloMessage);
