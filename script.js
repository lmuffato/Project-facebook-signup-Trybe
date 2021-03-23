function buttonLogin() {
  const takeButton = document.querySelector('#button-login');
  takeButton.addEventListener('click', () => {
    const takeLogin = document.querySelector('input#user-email-phone').value;
    alert(takeLogin);
  });
}
buttonLogin();

function confereRadioChecked() {
  const takeRadio = document.querySelectorAll('input');
  let conta = 0;
  for (let i = 0; i < takeRadio.length; i += 1) {
    if (takeRadio[i].type === 'radio' && takeRadio[i].checked === true) {
      conta += 1;
    }
  }
  return conta;
}

function validacao() {
  const entradaDeDados = document.querySelectorAll('input');
  const takeButton = document.querySelector('#facebook-register');
  takeButton.addEventListener('click', (e) => {
    for (let index = 2; index < entradaDeDados.length; index += 1) {
      if (entradaDeDados[index].value === '' || confereRadioChecked() === 0) {
        alert('Campos inválidos');
        break;
      }
    }
    e.preventDefault();
  });
}
validacao();

function addInput() {
  const takeInputRadio = document.getElementById('gender-options');
  const createInput = document.createElement('input');
  createInput.id = 'input-gender';
  createInput.setAttribute('name', 'gender-custom');
  createInput.setAttribute('placeholder', 'Gênero (opcional)');
  takeInputRadio.appendChild(createInput);
}

function removeInput() {
  const takeIdGender = document.getElementById('input-gender');
  takeIdGender.remove();
}

function checkRadioOption() {
  const takeDivGender = document.getElementById('gender-options');
  takeDivGender.addEventListener('click', () => {
    const takeInputOther = document.getElementById('personalizado');
    const takeInput = document.querySelectorAll('input');
    for (let i = 0; i < takeInput.length; i += 1) {
      console.log(takeInput[i].value);
      if (takeInputOther.checked !== true) {
        removeInput();
        break;
      } else {
        addInput();
        break;
      }
    }
  });
}
checkRadioOption();
