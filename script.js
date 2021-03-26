/* function validateForm() {
  let somaValidacao = 0;
  const inputValidation = document.querySelectorAll('.validation');
  for (let input = 0; input < inputValidation.length; input += 1) {
    if (inputValidation[input].value === '' && registerButton.nextElementSibling === null) { // What this second part in the checking does?
      const comunicate = document.createElement('p');
      comunicate.innerText = 'Campos inválidos';
      const forms = document.querySelector('body > main > div.right-content > div > form');
      forms.appendChild(comunicate);
      break;
    } else if (inputValidation[input].type === 'radio') { // if it is a type='radio' doesn't it matches the first condition?
      if (inputValidation[input].checked === true) {
        somaValidacao += 1;
      } else if (input === inputValidation.length - 1 // I don't understand this if here
        && registerButton.nextElementSibling === null) {
        const comunicate = document.createElement('p');
        comunicate.innerText = 'Campos inválidos';
        const forms = document.querySelector('body > main > div.right-content > div > form');
        forms.appendChild(comunicate);
      }
    } else { // I'm not sure what behaviors this else captures
      somaValidacao += 1;
    }
  }
  if (somaValidacao === inputValidation.length - 2) { // Why 2? Is because we have a radio with 3 options? (So 2 of them are unchosen?)
    const toReplace = document.querySelector('body > main > div.right-content > div');
    const rightContent = document.querySelector('body > main > div.right-content');
    const textName = document.createElement('p');
    textName.innerText = `Olá, ${inputValidation[0].value} ${inputValidation[1].value}`;
    rightContent.append(textName);
    const textEmail = document.createElement('p');
    textEmail.innerText = inputValidation[2].value;
    rightContent.append(textEmail);
    const textDate = document.createElement('p');
    textDate.innerText = inputValidation[7].value;
    rightContent.append(textDate);
    for (let input = 4; input <= 6; input += 1) {
      if (inputValidation[input].checked) {
        const textGender = document.createElement('p');
        textGender.innerText = inputValidation[input].value;
        rightContent.append(textGender);
      }
    }
    toReplace.parentElement.removeChild(toReplace);
  }
} */

function replaceRegisterFormWithGreetingMessage(inputs) {
  const rightContent = document.querySelector('.right-content');
  const greeting = document.createElement('p');
  greeting.innerText = `Olá, 
    ${inputs.filter((e) => e.name === 'firstname')[0].value} 
    ${inputs.filter((e) => e.name === 'lastname')[0].value}
    ${inputs.filter((e) => e.name === 'phone_email')[0].value}
    ${inputs.filter((e) => e.name === 'birthdate')[0].value}
    ${inputs.filter((e) => e.name === 'gender' && e.checked)[0].value}`;
  rightContent.append(greeting);
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

function validateFormR(event) {
  event.preventDefault();
  const inputs = Array.from(document.querySelectorAll('.validation'));
  if (!isValidForm(inputs)) {
    alertUser();
  } else {
    replaceRegisterFormWithGreetingMessage(inputs);
  }
}

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', validateFormR);

function customGenderBox() {
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

const customRadio = document.querySelector('#custom');
customRadio.addEventListener('click', customGenderBox);

function displayAlert(event) {
  event.preventDefault();
  const userEmailBox = document.getElementById('user-email-phone');
  alert(userEmailBox.value);
}

window.onload = function init() {
  document
    .getElementById('button-login')
    .addEventListener('click', displayAlert, false);
};
