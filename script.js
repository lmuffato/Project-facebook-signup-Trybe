const btnLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const otherGenders = document.getElementById('other');
const formRegister = document.getElementById('form-register');
const btnRegister = document.getElementById('facebook-register');
const genders = document.getElementById('genders');
const errorMessage = document.getElementById('message-error');
let genderValue = '';
const rightContent = document.querySelector('.right-content');

btnLogin.addEventListener('click', () => {
  alert(emailPhone.value);
});

const genderInput = () => {
  const gender = document.createElement('input');
  gender.type = 'text';
  gender.id = 'custom';
  gender.name = 'gender-custom';
  gender.placeholder = 'Gênero (opcional)';
  if (otherGenders) {
    genders.appendChild(gender);
  }
};

const checkRadios = () => {
  let inputChecked = 0;
  const gendersInput = document.querySelectorAll('#genders label input');
  for (let i = 0; i < gendersInput.length; i += 1) {
    if (gendersInput[i].checked) {
      inputChecked += 1;
    }
  }
  return inputChecked;
};

const checkEmpty = () => {
  const formInputs = formRegister.querySelectorAll('input');

  for (let i = 0; i < formInputs.length; i += 1) {
    if (formInputs[i].value === '' || checkRadios() === 0) {
      errorMessage.innerHTML = 'Campos inválidos';
    } else {
      errorMessage.innerHTML = '';
    }
  }
};

genders.addEventListener('click', (e) => {
  const inputSelected = e.target;
  const customGenderInput = document.querySelector('#custom');
  if (inputSelected.value === 'Personalizado' && customGenderInput === null) {
    genderInput();
  }
  if (inputSelected.value !== 'Personalizado'
    && customGenderInput !== null) {
    customGenderInput.remove();
  }
  genderValue = inputSelected.value;
});

btnRegister.addEventListener('click', (e) => {
  const userData = document.querySelectorAll('.right-content input');
  const pReturn = document.createElement('p');
  pReturn.id = 'p-return';
  checkEmpty();
  e.preventDefault();
  if (errorMessage.innerHTML === '') {
    rightContent.innerHTML = '';
    rightContent.appendChild(pReturn);
    pReturn.innerHTML = `Olá, ${userData[0].value} ${userData[1].value}.
    Telefone ou E-mail: ${userData[2].value},
    Data de nascimento: ${userData[4].value},
    Gênero: ${genderValue}.`;
  }
});
