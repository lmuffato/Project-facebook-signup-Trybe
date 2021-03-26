function buttonLogin() {
  const takeButton = document.querySelector('#button-login');
  takeButton.addEventListener('click', () => {
    const takeLogin = document.querySelector('input#user-email-phone').value;
    alert(takeLogin);
  });
}
buttonLogin();

function confereRadioChecked() {
  const takeRadio = document.querySelectorAll('input');
  let conta = 0;
  for (let i = 0; i < takeRadio.length; i += 1) {
    if (takeRadio[i].type === 'radio' && takeRadio[i].checked === true) {
      conta += 1;
    }
  }
  return conta;
}

function returnText() {
  const entradaDeDados = document.querySelectorAll('input');
  const createInnerText = document.createElement('span');
  for (let index = 2; index < entradaDeDados.length - 1; index += 1) {
    if (entradaDeDados[index].value === '' || confereRadioChecked() === 0) {
      const takeForm = document.querySelectorAll('form')[1];
      createInnerText.innerText = 'Campos inválidos';
      takeForm.appendChild(createInnerText);
      break;
    }
  }
}

function addInput() {
  const createInput = document.createElement('input');
  const takeButtonRegister = document.getElementById('facebook-register');
  const createFather = takeButtonRegister.parentNode;
  createInput.id = 'input-gender';
  createInput.setAttribute('name', 'gender-custom');
  createInput.setAttribute('placeholder', 'Gênero (opcional)"');
  createFather.insertBefore(createInput, takeButtonRegister);
}
addInput();

function checkRadioOption() {
  const takeDivGender = document.getElementById('label-gender-first');
  takeDivGender.addEventListener('click', () => {
    const takeInputOther = document.getElementById('personalizado');
    const takeInput = document.getElementById('input-gender');
    if (takeInputOther.checked) {
      takeInput.style.display = 'block';
    } else {
      takeInput.style.display = 'none';
    }
  });
}
checkRadioOption();

const male = document.getElementById('masculino');
const female = document.getElementById('feminino');
const custom = document.getElementById('personalizado');
function checkGender() {
  if (male.checked) {
    return male.value;
  }
  if (female.checked) {
    return female.value;
  }
  if (custom) {
    return custom.value;
  }
}
checkGender();

const name = document.querySelector('.first-name');
const last = document.querySelector('.last-name');
const cel = document.querySelector('.phone-email');
const date = document.querySelector('.birthdate');
function newMessage() {
  const rightContent = document.querySelector('.right-content');
  console.log('começou if');
  rightContent.innerHTML = '';
  rightContent.innerHTML = `<p>Olá, ${name.value} ${last.value}</p>`;
  rightContent.innerHTML += `<br><p>${cel.value}</p>`;
  rightContent.innerHTML += `<br><p>${date.value}</p>`;
  rightContent.innerHTML += `<br><p>${checkGender()}</p>`;
}

function checkEmpty() {
  const right = document.querySelectorAll('input');
  let empty = 0;
  console.log(empty);
  for (let i = 2; i < right.length - 1; i += 1) {
    if (right[i].value === '' && right[i].type !== 'radio') {
      console.log(right[i]);
      empty += 1;
    }
  }
  console.log(empty);
  return empty;
}

function validacao() {
  const takeSpan = document.querySelectorAll('span');
  if (takeSpan.length > 0) {
    // e.preventDefault();
    return false;
  }
  returnText();
}

function lastValidation() {
  const takeButtonSubmit = document.querySelector('#facebook-register');
  takeButtonSubmit.addEventListener('click', () => {
    if (checkEmpty() === 5 && confereRadioChecked() === 0) {
      validacao();
      return false;
    }
    if (checkEmpty() === 0 && confereRadioChecked() > 0) {
      newMessage();
    }
  });
}
lastValidation();
