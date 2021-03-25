const buttonLogin = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
const submitButton = document.getElementById('facebook-register');
const openAccInput = document.getElementsByClassName('openAccount');
buttonLogin.addEventListener('click', (Event) => {
  Event.preventDefault();
  alert(inputEmailTel.value);
});
function checkNullInputText() {
  let hasNull;
  for (let index = 0; index < openAccInput.length; index += 1) {
    if ((index <= 3 || index > 6) && openAccInput[index].value === '') {
      hasNull = true;
    }
  }
  return hasNull;
}
function checkNullInputRadio() {
  const checkers = [];
  for (let index = 4; index <= openAccInput.length; index += 1) {
    if (index < 7 && openAccInput[index].checked === false) {
      checkers.push(index);
    }
  }
  return checkers;
}
function formData() {
  const checkerText = checkNullInputText();
  const checkerRadio = checkNullInputRadio();
  if (checkerText === true || checkerRadio.length !== 2) {
    const form = document.getElementById('formOpenAcc');
    const alerta = document.createElement('h2');
    alerta.innerText = 'Campos inválidos';
    alerta.setAttribute('id', 'alert');
    form.appendChild(alerta);
  }
}
submitButton.addEventListener('click', (Event) => {
  Event.preventDefault();
  formData();
});
