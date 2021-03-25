const btnEntrar = document.getElementById('button-login');
const userEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userEmail.value);
});

const female = document.getElementById('female');
const male = document.getElementById('male');
const customGender = document.getElementById('custom');
const inputHidden = document.getElementById('input-hidden');

customGender.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'text');
  female.classList.remove('checked');
  male.classList.remove('checked');
  customGender.classList.add('checked');
});

female.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'hidden');
  customGender.classList.remove('checked');
  male.classList.remove('checked');
  female.classList.add('checked');
});

male.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'hidden');
  customGender.classList.remove('checked');
  female.classList.remove('checked');
  male.classList.add('checked');
});

const rightContent = document.getElementsByClassName('right-content')[0];

const objectContent = {
  firstName: '',
  lastName: '',
  phoneEmail: '',
  birthDate: '',
  gender: '',
};

const firstName = document.getElementsByName('firstname')[0];
const lastName = document.getElementsByName('lastname')[0];
const phoneEmail = document.getElementsByName('phone_email')[0];
const birthDate = document.getElementsByName('birthdate')[0];

function createValues() {
  objectContent.firstName = firstName.value;
  objectContent.lastName = lastName.value;
  objectContent.phoneEmail = phoneEmail.value;
  objectContent.birthDate = birthDate.value;

  if (customGender.classList.contains('checked')) {
    objectContent.gender = customGender.value;
  } else if (female.classList.contains('checked')) {
    objectContent.gender = female.value;
  } else if (male.classList.contains('checked')) {
    objectContent.gender = male.value;
  }
}

const btnRegister = document.getElementById('facebook-register');
const inputSignup = document.querySelectorAll('.input-signup');
const formSignup = document.getElementById('form-signup');
const mensagem = document.createElement('p');
mensagem.innerText = 'Campos inválidos';

function validate() {
  for (let index = 0; index < inputSignup.length; index += 1) {
    if (inputSignup[index].value === '') {
      return false;
    }
  }
  return true;
}

function renderInformations(e) {
  if (validate()) {
    e.preventDefault();

    createValues();

    rightContent.innerHTML = '';
    const divInformations = document.createElement('div');

    const string = `Olá, ${objectContent.firstName} ${objectContent.lastName}
  ${objectContent.phoneEmail}
  ${objectContent.birthDate}
  ${objectContent.gender} `;

    divInformations.innerText = string;
    rightContent.appendChild(divInformations);
  } else {
    formSignup.appendChild(mensagem);
  }
}

btnRegister.addEventListener('click', renderInformations);
