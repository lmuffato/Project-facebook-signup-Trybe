function showAlert() {
  const emailPhone = document.querySelector('#user-email-phone');

  alert(emailPhone.value);
}

function loginButton() {
  document.querySelector('#button-login').addEventListener('click', showAlert);
}

const registerButton = document.querySelector('#facebook-register');

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
    const spans = document.querySelectorAll('.check');
    for (let index = 0; index < spans.length; index += 1) {
      spans[index].classList.contains('check').remove();
    }
    const elementSpan = document.createElement('span');
    elementSpan.innerHTML = 'Campos inválidos';
    elementSpan.className = 'check';
    document.querySelector('#form-main').appendChild(elementSpan);
    return false;
  }
  return true;
}

function showInputCustom() {
  const radios = document.getElementsByName('gender');
  radios[2].addEventListener('click', () => {
    const createElementeInput = document.createElement('input');
    createElementeInput.setAttribute('name', 'gender-custom');
    createElementeInput.setAttribute('type', 'text');
    createElementeInput.setAttribute('placeholder', 'Gênero (opcional)');
    document.querySelector('#custom').appendChild(createElementeInput);
  });
}

showInputCustom();

function showValuesForm() {
  const formS = document.getElementById('form-main');
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (showMsg()) {
      const right = document.querySelector('.right-content');
      right.innerHTML = `Olá,${formS.firstname.value} 
      ${formS.lastname.value} 
      ${formS.phone_email.value} 
      ${formS.birthdate.value} 
      ${formS.gender.value}`;
    }
  });
}
showValuesForm();

window.onload = () => {
  loginButton();
};
