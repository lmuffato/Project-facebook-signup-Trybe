// Requisito 7
const btnEntrar = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
btnEntrar.addEventListener('click', () => alert(userEmailPhone.value));

// Requisito 18
const getForms = document.querySelectorAll('.form-container input');
const message = document.querySelector('#msg');

const checkedInput1 = () => {
  const getRadio = document.querySelector('.genero-subcontainer input:checked');
  return getRadio;
};

const btncadastra = document.querySelector('#facebook-register');

btncadastra.addEventListener('click', (event) => {
  event.preventDefault();

  for (let index = 0; index < getForms.length; index += 1) {
    const element = getForms[index];
    if (element.value === '' || checkedInput1() === null) {
      message.innerText = 'Campos inválidos';
      return message.innerText;
    }
  }
  message.innerText = '';
  return message.innerText;
});

// Requisito 19
let control = 0;
const areaPersonalizado = document.querySelector('.genero-subcontainer');
const testChecked = () => document
  .querySelector('.genero-subcontainer input:checked').value;

const createNewArea = () => {
  const area = document.createElement('input');
  areaPersonalizado.appendChild(area);
  area.name = 'gender-custom';
  area.placeholder = 'Gênero (opcional)';
  area.id = 'valor';
  control += 1;
};

const removeNewArea = () => {
  const childDiv = document.querySelector('input#valor');
  areaPersonalizado.removeChild(childDiv);
  control = 0;
};

const validateNovaArea = () => {
  if (control === 0 && testChecked() === 'Personalizado') createNewArea();
  if (control === 1 && testChecked() !== 'Personalizado') removeNewArea();
};

areaPersonalizado.addEventListener('click', () => {
  validateNovaArea();
});
