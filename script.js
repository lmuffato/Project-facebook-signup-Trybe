window.onload = function () {
    
    let btnLogin = document.getElementById('button-login');
    btnLogin.addEventListener('click', () => {
        let inputName = document.getElementById('user-email-phone-label').value;
        let inputPw = document.getElementById('user-password-label').value;
        alert('Login: ' + inputName + ' senha ' + inputPw) 
    })
}