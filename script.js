window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone').value;
    alert(inputName);
  });
  const btnRegister = document.getElementById('facebook-register');
  btnRegister.addEventListener('click', () => {
    const formValues = document.querySelectorAll('.right-content input').value;
    console.log(formValues);
  });
};
