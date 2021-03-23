const getButton = document.getElementById('button-login');

function alertLogin() {
  const textLogin = document.getElementById('user-email-phone');
  alert(textLogin.value);
}

getButton.addEventListener('click', alertLogin);
