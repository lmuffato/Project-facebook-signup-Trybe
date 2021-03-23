window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone').value;
    alert(inputName);
  });
};

const fields = document.querySelectorAll('[required]');

function verifyError(event) {
  const field = event.target;
  let foundError = false;
  if (field.validity.valueMissing === true) {
    foundError = true;
  }
  return foundError;
}

function validation(event) {
  const field = event.target;
  const error = verifyError(event);
  if (error) {
    field.setCustomValidity('Campos inválidos');
  } else {
    field.setCustomValidity('');
  }
}

for (let index = 0; index < fields.length; index += 1) {
  fields[index].addEventListener('invalid', validation);
}

for (let index = 0; index < fields.length; index += 1) {
  fields[index].addEventListener('keydown', validation);
}
