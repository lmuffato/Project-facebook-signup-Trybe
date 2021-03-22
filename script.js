const button = document.getElementById('button-login');
button.addEventListener('click', submitCancel);
function submitCancel(event) {
  event.preventDefault();
  const login = document.querySelector('#user-email-phone').value;
  alert(`${login}`);
};
