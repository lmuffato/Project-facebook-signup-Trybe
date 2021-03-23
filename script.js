/* function button login */
const buttonLoggin = document.querySelector('#button-login');

function alertaT(e) {
  e.preventDefault();
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);

Adição de frase referente ao requisito 8 no left-container

function addParagraph() {
  let text = document.getElementsByTagName('p')[0].innerText('O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.');
  return text;
}

addParagraph();
