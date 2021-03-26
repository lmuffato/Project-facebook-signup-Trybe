// bloco de declaraçao de variaveis globais
const entrarButton = document.getElementById('button-login');
const formResults = document.querySelectorAll('.form-new input');
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');
const selectCustonGender = document.querySelector('#other');
const regularGender = document.querySelectorAll('.regular');
const resumeForm = document.getElementById('resume-form');
const subscriveForm = document.querySelector('.form-new');

// Bloco de declaração de funções

entrarButton.addEventListener('click', () => {
  const emailContent = document.getElementById('user-email-phone').value;
  window.alert(emailContent);
});

const checkValues = (contentForm) => {
  const values = Object.values(contentForm);
  let isValid = true;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      result.innerText = 'Campos inválidos';
      isValid = false;
    }
  }
  if (isValid) {
    subscriveForm.classList.add('no-view');
    const resume = `Olá, ${contentForm.firstname} ${contentForm.lastname}!
    Confira seus dados: 
    e-mail ou telefone: ${contentForm.phone_email}
    Data de nascimento: ${contentForm.birthdate}
    Opção de gênero: ${contentForm.gender}`;
    resumeForm.innerText = resume;
  }
};

buttonSubscrive.addEventListener('click', (event) => {
  event.preventDefault();
  result.innerText = '';
  const contentForm = {};
  for (let index = 0; index < formResults.length; index += 1) {
    if (formResults[index].checked) {
      contentForm[formResults[index].name] = formResults[index].value;
    } else if (formResults[index].type !== 'radio') {
      contentForm[formResults[index].name] = formResults[index].value;
      console.log(index, formResults[index].name, formResults[index].value);
    }
  }
  checkValues(contentForm);
});

selectCustonGender.addEventListener('change', () => {
  const inputGender = document.createElement('input');
  inputGender.type = 'text';
  inputGender.name = 'gender-custom';
  inputGender.placeholder = 'Gênero (opcional)';
  subscriveForm.appendChild(inputGender);
  subscriveForm.insertBefore(inputGender, buttonSubscrive);
});

const removePersonalGender = () => {
  console.log('saiu');
};

// Blodo de declaração de escutadores

regularGender[0].addEventListener('change', removePersonalGender);
regularGender[1].addEventListener('change', removePersonalGender);

// bloco de ações de inicialização
