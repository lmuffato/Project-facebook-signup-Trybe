/* ----- function alert button ----- */
const buttonLoggin = document.querySelector('#button-login');

function alertaT() {
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);

/* ----- function add personalized gender ----- */
function createCustomGender() {
  const personalizado = document.querySelector('#Personalizado');
  const genderCustom = document.querySelector('#custom-gender');
  if (personalizado.checked === true) {
    genderCustom.setAttribute('type', 'text');
    genderCustom.value = '';
  } else {
    genderCustom.setAttribute('type', 'hidden');
  }
}

createCustomGender();

/* ----- function validate inputs ----- */
const registerButton = document.querySelector('#facebook-register');
const form = document.querySelector('#form');

function validate(e){
  e.preventDefault();
  const arrayInputs = document.querySelectorAll('.is-filled');
  let validateCheck = 0;

  for (let index = 0; index < arrayInputs.length; index += 1) {
    if (arrayInputs[index].value === '' ) {
      validateCheck += 1;
    } 
  }
  if ( validateCheck !== 0) {
    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = 'Campos inválidos';
    form.appendChild(errorMessage);
  }
}

registerButton.addEventListener('click', validate);
