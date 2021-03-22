const buttonLogin = document.getElementById('button-login');

function alertOnLogin(event) {
  const inputMailOrPhone = document.getElementById('user-email-phone');
  event.preventDefault();
  const valueOfInput = inputMailOrPhone.value;
  if (valueOfInput !== '') {
    alert(valueOfInput);
  }
}

buttonLogin.addEventListener('click', alertOnLogin);
