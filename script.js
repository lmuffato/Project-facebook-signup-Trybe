const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');

function alertInput() {
  alert(selectInput.value);
}

selectButton.addEventListener('click', alertInput);
