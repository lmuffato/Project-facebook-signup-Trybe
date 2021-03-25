function alert1() {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alert1);

// criar uma variável q chama o id do form e criar outra variável com os elementos da variável anterior
const fbForm = document.querySelectorAll('.validate');
const arrayInputs = fbForm;
const span = document.createElement('span');
const facebookForm = document.querySelector('#facebook-form');
const validateGender = document.querySelectorAll('.validate-gender');

//cria funçaõ para checar inputs radio

function validateRadio () {
  for (let index = 0; index < validateGender.length; index += 1) {
    if (validateGender[index].checked) {
      return true;
    }
  }
  return false;
} 
// criar função com for para passar por todos os elementos do arrayImputs, excluindo a posicao do gender

function validateRegister(event) {
  event.preventDefault();
  for (let index = 0; index < arrayInputs.length; index += 1) {
    if (arrayInputs[index].value === '' || validateRadio() === false) {
      span.innerHTML = 'Campos inválidos';
      facebookForm.appendChild(span);
      return true;
    }
  } return false;
}

// function validateRegister() {
//   const validate = document.querySelectorAll('.validate');
//   if (validate === ' ') {
//     alert("Campos inválidos");
//   }
// }
const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', validateRegister);
