const button = document.getElementById('button-login');
function alertaButton() {
  const referencia = document.getElementById('user-email-phone').value;
  alert(referencia);
}
button.addEventListener('click', alertaButton);
