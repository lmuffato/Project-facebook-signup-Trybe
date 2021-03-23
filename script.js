const getButton = document.getElementById('button-login');
const selectBinary = document.getElementsByName('gender');
const binaryContainer = document.querySelector('.binary');

function alertLogin() {
  const textLogin = document.getElementById('user-email-phone');
  alert(textLogin.value);
}

getButton.addEventListener('click', alertLogin);
const btnSubmit = document.getElementById('facebook-register');
const registerForm = document.getElementById('register-form');

function invalidFields(event) {
  event.preventDefault();
  const inputContent = document.getElementsByClassName('registerField');
  const labelInvalid = document.querySelector('.labelInvalid');

  if (labelInvalid) {
    return 0;
  }

  for (let index = 0; index < 5; index += 1) {
    if (inputContent[index].value === '') {
      const alertEmpty = document.createElement('span');
      alertEmpty.innerHTML = 'Campos inválidos';
      alertEmpty.className = 'labelInvalid';
      registerForm.appendChild(alertEmpty);
      break;
    }
  }
}

function verifyCustom() {
  if (document.getElementsByName('gender-custom')[0]) {
    binaryContainer.removeChild(binaryContainer.childNodes[0]);
  }
}

function removeBinary() {
  verifyCustom();
}

function binary() {
  verifyCustom();
  const binaryInput = document.createElement('input');
  binaryInput.name = 'gender-custom';
  binaryInput.placeholder = 'Gênero (opcional)';
  binaryContainer.appendChild(binaryInput);
}

function verifyChecked() {
  for (let index = 0; index <= selectBinary.length; index += 1) {
    if (selectBinary[index].checked) {
      return selectBinary[index].value;
    }
  }
}

function gatherData() {
  const joinArray = [];

  const name = document.getElementsByName('firstname')[0].value;
  const lastName = document.getElementsByName('lastname')[0].value;

  joinArray.push(`Olá, ${name} ${lastName}`);
  joinArray.push(document.getElementsByName('phone_email')[0].value);
  joinArray.push(document.getElementsByName('birthdate')[0].value);
  joinArray.push(verifyChecked());

  return joinArray;
}

function fillForm(event) {
  const rightContent = document.querySelector('.right-content');

  for (let index = 0; index < event.length; index += 1) {
    const myDiv = document.createElement('div');
    myDiv.innerHTML = event[index];
    rightContent.appendChild(myDiv);
  }
}

function submitForm() {
  const labelInvalid = document.querySelector('.labelInvalid');
  const rightContent = document.querySelector('.right-content');

  if (labelInvalid) {
    return 0;
  }

  const myData = gatherData();

  while (rightContent.firstChild) {
    rightContent.removeChild(rightContent.lastChild);
  }

  fillForm(myData);
}

selectBinary[0].addEventListener('change', removeBinary);
selectBinary[1].addEventListener('change', removeBinary);
selectBinary[2].addEventListener('change', binary);
btnSubmit.addEventListener('click', invalidFields);
btnSubmit.addEventListener('click', submitForm);
