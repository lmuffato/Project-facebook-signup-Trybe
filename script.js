let isValid = true;
function getEmailOrPhone() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
  input.value = '';
}

const btn = document.getElementById('button-login');
btn.addEventListener('click', getEmailOrPhone);

function validateFields() {
  const inputs = document.querySelectorAll('.right-content input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      isValid = false;
    }
  }
}

function invalidField() {
  const errorInfo = document.querySelector('#invalidFields');
  errorInfo.style.display = 'block';
}

function validateChecked(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked === true) {
      return array[index].value;
    }
  }
}

function logged() {
  // Acessando as informações do formulário
  const oldRight = document.querySelector('.right-content');
  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const bornInfo = document.querySelector('#birthdate').value;
  const gender = document.querySelectorAll('#radioBtns input');
  // Excluindo o oldRight
  oldRight.innerHTML = '';
  // Criando novo Right
  const newText = document.createElement('p');
  newText.innerText = `Olá, ${firstName} ${lastName}
  ${email}
  ${bornInfo}
  ${validateChecked(gender)}`;
  oldRight.appendChild(newText);
}

const buttonVerifier = document.getElementById('facebook-register');
buttonVerifier.addEventListener('click', (e) => {
  validateFields();
  if (isValid) {
    const alertSpan = document.querySelector('span');
    alertSpan.style.display = 'none';
    logged();
  } else {
    invalidField();
  }
  isValid = true;
  e.preventDefault();
});

function addNewGender() {
  const newGender = document.querySelector('#personalizado');
  const newUser = document.querySelector('#addNewGender');
  const customGenderId = 'input-text-gender';
  const inputGender = document.getElementById(customGenderId);
  if (!inputGender && newGender.checked === true) {
    const add = document.createElement('input');
    add.placeholder = 'Gênero (opcional)';
    add.name = 'gender-custom';
    add.id = customGenderId;
    add.type = 'text';
    newUser.appendChild(add);
  }
}

const person = document.getElementById('personalizado');
person.addEventListener('click', addNewGender);

function deleteCustomGender() {
  const newGender = document.querySelector('#personalizado');
  const customGender = document.getElementById('input-text-gender');
  if (newGender.checked === false && customGender) {
    customGender.remove();
  }
}

const radioBtns = document.querySelectorAll('#radioBtns input');
for (let index = 0; index < radioBtns.length - 1; index += 1) {
  radioBtns[index].addEventListener('click', deleteCustomGender);
}
