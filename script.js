const button = document.getElementById('button-login'); // Variavel recebendo o botão
const emailPhone = document.getElementById('user-email-phone');

function clickButton() {
  window.alert(emailPhone.value);
}
button.addEventListener('click', clickButton);
