const btnEntrar = document.getElementById('button-login');
const userEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userEmail.value);
});

const btnRegister = document.getElementById('facebook-register');
const inputSignup = document.querySelectorAll('.input-signup');

btnRegister.addEventListener('click', () => {
  for (let index = 0; index < inputSignup.length; index += 1) {
    if (inputSignup[index].value === '') {
      inputSignup[index].placeholder = 'Campos inválidos';
    }
  }
});
