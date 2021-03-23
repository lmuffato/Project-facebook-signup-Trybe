function showAlert(event) {
  event.preventDefault();
  const emailPhone = document.querySelector('#user-email-phone');

  alert(emailPhone.value);
}

function loginButton() {
  document.querySelector('#button-login').addEventListener('click', showAlert);
}

window.onload = () => {
  loginButton();
};
