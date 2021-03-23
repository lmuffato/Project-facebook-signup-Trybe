function displayAlert(event) {
  event.preventDefault();
  const userEmailBox = document.getElementById('user-email-phone');
  alert(userEmailBox.value);
}

window.onload = function init() {
  document
    .getElementById('button-login')
    .addEventListener('click', displayAlert, false);
};
