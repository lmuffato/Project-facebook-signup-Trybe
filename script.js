function validateForm() {
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
    } else {
      somaValidacao += 1;
    }
  }
  if (somaValidacao === inputValidation.length - 2) {
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
}

function validateFormR() {
  const inputs = Array.from(document.querySelectorAll('.validation'));
  const isAnyRadioChecked = inputs.filter(
    (e) => e.type === 'radio').some((e) => e.checked);
  // The line below works because [null, undefined, NaN, empty string, 0] all get coerced to false
  const areAllNonRadioFilled = inputs.filter(
    (e) => e.type !== 'radio').every((e) => !e.value);
  if (isAnyRadioChecked === false || areAllNonRadioFilled === false) {
    const comunicate = document.createElement('p');
    comunicate.innerText = 'Campos inválidos';
    const forms = document.querySelector('.js-form');
    forms.appendChild(comunicate);
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
