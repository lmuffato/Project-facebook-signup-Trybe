const btnEntrar = document.getElementById('button-login');
const userEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userEmail.value);
});

const btnRegister = document.getElementById('facebook-register');
const inputSignup = document.querySelectorAll('.input-signup');
const formSignup = document.getElementById('form-signup');
const mensagem = document.createElement('p');
mensagem.innerHTML = 'Campos inválidos';

btnRegister.addEventListener('click', () => {
  for (let index = 0; index < inputSignup.length; index += 1) {
    if (inputSignup[index].value === '') {
      formSignup.appendChild(mensagem);
    }
  }
});

const female = document.getElementById('female');
const male = document.getElementById('male');
const customGender = document.getElementById('custom');
const inputHidden = document.getElementById('input-hidden');

customGender.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'text');
});

female.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'hidden');
});

male.addEventListener('click', () => {
  inputHidden.setAttribute('type', 'hidden');
});
