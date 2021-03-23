// add alert no button login
const loginButton = document.getElementById('button-login');
function buttonAlert() {
  const camp = document.getElementById('user-email-phone').value;
  alert(camp);
}
loginButton.addEventListener('click', buttonAlert);

// add o personalize option gender
const toBe = document.getElementById('to-be');
const toBeInput = document.createElement('input');
toBeInput.id = 'to-be-input';
toBeInput.name = 'gender-custom';
toBeInput.placeholder = 'Gênero (opcional)';
function newCamp() {
  if (toBe.checked === true) {
    document.getElementById('gender-input-if-true').appendChild(toBeInput);
  }
}
function removeCamp() {
  if (toBe.checked === false) {
    document.getElementById('gender-input-if-true').removeChild(toBeInput);
  }
}
const male = document.getElementById('male');
const female = document.getElementById('female');
male.addEventListener('click', removeCamp);
female.addEventListener('click', removeCamp);
toBe.addEventListener('click', newCamp);
