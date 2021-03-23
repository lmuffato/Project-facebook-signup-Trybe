function buttonLogin() {
  const takeButton = document.querySelector('#button-login');
  takeButton.addEventListener('click', () => {
    const takeLogin = document.querySelector('#user-email-phone').innerHTML;
    alert(takeLogin);
  });
}
buttonLogin();
