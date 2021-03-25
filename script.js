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
  } else {
    genderCustom.setAttribute('type', 'hidden');
  }
}

createCustomGender();
