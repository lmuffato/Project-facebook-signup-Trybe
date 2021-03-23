const botaoEntrar = document.getElementById('button-login');

function alerta() {
  const email = document.getElementById('user-email-phone').value;
  if (email !== undefined) {
    alert(email);
  }
}
botaoEntrar.addEventListener('click', () => {
  alerta();
});

const botaoCadastre = document.getElementById('facebook-register');

/* A lógica utilizada abaixo foi retirada do link: https://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message

E o entedimento dos conteúdos dos links:
- https://www.w3schools.com/jsref/event_oninvalid.asp
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity
- https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Form_validation */

botaoCadastre.addEventListener('click', () => {
  const formField = document.getElementsByTagName('input');
  for (let index = 0; index < formField.length; index += 1) {
    formField[index].oninvalid = (e) => {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        e.target.setCustomValidity('Campos inválidos');
      }
    };
  }
});

/* function checkInputForm() {
  const formField = document.getElementById('form-name');
  const formInput = formField.getElementsByTagName('input').value;
  if (formInput === undefined) {
    formInput.setCustomValidity('Campos inválidos');
  }
}

botaoCadastre.addEventListener('click', checkInputForm); */

// Requisito 19

const clickCustom = document.getElementById('check-personalizado');

function createElement() {
  const genderContent = document.querySelector('.gender-content');
  const inputCustom = document.createElement('input');

  genderContent.appendChild(inputCustom);
  inputCustom.placeholder = 'Gênero (opcional)';
  inputCustom.name = 'gender-custom';
}

clickCustom.addEventListener('click', createElement);
