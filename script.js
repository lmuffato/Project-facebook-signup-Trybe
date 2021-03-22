// add alert no button login
const loginButton = document.getElementById('button-login');
function buttonAlert() {
  const camp = document.getElementById('user-email-phone').value;
  alert(camp);
}
loginButton.addEventListener('click', buttonAlert);
