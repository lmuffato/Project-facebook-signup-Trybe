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
const radios = document.querySelector('#form').gender;
const submitForm = document.getElementById('submitForm');
//inputs values/////////////////
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('celular-email');
const senha = document.getElementById('senha');
const birthdate = document.getElementById('birthdate');
function checkGender() {
  for (let index = 0; index < 3; index += 1) {
    if (radios[index] === true) {
      const checkedGender = radios[index].value;
      return checkedGender;
    }
  }
}
//inputs values/////////////////

console.log(radios);

function checkRadio() {
  if (radios[0].checked === false && radios[1].checked === false && radios[2].checked === false) {
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
    submitedForm()
    checkGender()
  }
}

buttom.addEventListener('click', register);

function submitedForm() {
  submitForm.classList.remove('removeElement');
  const p = document.getElementById('p');
  p.innerHTML = `Olá ${nome.value} ${sobrenome.value}`
  p.innerHTML = `Email: ${email.value}`
  p.innerHTML = `Data de nascimento: ${birthdate.value}`
  // p.innerHTML = `Gênero:`
}

const gender = document.getElementById('personalizado')
const genderConteiner = document.getElementsByClassName('genderConteiner')

function customGender() {
  const customInput = document.createElement('input')
  genderConteiner.appendChild(customInput)
  Object.assign(customInput, {
    id: customGenderId,
    name: customGenderName,
    type: 'text',
    placeholder: 'Gênero (opcional)',
  });
}

gender.addEventListener('click', customGender);