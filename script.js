// bloco de declaraçao de variaveis globais
const entrarButton = document.getElementById('button-login');
const formResults = document.getElementsByTagName('input');
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');
// const buttonLogin = document.getElementById('button-login');

// Bloco de declaração de funções

entrarButton.addEventListener('click', () => {
  const emailContent = document.getElementById('user-email-phone').value;
  window.alert(emailContent);
});

const isRadioChecked = (index) => {
  let checked = false;
  if (formResults[index].type === 'radio' && formResults[index].checked) {
    checked = true;
  }
  return checked;
};

const checkValues = (contentForm) => {
  const values = Object.values(contentForm);
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      result.innerText = 'Campos inválidos';
    }
  }
};

buttonSubscrive.addEventListener('click', (event) => {
  event.preventDefault();
  const contentForm = {};
  for (let index = 0; index < formResults.length; index += 1) {
    if (isRadioChecked(index)) {
      contentForm[formResults[index].name] = formResults[index].value;
    } else {
      contentForm[formResults[index].name] = formResults[index].value;
    }
  }
  checkValues(contentForm);
});

// bloco de ações de inicialização
