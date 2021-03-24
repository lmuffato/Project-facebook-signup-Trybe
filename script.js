// Bloco de declaração de variáveis globais
const formResults = document.querySelectorAll('.form-new input');
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');
// const buttonLogin = document.getElementById('button-login');

// Bloco de declaração de funções
const isRadioChecked = (index) => {
  let checked = false;
  if (formResults[index].type === 'radio' && formResults[index].checked) {
    checked = true;
  }
  return checked;
};

buttonSubscrive.addEventListener('click', (event) => {
  event.preventDefault();
  const contentForm = {};
  for (let index = 0; index < formResults.length; index += 1) {
    if (isRadioChecked(index)) {
      contentForm[formResults[index].name] = formResults[index].value
    } else {
      contentForm[formResults[index].name] = formResults[index].value;
    }
  }
  console.log(contentForm);
});

// bloco de ações de inicialização

result.innerText = window.location.href;
