function alert1() {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alert1);


// criar uma variável q chama o id do form e criar outra variável com os elementos da variável anterior
const fbForm = document.getElementById('facebook-form');
const arrayImputs = fbForm.elements;
const span = document.createElement('span');

// criar função com for para passar por todos os elementos do arrayImputs, excluindo a posicao do gender

function validateRegister() {
  for(index = 0; index < arrayImputs.length; index += 1) {
    if (arrayImputs[index].value === '' && !arrayImputs[8].value) {
      event.preventDefault();
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
// const buttonRegister = document.querySelector('#facebook-register');
// buttonRegister.addEventListener('click', validateRegister);

// var x = document.querySelector("#facebook-form").elements.length;