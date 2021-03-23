/* function button login */
const buttonLoggin = document.querySelector('#button-login');

function alertaT(e) {
  e.preventDefault();
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);
