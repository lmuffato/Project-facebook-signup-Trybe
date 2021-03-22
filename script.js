function buttonAlert() {
  event.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone-label');
  alert(emailInputElement.value);
}

function inputValidate() {
  const inputs = document.querySelectorAll('.main-content input');

  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      alert('Campos inválidos');
      return;
    }
  }
}

function showCustomGenderOptions(input) {
  const containerElement = document.getElementById('custom-gender-container');

  if (input.id === 'custom-gender' && input.checked) {
    containerElement.style.display = 'flex';
  } else {
    containerElement.style.display = 'none';
  }
}

window.onload = () => {
  const buttonLoginElement = document.getElementById('button-login');
  const buttonSubmitElement = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('#inputs-container input');

  buttonLoginElement.onclick = buttonAlert;
  buttonSubmitElement.onclick = inputValidate;

  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].onclick = () => showCustomGenderOptions(inputs[index]);
  }
};
