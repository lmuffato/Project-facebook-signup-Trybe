const confirmButton = document.getElementById('facebook-register');
const inputNames = document.getElementsByClassName('input-fullname');
const inputCelEmail = document.getElementsByClassName('input-form');
const inputRadioButtons = document.querySelectorAll('.input-radios input');
const alertButton = document.getElementById('button-login');
const inputBday = document.querySelectorAll('#input-birthdate');
const invalidP = document.getElementById('invalid-field');
const personalRadioButton = document.getElementById('input-pers');
const femInput = document.getElementById('input-fem');
const mascInput = document.getElementById('input-masc');
const personal = document.getElementById('personal-field');

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

function personalField() {
  const personal = document.getElementById('personal-field');
  personalRadioButton.addEventListener('click', () => {
    const pField = document.getElementById('pfield-size');
    if (!pField) {
      const pField = document.createElement('textarea');
      pField.placeholder = 'Gênero (opcional)';
      pField.name = 'gender-custom';
      pField.id = 'pfield-size';
      personal.appendChild(pField);
    }
  });
}
personalField();

function deleteTextarea() {
  const pField = document.getElementById('pfield-size');
  if (pField){
    personal.removeChild(pField);
  }
}

femInput.addEventListener('click', deleteTextarea);
mascInput.addEventListener('click', deleteTextarea);

confirmButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    verify(inputNames)
    || verify(inputCelEmail)
    || radioVerify(inputRadioButtons)
    || verify(inputBday)
  ) {
   invalidP.innerText = 'Campos inválidos';
  }
});

alertButton.addEventListener('click', () => {
  const loginValue = document.getElementById('user-email-phone').value;
  alert(loginValue);
});
