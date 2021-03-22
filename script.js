function alert1() {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alert1);
