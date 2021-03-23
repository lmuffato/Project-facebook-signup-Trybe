const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const slctInput = document.querySelectorAll('.main-content input');

function alertInput() {
  alert(selectInput.value);
}

function checkInputs() {
  for (let index = 0; index < slctInput.length; index += 1) {
    const element = slctInput[index];
    if (element.value === '') {
      alert('Campos inválidos');
    }
  }
}

selectButton.addEventListener('click', alertInput);
sendForm.addEventListener('click', checkInputs);
