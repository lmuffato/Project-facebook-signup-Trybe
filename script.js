const button = document.getElementById('button-login'); // Variavel recebendo o botão
const emailPhone = document.getElementById('user-email-phone');

button.addEventListener('click', clickButton);
function clickButton () {
  window.alert(emailPhone.value);
};
