const user = document.getElementById('user-email-phone')
const login = document.getElementById('button-login');

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta)