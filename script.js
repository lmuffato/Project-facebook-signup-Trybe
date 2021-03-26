const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const slctInput = document.querySelectorAll('.select');
const selectDivCustom = document.querySelector('#customGender');
const createSpan = document.createElement('span');
const selectRadios = document.querySelectorAll('#masc, #fem, #pers');
const selectUser = document.querySelector('#user');
const selectSurname = document.querySelector('#surname');
const selectInputEmail = document.querySelectorAll('input')[4];
const selectInputBirthDate = document.querySelectorAll('input')[6];
const selectdiv = document.querySelector('#signup-form');

function alertInput() {
  alert(selectInput.value);
}

function getValueRadioInputs() {
  const gender = '';
  for (let index = 0; index < selectRadios.length; index += 1) {
    if (selectRadios[index] && selectRadios[index].checked) {
      return selectRadios[index].value;
    }
  }
  return gender;
}

function createPhrase() {
  const phrase = `Olá, ${selectUser.value} ${selectSurname.value} 
  ${selectInputEmail.value} 
  ${selectInputBirthDate.value}
  ${getValueRadioInputs()}`;
  return phrase;
}

function checkInputs(event) {
  for (let index = 0; index < slctInput.length; index += 1) {
    if (slctInput[index].value === '') {
      event.preventDefault();
      createSpan.innerText = 'Campos inválidos';
      selectdiv.appendChild(createSpan);
      return 0;
    }
  }
  event.preventDefault();
  selectdiv.innerText = createPhrase();
  return 1;
}

function createInputCustom(input) {
  if (input.id === 'pers' && input.checked) {
    selectDivCustom.style.display = 'flex';
  } else {
    selectDivCustom.style.display = 'none';
  }
}

for (let index = 0; index < selectRadios.length; index += 1) {
  selectRadios[index].onclick = () => createInputCustom(selectRadios[index]);
}

selectButton.addEventListener('click', alertInput);
sendForm.addEventListener('click', checkInputs);
