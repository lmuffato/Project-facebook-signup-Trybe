const btnLogin = document.querySelector('#button-login');
const userEmail = document.querySelector('#user-email-phone');

function alertEmail() {
  alert(userEmail.value);
}

btnLogin.addEventListener('click', alertEmail);
