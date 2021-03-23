const buttonLogin = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', (Event) => {
  Event.preventDefault();
  alert(inputEmailTel.value);
});
