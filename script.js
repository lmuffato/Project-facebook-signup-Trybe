const botao = document.getElementById('button-login');
botao.addEventListener('click', mostrarAlert);

function mostrarAlert (){
  const emailtel = document.getElementById('user-email-phone');
  alert(emailtel.value);
}
