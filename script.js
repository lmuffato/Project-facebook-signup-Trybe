const getButtonEntrar = document.querySelector('#button-login');

function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}

getButtonEntrar.addEventListener('click', spamAlert);
