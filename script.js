document.querySelector('#button-login').addEventListener('click', () => {
  const phoneOrEmail = document.querySelector('#user-email-phone').value;
  alert(phoneOrEmail);
});

const buttonCadastro = document.getElementById('facebook-register');
const newFields = document.querySelector('.fields');

function stopDefAction(evt) {
  evt.preventDefault();
}

window.onload = function init() {
  buttonCadastro.addEventListener('click', () => {
    const arrayValues = [newFields[0].value, newFields[1].value,
      newFields[2].value, newFields[4].value, newFields[8].value];
    for (let index = 0; index < arrayValues.length; index += 1) {
      if (arrayValues[index] === '') {
        const element = document.createElement('p');
        const form = document.getElementById('collectName');
        element.innerText = 'Campos inválidos';
        form.appendChild(element);
        stopDefAction();
      }
    }
  });
};
