function validaLogin(emailOuTelefone, senha) {
  if (emailOuTelefone === '' || senha === '') {
    alert('Preencha todos os campos.');
    return false;
  }

  return true;
}

function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  const senha = document.getElementById('user-password').value;
  if (validaLogin(emailOuTelefone, senha)) {
    alert(emailOuTelefone);
  }
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);
