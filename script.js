const loginBut = document.getElementById('button-login');

const nameValue = document.getElementById('user-email-phone');

function alertBut() {
  alert(nameValue.value);
}

loginBut.addEventListener('click', alertBut);
