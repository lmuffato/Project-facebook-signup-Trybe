const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
const sendForm = document.querySelector('#facebook-register');
const selectInputs = document.querySelectorAll('.inputs, .inputs2');
const formSignUp = document.querySelector('#form-signup');
// const rightContent = document.querySelector('.right-content');
// const signupForm = document.querySelector('#signup-form');

function alertInput() {
  alert(selectInput.value);
}

function checkInputs() {
  for (let index = 0; index < selectInputs.length; index += 1) {
    if (selectInputs[index].value === '') {
      const creatP = document.createElement('p');
      creatP.innerHTML = 'Campos inválidos';
      formSignUp.appendChild(creatP);
    }
  }
}

selectButton.addEventListener('click', alertInput);
sendForm.addEventListener('click', checkInputs);
