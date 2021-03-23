window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone').value;
    alert(inputName);
  });
};
