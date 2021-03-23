const buttonLogin = document.getElementById('button-login');

function loginAlert() {
    alert(document.getElementById('user-email-phone').value);
}

buttonLogin.addEventListener('click', loginAlert);