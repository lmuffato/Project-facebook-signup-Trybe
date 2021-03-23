const buttonSubmit = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const radiosButtons = document.getElementsByName('gender');
const registerInputs = document.querySelectorAll('.register');
// const generoOpcional = document.querySelector('#genero-opcional');

function submit() {
  alert(document.getElementById('user-email-phone').value);
}

function checkRegister() {
  let confirmRegister = true;

  for (let i = 0; i < registerInputs.length; i += 1) {
    if (registerInputs[i].value === '') {
      confirmRegister = false;
    }
  }
  return confirmRegister;
}

function checkRadios() {
  let confirmRadios = false;

  for (let j = 0; j < radiosButtons.length; j += 1) {
    if (radiosButtons[j].checked === true) {
      confirmRadios = true;
    }
  }
  return confirmRadios;
}

function checkData() {
  if (checkRegister() === false || checkRadios() === false) {
    alert('Campos Inválidos');
  }
}

buttonSubmit.addEventListener('click', submit);
buttonRegister.addEventListener('click', checkData);
