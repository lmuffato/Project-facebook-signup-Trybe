const button = document.getElementById('button-login');
const textInput = document.getElementById('user-email-phone');
const radioButton = document.getElementById('custom');
const man = document.getElementById('man');
const woman = document.getElementById('woman');
const inputCustom = document.querySelector('.inputNone');

function addInput() {
  inputCustom.classList.remove('inputNone');
}

radioButton.addEventListener('click', addInput);

function removeInput() {
  inputCustom.classList.add('inputNone');
}

man.addEventListener('click', removeInput);
woman.addEventListener('click', removeInput);

function clickButton() {
  const input = textInput.value;
  alert(input);
}

button.addEventListener('click', clickButton);
