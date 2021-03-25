const email = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.facebook-login');
const singUpForm = document.querySelector('#singup-form');
const spanMessage = document.querySelector('#message');
const otherGenderRadio = document.querySelector('#personalizado');

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

const singUpFormValidation = (form) => {
  const isEmpty = isFormEmpty(form);
  const errorMessage = 'Campos inválidos';
  const hasErrorMessage = form.innerHTML.includes(errorMessage);

  if (isEmpty && !hasErrorMessage) {
    spanMessage.innerHTML = errorMessage;
  } else if (!isEmpty) {
    spanMessage.innerHTML = '';
  }
};

const showGenderInput = () => {
  const genderTextInput = document.querySelector('#gender-custom');
  genderTextInput.style.display = 'block';
};

const hideGenderInput = () => {
  const genderTextInput = document.querySelector('#gender-custom');
  genderTextInput.style.display = 'none';
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showEmail();
});

singUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  singUpFormValidation(singUpForm);
});

otherGenderRadio.addEventListener('click', showGenderInput);
otherGenderRadio.addEventListener('blur', hideGenderInput);
