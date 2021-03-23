function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

function checkInputs () {
  const inputs = document.querySelectorAll('.main-form input');
  let emptyField = false;
  for (let index = 0; index < inputs.length-3; index += 1) {
    if (inputs[index].value === '') {
      console.log(inputs[index]);
      emptyField = true;
    }
  }

  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let indexRadios = 0; indexRadios < inputsRadio.length; indexRadios += 1) {
    if (inputsRadio[indexRadios].checked) {
      count += 1;
    }
  }

  if (emptyField === true || count === 0) {
    alert('Campos inválidos');
  }
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', checkInputs);

window.onload = function startSession() {
  activeAlert();
};
