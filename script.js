function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

window.onload = function startSession() {
  activeAlert();
};
