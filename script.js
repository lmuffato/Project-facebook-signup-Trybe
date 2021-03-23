function clickLoginBtn() {
  alert(document.getElementById('user-email-phone').value);
}

const loginBtn = document.getElementById('button-login');
loginBtn.addEventListener('click', clickLoginBtn);

function check(evt) {
  evt.preventDefault();
  const inputs = document.querySelectorAll('.form-input');
  const signupForm = document.querySelector('.signup-form');
  for (let index = 0; index <= inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const invalidInput = document.createElement('span');
      invalidInput.innerText = 'Campos inválidos';
      signupForm.appendChild(invalidInput);
      return;
    }
  }
}

const signUpBtn = document.getElementById('facebook-register');
signUpBtn.addEventListener('click', check);
