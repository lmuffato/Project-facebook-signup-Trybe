function submit() {
  alert(document.getElementById('user-email-phone').value);
}

const buttonSubmit = document.getElementById('button-login');
buttonSubmit.addEventListener('click', submit);
