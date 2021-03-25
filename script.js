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
    const divform = document.getElementById("registerBox");
    const alerta = document.createElement('h3');
    alerta.innerText = 'Campos inválidos';
    alerta.setAttribute('class', 'alertlog');
    divform.appendChild(alerta);
  }
  if (checkerText === false || checkerRadio.length === 2) {
    const divform = document.getElementById("registerBox");
    const alerta = document.createElement('h3');
    alerta.innerText = 'Olá, ' + document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ',     ' +document.getElementById('emailOrPhone').value;
    alerta.setAttribute('class', 'welcome');
    divform.appendChild(alerta);
  }
}
submitButton.addEventListener('click', (Event) => {
  Event.preventDefault();
  formData();
});
openAccInput[7].addEventListener('click', () => {
  const customGender = document.createElement('input');
  const genderBox = document.getElementById('genderBox');
  customGender.setAttribute('placeholder', 'Gênero (opcional)');
  customGender.setAttribute('name', 'gender-custom');
  customGender.setAttribute('id', 'genderCustom');
  customGender.style.borderRadius = '5%';
  customGender.style.border = '1px solid rgb(104, 104, 104)';
  genderBox.appendChild(customGender);
});
