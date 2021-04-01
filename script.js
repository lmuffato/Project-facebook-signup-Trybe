// Requisito 7
const btnEntrar = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
btnEntrar.addEventListener('click', () => alert(userEmailPhone.value));

// Requisito 18
// Referencia para resolução do requisito : https://www.youtube.com/watch?v=GTMEuHxh8aQ
// function verifyError(field) {
//   let foundError = false;
//   const fieldValidty = Object.values(field.validity);

//   for (let index = 0; index < fieldValidty.length; index += 1) {
//     if (!'customError' && fieldValidty) {
//       foundError = true;
//     }
//   }
//   return foundError;
// }

// function customValidation(event) {
//   const field = event.target;
//   const error = verifyError(field);

//   if (error) {
//     field.setCustomValidity('Campos inválidos');
//   }
//   field.setCustomValidity('');
// }m

function eventRequired() {
  const msg = document.getElementById('msg');
  const fields = document.querySelectorAll('[required]');
  const mensagem = '<span><strong>Campos inválidos</strong></span>';
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].addEventListener('invalid', () => msg.innerHTML = mensagem);
  }
}

const btncadastra = document.getElementById('facebook-register');
btncadastra.addEventListener('click', eventRequired);
