function replaceRegisterFormWithGreetingMessage(inputs) {
  const messages = [
    `Olá, ${inputs.filter((e) => e.name === 'firstname')[0].value
    } ${inputs.filter((e) => e.name === 'lastname')[0].value}`,
    `${inputs.filter((e) => e.name === 'phone_email')[0].value}`,
    `${inputs.filter((e) => e.name === 'birthdate')[0].value}`,
    `${inputs.filter((e) => e.name === 'gender' && e.checked)[0].value}`];
  const rightContent = document.querySelector('.right-content');
  messages.forEach((m) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = m;
    rightContent.append(paragraph);
  });
  const toReplace = document.querySelector('.to-replace');
  toReplace.parentElement.removeChild(toReplace);
}

function alertUser() {
  const comunicate = document.createElement('p');
  comunicate.innerText = 'Campos inválidos';
  const forms = document.querySelector('.js-form');
  forms.appendChild(comunicate);
}

function isValidForm(inputs) {
  const isAnyRadioChecked = inputs.filter(
    (e) => e.type === 'radio',
  ).some((e) => e.checked);
  /* The line below works because [null, undefined, NaN, empty string, 0]
  all get coerced to false when you use the ! operator */
  const areAllNonRadioFilled = inputs.filter(
    (e) => e.type !== 'radio',
  ).every((e) => !!e.value);
  return (isAnyRadioChecked && areAllNonRadioFilled);
}

function validateForm(event) {
  event.preventDefault();
  const inputs = Array.from(document.querySelectorAll('.validation'));
  if (!isValidForm(inputs)) {
    alertUser();
  } else {
    replaceRegisterFormWithGreetingMessage(inputs);
  }
}

function customGenderBox() {
  const registerButton = document.querySelector('#facebook-register');
  if (registerButton.previousElementSibling.name !== 'gender-custom') {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero';
    newInput.className = 'validation';
    newInput.required = 'required';
    const forms = document.querySelector(
      'body > main > div.right-content > div > form',
    );
    forms.appendChild(newInput);
    forms.insertBefore(newInput, registerButton);
  }
}

function displayAlert(event) {
  event.preventDefault();
  const userEmailBox = document.getElementById('user-email-phone');
  alert(userEmailBox.value);
}

window.onload = function init() {
  document
    .getElementById('button-login')
    .addEventListener('click', displayAlert, false);
  const registerButton = document.querySelector('#facebook-register');
  registerButton.addEventListener('click', validateForm);
  const customRadio = document.querySelector('#custom');
  customRadio.addEventListener('click', customGenderBox);
};
