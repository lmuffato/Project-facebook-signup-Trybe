function login() {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
}

document.getElementById('button-login').addEventListener('click', login);
