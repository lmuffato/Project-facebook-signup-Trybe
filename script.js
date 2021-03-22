const btnLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(emailPhone.value);
});
