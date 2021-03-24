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

const validMesseger = (fullName, email, date, gender) => {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';

  rightContent.innerText = `Olá, ${fullName}
  ${email}
  ${date}
  ${gender}`;
};

registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!validateForm()) {
    document.getElementById('invalid-message').innerText = 'Campos inválidos';
  } else {
    const firstName = registerForm.firstname.value;
    const lastName = registerForm.lastname.value;
    const email = registerForm.phone_email.value;
    const date = registerForm.birthdate.value;
    const gender = registerForm.gender.value;
    const fullName = `${firstName} ${lastName}`;

    validMesseger(fullName, email, date, gender);
  }
});

const customGenderInput = registerForm.gender[2];
const customGenderField = document.getElementById('gender-custom');
customGenderInput.addEventListener('change', () => {
  customGenderField.style.display = 'block';
});
