const inputLogin = document.getElementById('user-email-phone');
const buttonLogin = document.getElementById('button-login');
function alertPasswordEvent() {
  alert(inputLogin.value);
}
function alertPassword() {
  buttonLogin.addEventListener('click', alertPasswordEvent);
}
alertPassword();
