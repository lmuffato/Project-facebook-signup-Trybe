function buttonAlert(e) {
  e.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone');
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

function clearRightContent(nameElement, emailElement,
  birthdateElement, genderElement) {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  rightContent.appendChild(nameElement);
  rightContent.appendChild(emailElement);
  rightContent.appendChild(birthdateElement);
  rightContent.appendChild(genderElement);
}

function submitedForm() {
  const nameValue = document.getElementById('firstname').value;
  const lastnameValue = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = genderCheck();
  const nameElement = document.createElement('p');
  nameElement.innerHTML = `"Olá, ${nameValue} ${lastnameValue}`;
  const emailElement = document.createElement('p');
  emailElement.innerHTML = email;
  const birthdateElement = document.createElement('p');
  birthdateElement.innerHTML = birthdate;
  const genderElement = document.createElement('p');
  genderElement.innerHTML = gender;
  clearRightContent(nameElement, emailElement, birthdateElement, genderElement);
}

function inputValidate(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.text-class');
  const registerForm = document.querySelector('#register-form');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const invalidField = document.createElement('span');
      invalidField.innerText = 'Campos inválidos';
      registerForm.appendChild(invalidField);
      return;
    }
  }
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
