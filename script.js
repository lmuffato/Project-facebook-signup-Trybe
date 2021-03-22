const emailLoginBtn = document.getElementById('button-login');

function emailAlert() {
  return alert(document.getElementById('user-email-phone').value);
}

emailLoginBtn.addEventListener('click', emailAlert());
