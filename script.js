function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);
