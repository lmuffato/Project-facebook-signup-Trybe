const buttonLogin = document.querySelector('#button-login');
const genderCustom = document.querySelector('.gender-custom');
const maleButton = document.querySelector('#genderM');
const feminButton = document.querySelector('#genderF');
const genderPersonalize = document.querySelector('#genderP');

// REQUISITO 7//

function alertLogin() {
  buttonLogin.addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
}
alertLogin();

// REQUISITO 19 //
// criando input gênero personalizado //
function openCustom() {
  // const genderCustom = document.querySelector('.gender-custom');
  // const genderPersnalize = document.querySelector('#genderP');
  genderPersonalize.addEventListener('click', () => {
    if (!document.querySelector('#inputP')) {
      const createInput = document.createElement('input');
      createInput.placeholder = 'Gênero (opcional)';
      createInput.type = 'text';
      createInput.id = 'inputP';
      createInput.name = 'gênero personalizado';
      genderCustom.appendChild(createInput);
    }
  });
}
// removendo input personalizado //
function removeInput() {
  maleButton.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
  feminButton.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
}

window.onload = () => {
  alertLogin();
  openCustom();
  removeInput();
};
