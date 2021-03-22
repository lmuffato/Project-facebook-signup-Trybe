const botaoEntrar = document.getElementById('button-login');

function alerta() {
  const email = document.getElementById('user-email-phone').value;
  if (email !== undefined) {
    alert(email);
  }
}
botaoEntrar.addEventListener('click', () => {
  alerta();
});
