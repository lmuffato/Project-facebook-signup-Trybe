const buttonLogin = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', (Event) => {
  Event.preventDefault();
  if (inputEmailTel.value === '') {
    alert('Email ou telefone');
  }
});
