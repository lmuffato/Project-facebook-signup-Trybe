const confirmButton = document.getElementById('facebook-register');
const inputNames = document.getElementsByClassName('input-fullname');
const inputCelEmail = document.getElementsByClassName('input-form');
const inputRadioButtons = document.querySelectorAll('.input-radios input');
const alertButton = document.getElementById('button-login');
const inputBday = document.querySelectorAll('#input-birthdate');
const invalidP = document.getElementById('invalid-field');
const femInput = document.getElementById('input-fem');
const mascInput = document.getElementById('input-masc');
const personal = document.getElementById('personal-field');
const spread = [...document.querySelectorAll('#all-radios input')];

function verify(elementsArray) {
  let showAlert = false;
  for (let index = 0; index < elementsArray.length; index += 1) {
    if (!elementsArray[index].value) {
      showAlert = true;
    }
  }
  return showAlert;
}

function radioVerify(elementsRadio) {
  let radioValue = true;
  for (let index = 0; index < inputRadioButtons.length; index += 1) {
    if (elementsRadio[index].checked) {
      radioValue = false;
    }
  }
  return radioValue;
}

const personalRadioButton = document.getElementById('input-pers');

function personalField() {
  let breakPoint = false;
  personalRadioButton.addEventListener('click', (event) => {
    if (event.target.id === personalRadioButton.id && !breakPoint) {
      breakPoint = true;
      const pField = document.createElement('input');
      pField.placeholder = 'Gênero (opcional)';
      pField.name = 'gender-custom';
      pField.id = 'pfield-size';
      personal.appendChild(pField);
    } else if (event.target.id !== personalRadioButton.id) {
      breakPoint = false;
    }
  });
}
personalField();

function deleteTextarea() {
  const pField = document.getElementById('pfield-size');
  if (pField) {
    personal.removeChild(pField);
    personalField();
  }
}

femInput.addEventListener('click', deleteTextarea);
mascInput.addEventListener('click', deleteTextarea);

confirmButton.addEventListener('click', (event) => {
  event.preventDefault();
  const rightContent = document.querySelector('.right-content');
  if (
    verify(inputNames)
    || verify(inputCelEmail)
    || radioVerify(inputRadioButtons)
    || verify(inputBday)
  ) {
    invalidP.innerText = 'Campos inválidos';
  } else {
    rightContent.innerText = `Olá, ${inputNames[0].value} ${inputNames[1].value}
    ${inputCelEmail[0].value}
    ${inputBday[0].value}
    ${spread.filter((x) => x.checked)[0].value}`;
  }
});

alertButton.addEventListener('click', () => {
  const loginValue = document.getElementById('user-email-phone').value;
  alert(loginValue);
});
