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
  const takeInputRadio = document.getElementById('label-gender');
  const createInput = document.createElement('input');
  createInput.id = 'input-gender';
  createInput.setAttribute('name', 'gender-custom');
  createInput.setAttribute('placeholder', 'Gênero (opcional)"');
  takeInputRadio.appendChild(createInput);
}
addInput();

function checkRadioOption() {
  const takeDivGender = document.getElementById('label-gender');
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
  const takeButtonSubmit = document.querySelector('#facebook-register');
  takeButtonSubmit.addEventListener('click', () => {
    console.log('começou if');
    rightContent.innerHTML = '';
    rightContent.innerHTML = `<p>Olá, ${name.value} ${last.value}</p>`;
    rightContent.innerHTML += `<br><p>${cel.value}</p>`;
    rightContent.innerHTML += `<br><p>${date.value}</p>`;
    rightContent.innerHTML += `<br><p>${checkGender()}</p>`;
  });
}

function checkEmpty() {
  const takeelmentsForm = document.querySelectorAll('input');
  let v = 0;
  for (let i = 2; i < takeelmentsForm.length - 1; i += 1) {
    if (confereRadioChecked() > 0 && takeelmentsForm[i].value === '') {
      console.log(confereRadioChecked());
      console.log(takeelmentsForm[i].value);
      v += 1;
      console('v = '+v);
    }
  }
  return v;
}

function validacao() {
  const takeButton = document.querySelector('#facebook-register');
  takeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const takeSpan = document.querySelectorAll('span');
    if (takeSpan.length > 0) {
      return false;
    }
    if (checkEmpty() === 0) {
      newMessage();
    }
    returnText();
  });
}
validacao();
