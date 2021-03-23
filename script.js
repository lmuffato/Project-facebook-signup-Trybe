function enterButton() {
  const emailOrCel = document.getElementById('user-email-phone').value;
  alert(emailOrCel);
}

const button = document.getElementById('button-login');
button.addEventListener('click', enterButton);
