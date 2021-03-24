/* ----- function alert button ----- */
const buttonLoggin = document.querySelector('#button-login');

function alertaT() {
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);

/* ----- function add personalized gender ----- */
const personalizado = document.querySelector('#Personalizado');

function createCustomGender() {
  const gender = document.querySelector('#gender-container');
  let genderCustom = document.createElement('input');
  genderCustom.type = "text";
  genderCustom.placeholder = "Gênero (opcional)"
  gender.appendChild(genderCustom);
}

personalizado.addEventListener('click', createCustomGender);
