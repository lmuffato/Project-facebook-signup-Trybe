window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone-label').value;
    const inputPw = document.getElementById('user-password-label').value;
    alert(`Login: ${inputName}  Senha:  ${inputPw}`);
  });
};
