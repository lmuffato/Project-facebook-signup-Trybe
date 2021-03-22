const entrarButton = document.getElementById('button-login');

function alertButton() {
  const valorEmail = document.getElementById('user-email-phone').value;
  alert(valorEmail);
}

entrarButton.addEventListener('click', alertButton);
