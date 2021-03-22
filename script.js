function alertFunction() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
}

function alertButtonLogin() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', alertFunction);
}
alertButtonLogin();
