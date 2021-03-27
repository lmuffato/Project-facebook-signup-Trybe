function showAlert() {
  const emailPhone = document.querySelector('#user-email-phone');

  alert(emailPhone.value);
}

function loginButton() {
  document.querySelector('#button-login').addEventListener('click', showAlert);
}

window.onload = () => {
  loginButton();
};

const registerButton = document.querySelector('#facebook-register');

function validateFields() {
  const input = document.querySelectorAll('#form-main input');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value.length === 0) {
      return false;
    }
  }
  return true;
}

function showMsg() {
  if (!validateFields()) {
    const spans = document.querySelectorAll('.check');
    for (let index = 0; index < spans.length; index++) {
      if (spans[index].classList.contains('check')) {
        spans[index].remove();
      }
    }
    const elementSpan = document.createElement('span');
    elementSpan.innerHTML = 'Campos inválidos';
    elementSpan.className = 'check';
    document.querySelector('#form-main').appendChild(elementSpan);
  }
}

registerButton.addEventListener('click', showMsg);

function showInputCustom() {
  const radios = document.getElementsByName('gender');
  radios[2].addEventListener('click', () => {
    const createElementeInput = document.createElement('input');
    createElementeInput.setAttribute('name', 'gender-custom');
    createElementeInput.setAttribute('type', 'text');
    createElementeInput.setAttribute('placeholder', 'Gênero (opcional)');
    document.querySelector('#custom').appendChild(createElementeInput);
  });
}

showInputCustom();

// function showValuesForm() {
//   registerButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const right = document.querySelector('#right-content');
//     right.setAttribute('display', 'none');
//   });
// }
// showValuesForm();
