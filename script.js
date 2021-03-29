const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta);

const buttom = document.getElementById('facebook-register');
const inputs = document.getElementsByClassName('input');
const rightContent = document.querySelector('.right-content');
const error = document.createElement('h1');
const radio = document.querySelector('#form').gender;
const submitForm = document.getElementById('submitForm');
// inputs values/////////////////
const name = document.getElementById('name').value;
// eslint-disable-next-line no-unused-vars
const sobrenome = document.getElementById('sobrenome');
// eslint-disable-next-line no-unused-vars
const email = document.getElementById('celular-email');
// eslint-disable-next-line no-unused-vars
const senha = document.getElementById('senha');
// eslint-disable-next-line no-unused-vars
const birthdate = document.getElementById('birthdate');
function checkGender() {
  for (let index = 0; index < 3; index += 1) {
    // eslint-disable-next-line no-empty
    if (radio[index] === true) {
    }
  }
}
checkGender();
// inputs values/////////////////

console.log(radio);

function checkRadio() {
  if (radio[0].checked === false && radio[1].checked === false && radio[2].checked === false) {
    return false
  }
return true
}

function register(e) {
  e.preventDefault()
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '' || checkRadio() === false) {
      error.innerText = 'Campos inválidos';
      rightContent.appendChild(error);
      break;
    }
    rightContent.classList.add('removeElement')
    submitedForm();
  }
}

buttom.addEventListener('click', register);

function submitedForm() {
  submitForm.classList.remove('removeElement');
  const p = document.getElementById('p');
  p.innerHTML = `Olá ${name}`;
}

