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
