const buttonLogin = document.getElementById('button-login');

function alertLoginButton() {
  const emailPhone = document.getElementById('user-email-phone').value;
  alert(emailPhone);
}

buttonLogin.addEventListener('click', alertLoginButton);
