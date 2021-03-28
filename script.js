// Variaveis gerais.
const loginButton = document.querySelector('#button-login');

// Faz com que ao clicar o botão 'Entrar', o browser exiba um alerta com os dados inseridos
// no input com o id= 'user-email-phone'
loginButton.addEventListener('click', () => {
  const emailPhone = document.querySelector('#user-email-phone').value;
  alert(emailPhone);
});
