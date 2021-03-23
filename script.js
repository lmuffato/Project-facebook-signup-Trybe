// Consts //
let submitCount = 0;
const buttonFacebookRegister = document.querySelector('#facebook-register');
const buttonCustomGender = document.querySelector('#custom');
const invalidQuery = document.querySelector('#invalid');
const invalidText = 'Campos inválidos';
const inputGenderPtOne = '<input name="gender-custom"';
const inputGenderPtTwo = 'placeholder="Gênero (opcional)" type="text">';
const newGender = `${inputGenderPtOne} ${inputGenderPtTwo}`;

// REQUISITO 5

function login() {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
}

// REQUISITO 18
// Funções de Validação //
// https://www.w3schools.com/jsref/coll_doc_forms.asp //
function validateFirstName() {
  if (document.forms.registrationForm.firstname.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

function validateLastName() {
  if (document.forms.registrationForm.lastname.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

function validatePassword() {
  if (document.forms.registrationForm.password.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

function validatePhoneEmail() {
  if (document.forms.registrationForm.phone_email.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

function validateBirthDate() {
  if (document.forms.registrationForm.birthdate.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

function validateGender() {
  if (document.forms.registrationForm.gender.value === '') {
    invalidQuery.innerText = invalidText;
  } else {
    submitCount += 1;
  }
}

// REQUISITO 19

function createCustomGender() {
  const custom = document.querySelector('#hidden-input');
  custom.innerHTML = newGender;
}

function dataView(fullName, mail, dateBirth, gender) {
  const textOla = `"Olá, ${fullName}"`;
  const textMail = `E-mail: ${mail}`;
  const textDateBirth = `Data de Nascimento: ${dateBirth}`;
  const textGender = `Gênero: ${gender.value}`;

  return `<p> 
        ${textOla}
        <br>
        ${textMail}
        <br>
        ${textDateBirth}
        <br>
        ${textGender}
    </p>`;
}
function welcome() {
  const rightContent = document.querySelector('.right-content');
  const registrationForm = document.querySelector('#registrationForm');
  const firstName = registrationForm.querySelector('#firstname').value;
  const lastName = registrationForm.querySelector('#lastname').value;
  const fullName = `${firstName} ${lastName}`;
  const emailOrPhone = registrationForm.phone_email.value;
  const dateBirth = registrationForm.birthdate.value;
  const gender = registrationForm.querySelector('input[name=gender]:checked');
  rightContent.innerHTML = dataView(fullName, emailOrPhone, dateBirth, gender);
}

function validateRegister() {
  submitCount = 0;
  validateFirstName();
  validateLastName();
  validatePhoneEmail();
  validatePassword();
  validateBirthDate();
  validateGender();
  if (submitCount === 6) {
    welcome();
  }
}

// Eventos //
buttonFacebookRegister.addEventListener('click', validateRegister); // Requisito 18, puxa validateRegister e essa puxa as outras validações //
buttonCustomGender.addEventListener('click', createCustomGender);
document.getElementById('button-login')
  .addEventListener('click', login);
