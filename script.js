const rightContent = document.querySelector('.right-content');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const birthDate = document.querySelector('#birthdate');
const radios = document.querySelectorAll('.radio');
const genderRadio = document.querySelector('#custom');
const customGender = document.querySelector('#custom-gender');
const formValidate = document.querySelectorAll('.form-validate');
const accForm = document.querySelector('#form-create-account');
const createParagraph = document.createElement('p');

function rightContentForm() {
  let genderInput = '';
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].classList.contains('selected')) {
      genderInput = radios[i].value;
    }
    rightContent.innerText = `Olá, ${nameInput.value} ${lastName.value}

    ${emailInput.value}
    ${birthDate.value}
    ${genderInput}`;
  }
}

function validateForm(event) {
  let testIfTrue = 0;
  for (let formsItems = 0; formsItems < formValidate.length; formsItems += 1) {
    if (formValidate[formsItems].value.length < 2) {
      testIfTrue += 1;
    }
  }
  if (testIfTrue > 0) {
    createParagraph.innerText = 'Campos inválidos';
    accForm.appendChild(createParagraph);
    event.preventDefault();
  } else {
    event.preventDefault();
    rightContentForm();
  }
}

const btnRegister = document.querySelector('#facebook-register');

btnRegister.addEventListener('click', validateForm);

const btn = document.querySelector('#button-login');

function alertLogin() {
  const emailTel = document.querySelector('#user-email-phone').value;

  alert(emailTel);
}

btn.addEventListener('click', alertLogin);

function customGenderForm(event) {
  for (let radiosIndex = 0; radiosIndex < radios.length; radiosIndex += 1) {
    radios[radiosIndex].classList.remove('selected');
  }
  event.target.classList.add('selected');

  if (genderRadio.classList.contains('selected')) {
    customGender.style.display = 'inherit';
  } else {
    customGender.style.display = 'none';
  }
}

for (let i = 0; i < radios.length; i += 1) {
  radios[i].addEventListener('change', customGenderForm);
}
