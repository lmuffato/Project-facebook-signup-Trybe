const button = document.getElementById('button-login');
function submitCancel(event) {
  event.preventDefault();
  const login = document.querySelector('#user-email-phone').value;
  alert(`${login}`);
}
button.addEventListener('click', submitCancel);
