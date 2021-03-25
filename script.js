const email = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.facebook-login');
const singUpForm = document.querySelector('#singup-form');
const spanMessage = document.querySelector('#message');
const genderRadio = document.getElementsByName('gender');

const showEmail = () => {
  alert(email.value);
};

const createUserObject = (form) => {
  const selectedGender = document.querySelector('.selected');
  const inputs = form.querySelectorAll('input');
  const user = {};
  inputs.forEach((input) => {
    user[input.name] = input.value;
  });
  user.gender = selectedGender.value;
  user.fullname = `${user.firstname} ${user.lastname}`;

  return user;
};

const showUserInfo = (user) => {
  singUpForm.innerHTML = `
  <p>
  Olá, ${user.fullname} <br>
  Email ou Telefone: ${user.phone_email} <br>
  Data de Nascimento: ${user.birthdate} <br>
  Gênero: ${user.gender}
  </p>
  `;
};

const isFormEmpty = (form) => {
  const inputs = form.querySelectorAll('input');
  const inputValues = [];

  inputs.forEach((input) => {
    if (input.value.length === 0) {
      inputValues.push(false);
    } else {
      inputValues.push(true);
    }
  });

  if (inputValues.filter((element) => element === false).length > 0) {
    return true;
  }
  return false;
};

const singUpFormValidation = (form) => {
  const isEmpty = isFormEmpty(form);
  const errorMessage = 'Campos inválidos';
  const hasErrorMessage = form.innerHTML.includes(errorMessage);

  if (isEmpty && !hasErrorMessage) {
    spanMessage.innerHTML = errorMessage;
  } else if (!isEmpty) {
    spanMessage.innerHTML = '';
    showUserInfo(createUserObject(form));
  }
};

const createGenderInput = () => {
  const hasCreated = document.querySelector('[name = gender-custom');
  const genderDiv = document.querySelector('#gender');
  const genderInput = document.createElement('input');

  if (!hasCreated) {
    genderInput.name = 'gender-custom';
    genderInput.className = 'input';
    genderInput.placeholder = 'Gênero (opcional)';
    genderInput.value = 'Gênero (opcional)';
    genderDiv.appendChild(genderInput);
  }
};

const removeGenderInput = () => {
  const genderInput = document.querySelector('[name = gender-custom]');
  if (genderInput) {
    genderInput.remove();
  }
};

const selectGender = (Event) => {
  const gender = Event.target;
  if (!gender.className.includes('selected')) {
    genderRadio.forEach((input) => input.classList.remove('selected'));
    gender.classList.add('selected');
  }

  if (gender.id === 'personalizado') {
    createGenderInput();
  } else {
    removeGenderInput();
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showEmail();
});

singUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  singUpFormValidation(singUpForm);
});

genderRadio.forEach((input) => {
  input.addEventListener('click', selectGender);
});
