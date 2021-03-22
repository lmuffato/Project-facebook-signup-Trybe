function buttonAlert(e) {
  e.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone-label');
  alert(emailInputElement.value);
}

function genderCheck() {
  const genderVerify = document.getElementsByName('gender');

  for (let index = 0; index < genderVerify.length; index += 1) {
    if (genderVerify[index].checked) {
      return genderVerify[index].value;
    }
  }
}

function submitedForm() {
  const name = document.querySelector('#name');
  const tel = document.querySelector('#tel');
  const birthdate = document.querySelector('#birthdate');
  const gender = document.querySelector('#gender');
  const inputs = document.querySelectorAll('.text-class');
  const genderValue = genderCheck();
  const submitForm = document.querySelector('.submited-form');

  name.innerText = `Olá ${inputs[0].value} ${inputs[1].value}`;
  tel.innerText = `Telefone: ${inputs[2].value}`;
  birthdate.innerText = `Data de Nascimento: ${inputs[3].value}`;
  gender.innerText = `Genero: ${genderValue}`;
  submitForm.style.display = 'block';
}

function inputValidate(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.text-class');
  const rightContent = document.querySelector('.right-content');
  const registerForm = document.querySelector('#register-form');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const invalidField = document.createElement('span');
      invalidField.innerText = 'Campos inválidos';
      registerForm.appendChild(invalidField);
      return;
    }
  }
  rightContent.style.display = 'none';
  submitedForm();
}

function showCustomGenderOptions(input) {
  const containerElement = document.getElementById('custom-gender-container');

  if (input.id === 'custom-gender' && input.checked) {
    containerElement.style.display = 'flex';
  } else {
    containerElement.style.display = 'none';
  }
}

window.onload = () => {
  const buttonLoginElement = document.getElementById('button-login');
  const buttonSubmitElement = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('#inputs-container input');

  buttonLoginElement.onclick = buttonAlert;
  buttonSubmitElement.onclick = inputValidate;

  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].onclick = () => showCustomGenderOptions(inputs[index]);
  }
};
