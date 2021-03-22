const loginBtn = document.getElementById('button-login');
const userEmailInput = document.getElementById('user-email-phone');

function emitAlert(e) {
  e.preventDefault();
  alert(userEmailInput.value);
}

loginBtn.addEventListener('click', emitAlert);
