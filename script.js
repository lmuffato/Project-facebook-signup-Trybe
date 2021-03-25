const email = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.facebook-login');
const singUpForm = document.querySelector('#singup-form');
const spanMessage = document.querySelector('#message');
const genderRadio = document.getElementsByName('gender');

const showEmail = () => {
  alert(email.value);
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

const createUserObject = (form) => {
  const inputs = form.querySelectorAll('input');
  const user = {};
  inputs.forEach((input) => {
    console.log(input);
    user[input.name] = input.value;
  });
  console.log(user);
};

// const showUserInfo = () => {

// };

const singUpFormValidation = (form) => {
  const isEmpty = isFormEmpty(form);
  const errorMessage = 'Campos inválidos';
  const hasErrorMessage = form.innerHTML.includes(errorMessage);

  if (isEmpty && !hasErrorMessage) {
    spanMessage.innerHTML = errorMessage;
  } else if (!isEmpty) {
    spanMessage.innerHTML = '';
    createUserObject(form);
  }
};

const createGenderInput = () => {
  const hasCreated = document.querySelector('[name = gender-custom');
  const genderDiv = document.querySelector('#gender');
  const genderInput = document.createElement('input');

  console.log(hasCreated);

  if (!hasCreated) {
    genderInput.name = 'gender-custom';
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
