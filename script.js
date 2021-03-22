function alertLogin() {
  alert(document.querySelector('#user-email-phone').value);
}

const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', alertLogin);

// const gender = document.querySelector('#other');

// function otherGender() {
//   const otherGenderInput = document.querySelector('.input-gender-hidden');
//   if (gender.checked) {
//     otherGenderInput.style.display = 'unset';
//   }
// }

// gender.addEventListener('click', otherGender);
