function alertEmail() {
  const btnLogin = document.getElementById('button-login');

  btnLogin.addEventListener('click', () => {
    const emailValue = document.getElementById('user-email-phone').value;
    alert(`${emailValue}`);
  });
}

window.onload = () => {
  alertEmail();
};
