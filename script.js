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
    if (personalizado.checked) {
      displayInputCSS.style.display = 'block';
    } else {
      displayInputCSS.style.display = 'none';
    }
  }
}

const radiosDiv = document.querySelector('#gender-options');
radiosDiv.addEventListener('click', displayInput);
const errorMsg = document.getElementById('errorMensage');
const errorTxt = 'Campos inválidos';

function checkGenderRadios() {
  const gender1 = document.querySelector('#female');
  const gender2 = document.querySelector('#male');
  const genderCustom = document.querySelector('#custom');
  if (gender1.checked || gender2.checked || genderCustom.checked) {
    errorMsg.innerText = '';
  } else {
    errorMsg.innerText = errorTxt;
  }
}

function newRightContent() {
  const rightCont = document.querySelector('.right-content');
  const nameIs = document.querySelector('#name');
  const lastName = document.querySelector('#lastName');
  const phoneOrMail = document.querySelector('#phoneOrMail');
  const birthDay = document.querySelector('#birth');
  const gender = document.querySelector('input[type="radio"]:checked');
  rightCont.innerHTML = (
    `Olá, ${nameIs.value} ${lastName.value}. 
    Seu e-mail/telefone é ${phoneOrMail.value}. 
    Sua data de Nascimento é ${birthDay.value}. 
    Seu gênero é ${gender.value}.`
  );
}

const infoForm = document.querySelectorAll('.inputs');
let invalidItens = [];

function checkForms() {
  for (let i = 0; i < infoForm.length; i += 1) {
    if (infoForm[i].value === '') {
      invalidItens.push([i]);
    }
  }
  if (invalidItens.length !== 0) {
    errorMsg.innerText = errorTxt;
  }
}

function finishThis(event) {
  event.preventDefault();
  checkGenderRadios();
  checkForms();
  if (invalidItens.length !== 0) {
    errorMsg.innerText = errorTxt;
  } else { newRightContent(); }
  invalidItens = [];
}

const register = document.getElementById('facebook-register');
register.addEventListener('click', finishThis);
