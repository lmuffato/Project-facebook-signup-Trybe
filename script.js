const getButtonEntrar = document.querySelector('#button-login');
const fields = document.querySelectorAll("[required]");
const getButtonRegister = document.querySelector('#facebook-register');

function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}

// function customValidation() {
//   const divInvalid = document.querySelector('#invalid-input');
//   const insertText = document.createElement('p');
//   insertText.innerText = 'Campos inválidos';
//   divInvalid.appendChild(insertText);
//   return;
// }

getButtonEntrar.addEventListener('click', spamAlert);

// getButtonRegister.addEventListener('click', (event) => {
//   for(field of fields) {
//     field.addEventListener("invalid", customValidation);
//   }  
// })