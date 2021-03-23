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
