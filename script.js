const alertButton = document.getElementById('button-login');
alertButton.addEventListener('click', function() {
  loginValue = document.getElementById('user-email-phone').value;
  alert(loginValue);
});