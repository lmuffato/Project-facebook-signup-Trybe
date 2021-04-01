const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');
const buttom = document.getElementById('facebook-register');
const inputs = document.getElementsByTagName('input');

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta);

const rightContent = document.querySelector('.right-content');
const error = document.createElement('h1');
const radio = document.querySelector('#form').gender;
const submitForm = document.getElementById('submitForm');
// inputs values/////////////////
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('celular-email');
const birthdate = document.getElementById('birthdate');
function checkGender() {
  let genderSelected = '';
  for (let index = 0; index < 3; index += 1) {
    if (radio[index].checked) {
      genderSelected = radio[index].value;
    }
  }
  return genderSelected;
}

console.log(radio);

function checkRadio() {
  const a = radio[0]
  const b = radio[1]
  const c = radio[2]
  if (a.checked === false && b.checked === false && c.checked === false) {
    return false;
  }
  return true;
}

function submitedForm() {
  submitForm.classList.remove('removeElement');
  const p = document.getElementById('p');
  p.innerHTML = `Olá ${nome.value} ${sobrenome.value}<br>
  Email: ${email.value}<br>
  Data de nascimento: ${birthdate.value}<br>
  Gênero: ${checkGender()}`;
}

function register(e) {
  e.preventDefault();
  for (let index = 2; index < inputs.length; index += 1) {
    if (inputs[index].value === '' || checkRadio() === false) {
      error.innerText = 'Campos inválidos';
      rightContent.appendChild(error);
      break;
    }
    rightContent.classList.add('removeElement');
    submitedForm();
  }
}

buttom.addEventListener('click', register);

const girlGender = document.getElementById('Masculino');
const boyGender = document.getElementById('Feminino');
const gender = document.getElementById('Personalizado');
const genderConteiner = document.querySelector('.genderContainer');

function customGender() {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  customInput.id = 'customId';
  genderConteiner.appendChild(customInput);
}

gender.addEventListener('click', customGender);

function removeCustomGender() {
  const customId = document.getElementById('customId');
  if (customId !== null) {
    genderConteiner.removeChild(customId);
  }
}

girlGender.addEventListener('click', removeCustomGender);

boyGender.addEventListener('click', removeCustomGender);