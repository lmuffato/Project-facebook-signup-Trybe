const getButtonEntrar = document.querySelector('#button-login');
const fields = document.querySelectorAll('[required]');
function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}
function customValidation() {
  const divInvalid = document.querySelector('#invalid-input');
  const insertText = document.createElement('p');
  if (document.querySelectorAll('.div-invalida').length === 0) {
    insertText.innerText = 'Campos inválidos';
    divInvalid.appendChild(insertText);
    insertText.classList.add('div-invalida');
  }
}
getButtonEntrar.addEventListener('click', spamAlert);

for (let i = 0; i < fields.length; i += 1) {
  fields[i].addEventListener('invalid', customValidation);
}
