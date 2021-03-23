const buttonLoggin = document.querySelector('#button-login');

function alertaT() {
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);
