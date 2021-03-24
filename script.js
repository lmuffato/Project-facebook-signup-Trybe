function alertLogin() {
  alert(document.querySelector('#user-email-phone').value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertLogin);

// Requisito 18:
const btnRegister = document.getElementById('facebook-register');

function validationForm(event) {
  event.preventDefault();
  const fieldsForm = document.querySelectorAll('.right-content input');
  const form = document.querySelector('.right-content form');
  const error = document.querySelector('.error');
  const valuesInputForm = [];
  fieldsForm.forEach((input) => {
    valuesInputForm.push(input.value);
  });
  const valuesEmpty = valuesInputForm.filter((field) => field === '');
  if (valuesEmpty.length > 0 && error === null) {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = 'Campos inválidos';
    errorMessage.classList.add('error');
    form.appendChild(errorMessage);
  } else {
    form.removeChild(error);
  }
}

btnRegister.addEventListener('click', validationForm);
