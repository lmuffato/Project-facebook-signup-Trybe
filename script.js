const loginBtn = document.getElementById('button-login');

loginBtn.addEventListener('click', () => {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
});
