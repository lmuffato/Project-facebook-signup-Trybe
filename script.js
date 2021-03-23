function alertLogin() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
  input.value = '';
}

const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', alertLogin);
