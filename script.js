function buttonLogin() {
  const takeButton = document.querySelector('#button-login');
  takeButton.addEventListener('click', () => {
    const takeLogin = document.querySelector('input#user-email-phone').value;
    alert(takeLogin);
  });
}
buttonLogin();
