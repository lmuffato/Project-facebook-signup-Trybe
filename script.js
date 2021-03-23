const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  const emailOuTelefone = document.getElementById('user-email-phone');
  alert(emailOuTelefone.value);
});

// Requisito 18 - Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido
const facebookForm = document.getElementById('facebook-form');
const span = document.createElement('span');
const elFacebookForms = facebookForm.elements; // Mudar aqui
function validatingForm(event) {
  for (let key = 0; key < elFacebookForms.length; key += 1) {
    if (elFacebookForms[key].value === '' && !elFacebookForms[8].value) {
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
const male = document.getElementById('male');
const female = document.getElementById('female');

function hideField() {
  genderField.style.display = 'none';
}
custom.addEventListener('click', createField);
male.addEventListener('click', hideField);
female.addEventListener('click', hideField);

/* Substitua o conteúdo do container com a classe right-content se o formulário
estiver completamente preenchido e validado */

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const celEmail = document.getElementById('celOuEmail');
const birth = document.getElementById('birthdate');

// Função que retorna os valores dos radio buttons, caso selecionados
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

/* function validatingGender() {
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
} */

// Função que revalida formulário
function revalidatingForm() {
  if (firstName.value !== '' && lastName.value !== '') {
    return true;
  }
  if (celEmail.value !== '' && birth.value !== '') {
    return true;
  }
  return false;
}

// Requisito 20 - Mensagem de Olá, John Doe no container right-content

function helloMessage() {
  const rightContent = document.querySelector('.right-content');
  if (revalidatingForm() && gender()) {
    rightContent.innerHTML = '';
    rightContent.innerHTML = `<p>Olá, ${firstName.value} ${lastName.value}</p>`;
    rightContent.innerHTML += `<br><p>${celEmail.value}</p>`;
    rightContent.innerHTML += `<br><p>${birth.value}</p>`;
    rightContent.innerHTML += `<br><p>${gender()}`;
  }
}
btnSubmit.addEventListener('click', helloMessage);
