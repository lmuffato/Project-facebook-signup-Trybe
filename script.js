const buttonLogin = document.querySelector('#button-login');
const genderCustom = document.querySelector('.gender-custom');
const maleButton = document.querySelector('#genderM');
const feminButton = document.querySelector('#genderF');
const genderPersonalize = document.querySelector('#genderP');
const buttonSubmit = document.querySelector('#facebook-register');
// REQUISITO 7//

function alertLogin() {
  buttonLogin.addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
}

// ---------------------------------------------------------------------------------------------- //

// REQUISITO 18 //
// Verificar os Campos não preenchidos e retornar "Campos inválidos" //
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const required = document.querySelectorAll('.required-input');
  const getError = document.querySelector('#error');
  for (let index = 0; index < required.length; index += 1) {
    if (required[index].value === '') {
      getError.innerHTML = 'Campos inválidos';
    }
  }
});
// REQUISITO 20 //
// function insertContent(event) {
//   if (msgError(event)) {
//     const name = document.querySelector('#firstname').value;
//     const last = document.querySelector('#lastname').value;
//     const email = document.querySelector('#phone_email').value;
//     const birth = document.querySelector('#insertDate').value;
//     const gender = document.querySelector('input[type="radio"]:checked').value;
//     const newContent = document.querySelector('.right-content');
//     newContent.innerHTML = '';
//     newContent.innerText = `Olá, ${name} ${last} ${email} ${birth} ${gender}`;
//   }
// }
// adicionando evento click no botão registre-se //
// const buttonSubmit = document.querySelector('#facebook-register');
// buttonSubmit.addEventListener('click', insertContent);

// ---------------------------------------------------------------------------------------------- //

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
      createInput.name = 'gender-custom';
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
