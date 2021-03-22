const emailLoginBtn = document.getElementById('button-login');

function emailAlert() {
  const emailLoginValue = document.getElementById('user-email-phone').value;
  alert(emailLoginValue);
}

emailLoginBtn.addEventListener('click', emailAlert);
