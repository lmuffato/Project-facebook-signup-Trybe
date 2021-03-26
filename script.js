function showAlert() {
  // event.preventDefault();
  const emailPhone = document.querySelector('#user-email-phone');

  alert(emailPhone.value);
}

function loginButton() {
  document.querySelector('#button-login').addEventListener('click', showAlert);
}

window.onload = () => {
  loginButton();
};

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', showMsg);

function validateFields() {
  const input = document.querySelectorAll('#form-main input');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value.length === 0) {
      return false;
    }
  }
  return true;
}

function showMsg() {
  if (!validateFields()) {
    const elementSpan = document.createElement('span');
    elementSpan.innerHTML = 'Campos inválidos';
    document.querySelector('#form-main').appendChild(elementSpan);
  }
}
