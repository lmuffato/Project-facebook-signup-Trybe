const btnLogin = document.getElementById('button-login')
const inputEmail = document.getElementById('user-email-phone-label')

function Alerta () {
  alert(inputEmail.nodeValue)
}

btnLogin.addEventListener('click', Alerta )