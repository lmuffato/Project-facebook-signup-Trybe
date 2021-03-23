function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);
function criaCampoGenero(e) {
  const generoInputIdName = '#genero-input';
  if (e.target.id === 'female' || e.target.id === 'male') {
    if (document.querySelector(generoInputIdName)) {
      const input = document.querySelector(generoInputIdName);
      input.parentNode.removeChild(input);
    }
  } else if (!document.querySelector(generoInputIdName)) {
    const containerGenders = document.querySelector('.genders');
    const generoInput = document.createElement('input');
    generoInput.type = 'text';
    generoInput.id = 'genero-input';
    generoInput.name = 'gender-custom';
    generoInput.placeholder = 'Gênero(opcional)';
    containerGenders.insertBefore(generoInput, containerGenders.lastChild);
  }
}

const radios = document.querySelectorAll('.radio');

for (let index = 0; index < radios.length; index += 1) {
  radios[index].addEventListener('change', criaCampoGenero);
}

const alertText = document.createElement('p');
alertText.innerText = 'Campos inválidos';

const buttonRegister = document.querySelector('#facebook-register');

function validateForm() {
  const list = document.querySelectorAll('.right-content input');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].value === '') {
      return false;
    }
  }
  return true;
}

function renderRightContent() {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('phone_email').value;
  const birthDate = document.getElementById('birthdate').value;
  const radioButtons = document.querySelectorAll('.radio');
  let selectedRadio = '';
  for (let index = 0; index < radioButtons.length; index += 1) {
    if (radioButtons[index].checked === true) {
      selectedRadio = radioButtons[index].value;
    }
  }
  rightContent.innerHTML = '';
  rightContent.innerHTML = `<br>Olá, ${firstName} ${lastName},
  o email ou telefone cadastrado é: ${email} 
  e a data de nascimento é ${birthDate} 
  e o seu gênero é ${selectedRadio}.`;
}
function changeRightContent(evt) {
  if (!validateForm()) {
    document.querySelector('#formMain').appendChild(alertText);
  } else {
    renderRightContent();
  }
  evt.preventDefault();
}

buttonRegister.addEventListener('click', changeRightContent);
