const getButtonEntrar = document.querySelector('#button-login');
const fields = document.querySelectorAll("[required]");
const getButtonRegister = document.querySelector('#facebook-register');
function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}
function customValidation() {
  const divInvalid = document.querySelector('#invalid-input');
  const insertText = document.createElement('p');
  if (document.querySelectorAll('.div-invalida').length > 0){
  }else {
  insertText.innerText = 'Campos inválidos';
  divInvalid.appendChild(insertText);
  insertText.classList.add('div-invalida');
}
}
getButtonEntrar.addEventListener('click', spamAlert);
for(field of fields) {
  field.addEventListener("invalid", customValidation);
}