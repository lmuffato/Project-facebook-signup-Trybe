function loginAlert() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    alert('Email ou telefone');
  });
}

window.onload = function run() {
  loginAlert();
};
