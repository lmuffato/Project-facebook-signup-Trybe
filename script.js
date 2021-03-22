function buttonAlert() {
  event.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone-label');
  alert(emailInputElement.value);
}

window.onload = () => {
  const buttonElement = document.getElementById('button-login');

  buttonElement.onclick = buttonAlert;
};
