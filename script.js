const confirmButton = document.getElementById('facebook-register');
const inputNames = document.getElementsByClassName('input-fullname');
const inputCelEmail = document.getElementsByClassName('input-form');
const inputRadioButtons = document.querySelectorAll('.input-radios input');
const alertButton = document.getElementById('button-login');
const inputBday = document.querySelectorAll('#input-birthdate');

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

confirmButton.addEventListener('click', () => {
  if (
    verify(inputNames)
    || verify(inputCelEmail)
    || radioVerify(inputRadioButtons)
    || verify(inputBday)
  ) {
    alert('Campos inválidos');
  }
});

alertButton.addEventListener('click', () => {
  const loginValue = document.getElementById('user-email-phone').value;
  alert(loginValue);
});
