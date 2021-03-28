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
