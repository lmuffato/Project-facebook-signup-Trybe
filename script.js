function alertLogin() {
  alert(document.querySelector('#user-email-phone').value);
}

const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', alertLogin);