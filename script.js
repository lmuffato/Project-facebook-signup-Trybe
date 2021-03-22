const botaoEntrar = document.getElementById('button-login');

function alerta() {
  console.log('estou aqui');
  const email = document.getElementById('user-email-phone').value;
  if (email !== undefined) {
    alert(email);
  }
}
botaoEntrar.addEventListener('click', alerta);
