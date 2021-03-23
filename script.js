const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const slctInput = document.querySelectorAll('.main-content input');
const selectForm = document.querySelector('#form-signup');
const createSpan = document.createElement('span');
const selectCustom = document.querySelector('#pers');
const selectDivCustom = document.querySelector('#customGender');
const selectRadios = document.getElementsByName('gender');

function alertInput() {
  alert(selectInput.value);
}

function checkInputs(event) {
  for (let index = 0; index < slctInput.length; index += 1) {
    const element = slctInput[index];
    if (element.value === '') {
      event.preventDefault();
      createSpan.innerText = 'Campos inválidos';
      selectForm.appendChild(createSpan);
    }
  }
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
