const buttonEnter = document.querySelector('#button-login');
const getLastElement = document.getElementById('term');

function verifyBlankFields() {
  const getInput = document.querySelectorAll('input');

  if (getLastElement.children.lenght !== 3) {
    getLastElement.lastElementChild.remove();
  }

  for (let index = 0; index < getInput.length; index += 1) {
    if (getInput[index].value === '') return true;
  }
}

function submit() {
  const getBtn = document.getElementById('facebook-register');
  getBtn.addEventListener('click', () => {
    if (verifyBlankFields()) {
      const createMsg = document.createElement('h3');
      getLastElement.appendChild(createMsg).innerText = 'Campos inválidos!';
    }
  });
}

buttonEnter.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('#user-email-phone');
  window.alert(email.value);
});

window.onload = () => {
  submit();
};
