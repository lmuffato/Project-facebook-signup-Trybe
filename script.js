const btnEntrar = document.getElementById('button-login');
const userEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userEmail.value);
});
