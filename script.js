let getButtonEntrar = document.querySelector('#button-login');

getButtonEntrar.addEventListener('click', spamAlert);

function spamAlert() {
  alert(document.querySelector('#user-email-phone').value);
}
