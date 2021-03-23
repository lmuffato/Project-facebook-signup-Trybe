const btnLogin = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');

function Alerta() {
  alert(inputEmail.value);
}

btnLogin.addEventListener('click', Alerta);
