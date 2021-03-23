function clickLoginBtn() {
  alert(document.getElementById('user-email-phone').value);
}

const loginBtn = document.getElementById('button-login');
loginBtn.addEventListener('click', clickLoginBtn);
