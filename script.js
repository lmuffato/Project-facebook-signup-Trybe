function buttonAlert() {
  event.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone-label');
  alert(emailInputElement.value);
}

function inputValidate() {
  const inputs = document.querySelectorAll('.main-content input');

  for(let index = 0; index < inputs.length; index += 1) {
    if(inputs[index].value === '') {
      alert('Campos inválidos');
      return;
    }
  }
}

window.onload = () => {
  const buttonLoginElement = document.getElementById('button-login');
  const buttonSubmitElement = document.getElementById('facebook-register');

  buttonLoginElement.onclick = buttonAlert;
  buttonSubmitElement.onclick = inputValidate;
};
