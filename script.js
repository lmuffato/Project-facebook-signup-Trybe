const loginBtn = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const personal = document.querySelector('#personal');
const genderField = document.querySelector('#gender-field');
const inputs = document.getElementsByTagName('input');
const registerBtn = document.querySelector('#facebook-register');
const invalidField = document.querySelector('#invalid-field');
let validation = 0;
const mainContent = document.querySelector('.main-content');
let selected = '';

console.log(`Aqui estão os inputs: ${inputs.length}`);

loginBtn.addEventListener('click', (e) => {
  if (userEmailPhone.innerText === '') {
    alert(userEmailPhone.value);
  }
  e.preventDefault();
});

genderField.addEventListener('click', (e) => {
  selected = e.target;
  if (selected === personal) {
    const opcional = document.createElement('input');
    opcional.setAttribute('type', 'text');
    opcional.setAttribute('name', 'gender-custom');
    opcional.setAttribute('placeholder', 'Gênero (opcional)');
    genderField.appendChild(opcional);
  }
  return selected;
});

function createMessage() {
  const name = document.querySelector('#name');
  const lastname = document.querySelector('#lastname');
  const emailOrPhone = document.querySelector('#phone_email');
  const birthdate = document.querySelector('#birthdate');
  const genderMessage = selected;
  console.log(`Aqui está o gênero ${genderMessage}`);
  const message = document.createElement('h4');
  message.innerText = `Olá, ${name.value} ${lastname.value}, 
  ${emailOrPhone.value}, ${birthdate.value}, ${genderMessage.value}`;
  const helloStrange = document.createElement('section');
  helloStrange.id = 'hello-strange';
  helloStrange.className = 'right-content';
  helloStrange.appendChild(message);
  mainContent.appendChild(helloStrange);
}

registerBtn.addEventListener('click', (e) => {
  const origRightContent = document.querySelector('#original-right-content');
  for (let index = 0; index < inputs.length; index += 1) {
    if (index >= 2 && inputs[index].value === '') {
      invalidField.innerText = 'Campos inválidos';
      validation = 1;
      e.preventDefault();
      break;
    }
    validation = 0;
  }
  console.log(validation);
  if (validation === 0) {
    invalidField.innerText = '';
    createMessage();
    mainContent.removeChild(origRightContent);
    e.preventDefault();
  }
});
