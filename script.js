const selectButton = document.querySelector('#button-login');
const selectInput = document.querySelector('#user-email-phone');
// const sendForm = document.querySelector('#facebook-register');
// const selectInputs = document.querySelectorAll('.inputs, .inputs2, .inputRadio');
// const formSignUp = document.querySelector('#form-signup');
// const rightContent = document.querySelector('.right-content');
// const signupForm = document.querySelector('#signup-form');
// const divMensagem = document.querySelector('#mensagem');

function alertInput() {
  alert(selectInput.value);
}

// function checkInputs() {
//   let msg = '';
//   for (let index = 0; index < selectInputs.length; index += 1) {
//     const element = selectInputs[index];
//     if (element.value === '') {
//       msg += 'Campos inválidos';
//     } if (element.type === 'radio' && !element.checked) {
//       msg += 'Campos inválidos';
//     }
//   }
//   divMensagem.innerHTML = msg;
// }

// function checkInputs() {
//   let mensagem = '';
//   for (let index = 0; index < selectInputs.length; index += 1) {
//     const element = selectInputs[index];
//     if (element.value === '') {
//       mensagem = 'Campos inválidos';
//     } if (element.type === 'radio' && !element.checked) {
//       mensagem = 'Campos inválidos';
//     }
//   }
//   divMensagem.innerHTML = mensagem;
// }

selectButton.addEventListener('click', alertInput);
// sendForm.addEventListener('click', checkInputs);

// function preventDefaultSettings(event) {
//   event.preventDefault();
//   const allInputs = document.querySelectorAll('input', 'select', 'textarea');
//   let msg = '';
//   for (let index = 0; index < allInputs.length; index += 1) {
//     const element = allInputs[index];
//     if (element.value === '') {
//       msg += `Campo ${element.id} está vazio `;
//     } if (element.type === 'radio' && !element.checked) {
//       msg += `Campo ${element.id} não esta selecionado `;
//     }
//   }
//   alert(msg);
// }
