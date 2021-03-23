function getEmailOrPhone() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
  input.value = '';
}

const btn = document.getElementById('button-login');
btn.addEventListener('click', getEmailOrPhone);

function requiredCamp(e) {
  const inputs = document.querySelectorAll('.right-content input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const msg = 'Campos inválidos';
      inputs[index].value = msg;
    }
  }
  e.preventDefault();
}

const buttonVerifier = document.getElementById('facebook-register');
buttonVerifier.addEventListener('click', requiredCamp);

function addNewGender() {
  const newGender = document.querySelector('#personalizado');
  const newUser = document.querySelector('#addNewGender');
  if (newGender.checked === true) {
    const add = document.createElement('input');
    add.placeholder = 'Gênero (opcional)';
    add.name = 'gender-custom';
    newUser.appendChild(add);
  }
}

const person = document.getElementById('personalizado');
person.addEventListener('click', addNewGender);
