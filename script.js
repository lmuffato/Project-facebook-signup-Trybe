function alertLogin() {
  alert(document.querySelector('#user-email-phone').value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertLogin);
