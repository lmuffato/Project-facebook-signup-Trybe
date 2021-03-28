// Requisito 7
const btnEntrar = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
btnEntrar.addEventListener('click', () => alert(userEmailPhone.value));

// Requisito 18
// Referencia para resolução do requisito : https://www.youtube.com/watch?v=GTMEuHxh8aQ
function verifyError(field) {
  let foundError = false;
  for (const key in field.validity) {
    if (key !== 'customError' && Object.values(field.validity)) {
      foundError = key;
    }
  }
  return foundError;
}

function customValidation(event) {
  const field = event.target;
  const error = verifyError(field);

  if (error) {
    field.setCustomValidity('Campos inválidos');
  }
  field.setCustomValidity('');
}

function eventRequired() {
  const fields = document.querySelectorAll('[required]');
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].addEventListener('invalid', customValidation);
  }
}

const btncadastra = document.getElementById('facebook-register');
btncadastra.addEventListener('click', eventRequired);
