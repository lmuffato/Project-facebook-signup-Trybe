const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta);

const buttom = document.getElementById("facebook-register")
const inputs = document.getElementsByClassName("input")
const rightContent = document.getElementsByClassName("right-content")

function register() {
  if (inputs.value = '') {
    const error = document.createElement('h1')
    error.innerTEXT = 'Campos inválidos'
    rightContent.appendChild(error)
  }
}

buttom.addEventListener('click', register())