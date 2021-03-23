const loginBtn = document.getElementById('button-login');
const registerForm = document.forms[1];
const formFields = [];
formFields.push('firstname');
formFields.push('lastname');
formFields.push('phone_email');
formFields.push('password');
formFields.push('birthdate');
formFields.push('gender');
const registerBtn = document.getElementById('facebook-register');

loginBtn.addEventListener('click', () => {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
});

function validateForm() {
  let valid = true;
  for (let index = 0; index < formFields.length; index += 1) {
    const formItem = formFields[index];
    if (registerForm[formItem].value === '') {
      valid = false;
    }
  }
  return valid;
}

registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!validateForm()) {
    document.getElementById('invalid-message').innerText = 'Campos inválidos';
  }
});
