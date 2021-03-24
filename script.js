const buttonLogin = document.querySelector('#button-login');
const emailFone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  window.alert(emailFone.value);
});

const registerButton = document.querySelector('#facebook-register');
const inputsTextAndPassword = document.querySelectorAll('.input-text-password');
const inputsRadio = document.querySelectorAll('.input-radio');

const invalidMessage = document.querySelector('#form-conteiner');

function validateInputsTextAndPassword() {
  let validation = true;
  for (let index = 0; index < inputsTextAndPassword.length; index +=1) {
    if (inputsTextAndPassword[index].value === '') {
      validation = false;   
    }
  }
  return validation;
}
console.log(validateInputsTextAndPassword())

function validateInputsRadio() {
  let validation = true;
  for (let index = 0; index < inputsRadio.length; index +=1) {
    if (inputsRadio[index].checked === false) {
      validation = false;   
    } else {
      validation = true;
    }
  }
  return validation;
}
console.log(validateInputsRadio())
console.log(validateInputsTextAndPassword() + validateInputsRadio())

function validateForm(e) {
  e.preventDeflaut();
  const inputsValidation = validateInputsTextAndPassword() + validateInputsRadio();
  if (inputsValidation <= 1) {
    let invalidText = document.createElement('p');
    invalidMessage.appendChild(invalidText);
    invalidText.innerText = "Campos Inválidos";
  }
}
console.log(validateForm())

registerButton.addEventListener('click', validateForm);