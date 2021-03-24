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

function returnText() {
  const entradaDeDados = document.querySelectorAll('input');
  const createInnerText = document.createElement('span');
  for (let index = 2; index < entradaDeDados.length; index += 1) {
    if (entradaDeDados[index].value === '' || confereRadioChecked() === 0) {
      const takeForm = document.querySelectorAll('form')[1];
      createInnerText.innerText = 'Campos inválidos';
      takeForm.appendChild(createInnerText);
      break;
    }
  }
}

function validacao() {
  const takeButton = document.querySelector('#facebook-register');
  takeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const takeSpan = document.querySelectorAll('span');
    if (takeSpan.length > 0) {
      return false;
    }
    returnText();
  });
}
validacao();

function addInput() {
  const takeInputRadio = document.getElementById('gender-options');
  const createInput = document.createElement('input');
  createInput.id = 'input-gender';
  createInput.setAttribute('name', 'gender-custom');
  createInput.setAttribute('placeholder', 'Gênero (opcional)"');
  takeInputRadio.appendChild(createInput);
}
addInput();

function checkRadioOption() {
  const takeDivGender = document.getElementById('gender-options');
  takeDivGender.addEventListener('click', () => {
    const takeInputOther = document.getElementById('personalizado');
    const takeInput = document.getElementById('input-gender');
    if (takeInputOther.checked) {
      takeInput.style.display = 'block';
    } else {
      takeInput.style.display = 'none';
    }
  });
}
checkRadioOption();
