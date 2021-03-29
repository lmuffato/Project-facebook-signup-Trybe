function showAlert() {
  const emailPhone = document.querySelector('#user-email-phone');

  alert(emailPhone.value);
}

function loginButton() {
  document.querySelector('#button-login').addEventListener('click', showAlert);
}

const registerButton = document.querySelector('#facebook-register');

function validateFields() {
  const form = document.querySelector('#form-main');
  let isValidate = true;

  document.querySelectorAll('#form-main input.required').forEach((element) => {
    if (!form[element.name].value) { isValidate = false; }
  });
  return isValidate;
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
    elementSpan.style.color = 'red';
    document.querySelector('#form-main').appendChild(elementSpan);
    return false;
  }
  return true;
}

function noCustomRadio(e) {
  const event = e.target;
  const customInput = document.querySelector('#custom');
  const currentSelected = document.querySelector('.selected');

  if (!event.classList.contains('selected') && currentSelected) {
    currentSelected.classList.remove('selected');
    customInput.style.display = 'none';
    return event.classList.add('selected');
  }
  return event.classList.add('selected');
}

function customRadio(e) {
  const event = e.target;
  const customInput = document.querySelector('#custom');
  const currentSelected = document.querySelector('.selected');

  if (!event.classList.contains('selected') && currentSelected) {
    currentSelected.classList.remove('selected');
    customInput.style.display = 'block';
    return event.classList.add('selected');
  }
  customInput.style.display = 'block';
  return event.classList.add('selected');
}

function showCustomInput() {
  const customButton = document.querySelector('#personalizado');
  const man = document.querySelector('#masculino');
  const woman = document.querySelector('#feminino');

  man.addEventListener('click', noCustomRadio);
  woman.addEventListener('click', noCustomRadio);
  customButton.addEventListener('click', customRadio);
}

function showValuesForm() {
  const formS = document.getElementById('form-main');
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (showMsg()) {
      const right = document.querySelector('.right-content');
      right.innerHTML = `Olá, ${formS.firstname.value}
      ${formS.lastname.value}
      ${formS.phone_email.value}
      ${formS.birthdate.value}
      ${formS.gender.value}`;
    }
  });
}

window.onload = () => {
  loginButton();
  showCustomInput();
  showValuesForm();
};
