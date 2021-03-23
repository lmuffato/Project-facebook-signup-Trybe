const loginBtn = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const personal = document.querySelector('#personal');
const genderField = document.querySelector('#gender-field');
const inputs = document.getElementsByTagName('input');
let validation = 0;
const registerBtn = document.querySelector('#facebook-register');
const invalidField = document.querySelector('#invalid-field');

console.log(`Aqui estão os inputs: ${inputs.length}`);

loginBtn.addEventListener('click', (e) => {
  if (userEmailPhone.innerText === '') {
    alert(userEmailPhone.value);
  }
  e.preventDefault();
});

genderField.addEventListener('click', (e) => {
  const selected = e.target;
  if (selected === personal) {
    const opcional = document.createElement('input');
    opcional.setAttribute('type', 'text');
    opcional.setAttribute('name', 'gender-custom');
    opcional.setAttribute('placeholder', 'Gênero (opcional)');
    genderField.appendChild(opcional);
  }
});

registerBtn.addEventListener('click', (e) => {
  for (let index = 0; index < inputs.length; index += 1) {
    if (index >= 2 && inputs[index].value === '') {
      invalidField.innerText = 'Campos inválidos';
      validation = 1;
      break;
    } else {
      invalidField.innerText = '';
    }
  }
  e.preventDefault();
  console.log(validation);
  return validation;
});

console.log(validation);
