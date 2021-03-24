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
