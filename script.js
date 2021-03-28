const loginBut = document.getElementById('button-login');
const nameValue = document.getElementById('user-email-phone');

function alertBut() {
  alert(nameValue.value);
}

loginBut.addEventListener('click', alertBut);

// Requisito cumprido com a ajuda do fantástico instrutor John, no plantão DOMINGO!!!

function displayInput() {
  const radios = document.querySelectorAll('.select');
  const personalizado = document.querySelector('#custom');
  const displayInputCSS = document.querySelector('#customInput');
  for (let index = 0; index < radios.length; index += 1) {
    if (personalizado.checked === true) {
      displayInputCSS.style.display = 'block';
    } else {
      displayInputCSS.style.display = 'none';
    }
  }
}

const radiosDiv = document.querySelector('#gender-options');
radiosDiv.addEventListener('click', displayInput);

const nameIs = document.querySelector('#name').value;
const lastName = document.querySelector('#lastName').value;
const phoneOrMail = document.querySelector('#phoneOrMail').value;
const password = document.querySelector('#password').value;
const birthDay = document.querySelector('#birth').value;
const gender = document.querySelector('input[type="radio"]:checked').value;
const errorMensage = document.querySelector('#errorMensage');
const rightCont = document.querySelector('.right-content');

function checkNull1() {
  if (nameIs === null
    || lastName === null
    || phoneOrMail === null) {
    errorMensage.innerText = 'Campos inválidos';
  }
}

function checkNull2() {
  if (password === null
    || birthDay === null
    || gender === null) {
    errorMensage.innerText = 'Campos inválidos';
  }
}

function newRightContent() {
  rightCont.innerHTML = (
    `Olá, ${nameIs} ${lastName}.
    Seu e-mail/telefone é ${phoneOrMail}
    Sua data de Nascimento é ${birthDay}
    Seu gênero é ${gender}.`
  );
}

function replaceRight() {
  checkNull1();
  checkNull2();
  rightCont.innerHTML = '';
  newRightContent();
}

const sendForm = document.querySelector('#facebook-register');

sendForm.addEventListener('click', replaceRight);
