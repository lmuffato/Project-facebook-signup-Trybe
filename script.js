const btnLogin = document.getElementById('button-login');
const emailPhoneValue = document.getElementById('user-email-phone').value;

btnLogin.addEventListener('click', () => {
  alert(emailPhoneValue);
})
