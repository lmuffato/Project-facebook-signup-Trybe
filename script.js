function loginAlert() {
  const btnLogin = document.getElementById('button-login');
  let inputText = '';
  btnLogin.addEventListener('click', () => {
    inputText = document.getElementById('user-email-phone').value;
    alert(inputText);
  });
}

window.onload = function run() {
  loginAlert();
};
