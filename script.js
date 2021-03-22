const button = document.getElementById('button-login');
const textInput = document.getElementById('user-email-phone');

function clickButton() {
  const input = textInput.value;
  alert(input);
}

button.addEventListener('click', clickButton);
