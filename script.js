const alertButton = document.getElementById('button-login');
alertButton.addEventListener('click', () => {
  const loginValue = document.getElementById('user-email-phone').value;
  alert(loginValue);
});
