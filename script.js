const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const radiosGender = document.getElementById('radios-gender');

function alertOnLogin(event) {
  const inputMailOrPhone = document.getElementById('user-email-phone');
  event.preventDefault();
  const valueOfInput = inputMailOrPhone.value;
  if (valueOfInput !== '') {
    alert(valueOfInput);
  }
}

function addErrorMessage(element) {
  const previousError = element.querySelector('.error');
  if (!previousError) {
    const errorMessage = document.createElement('div');
    errorMessage.innerText = 'Campos inválidos';
    errorMessage.classList.add('message');
    errorMessage.classList.add('error');
    element.appendChild(errorMessage);
  }
}

function clearErrors(element) {
  const form = element.target.parentElement;
  const errorMessage = form.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function checkIfInputsAreEmpty(form) {
  const inputs = form.querySelectorAll('input');
  let emptyInputs = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    const input = inputs[index];
    if (input.value === '' && input.required) {
      emptyInputs += 1;
      input.addEventListener('keydown', clearErrors);
    }
  }
  if (emptyInputs > 0) {
    return true;
  }
  return false;
}

function validateForm(event) {
  const form = event.target.parentElement;
  const hasEmptyInputs = checkIfInputsAreEmpty(form);
  if (hasEmptyInputs) {
    event.preventDefault();
    addErrorMessage(form);
  }
}

function revealOtherGenderField() {
  const radios = radiosGender.querySelectorAll('input[type=radio]');
  const inputOtherGender = document.querySelector('input[name=gender-custom]');
  for (let index = 0; index < radios.length; index += 1) {
    const radio = radios[index];
    if (radio.id === 'other' && radio.checked) {
      inputOtherGender.classList.remove('hidden');
    } else {
      inputOtherGender.classList.add('hidden');
    }
  }
}

function getSelectedGender() {
  const radios = radiosGender.querySelectorAll('input[type=radio]');
  for (let index = 0; index < radios.length; index += 1) {
    const radio = radios[index];
    if (radio.checked) {
      return radio.value;
    }
  }
}

function getSignUpFormData() {
  const firstname = document.querySelector('input[name=firstname]').value;
  const lastname = document.querySelector('input[name=lastname]').value;
  const emailOrPhone = document.querySelector('input[name=phone_email]').value;
  const birthdate = document.querySelector('input[name=birthdate]').value;
  const gender = getSelectedGender();
  const data = {
    fullName: `${firstname} ${lastname}`,
    emailOrPhone,
    birthdate,
    gender,
  };

  return data;
}

function sendData(event) {
  event.preventDefault();
  const data = getSignUpFormData();
  const form = document.querySelector('form.signup');
  const hasEmptyInputs = checkIfInputsAreEmpty(form);
  const ifNotRegistered = document.getElementById('ifNotRegistered');
  const ifRegistered = document.getElementById('ifRegistered');
  const greetingsDisplay = ifRegistered.querySelector('#greetings');
  const emailOrPhoneDisplay = ifRegistered.querySelector('.email_phone');
  const birthDisplay = ifRegistered.querySelector('.birth');
  const genderDisplay = ifRegistered.querySelector('#genderChecked');
  if (!hasEmptyInputs) {
    greetingsDisplay.innerText = `Olá, ${data.fullName}`;
    emailOrPhoneDisplay.innerText = data.emailOrPhone;
    birthDisplay.innerText = data.birthdate;
    genderDisplay.innerText = data.gender;
    ifNotRegistered.classList.add('hidden');
    ifRegistered.classList.remove('hidden');
  }
}

buttonLogin.addEventListener('click', alertOnLogin);
buttonSignUp.addEventListener('click', validateForm);
buttonSignUp.addEventListener('click', sendData);
radiosGender.addEventListener('change', revealOtherGenderField);
