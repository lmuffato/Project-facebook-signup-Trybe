const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  const emailOuTelefone = document.getElementById('user-email-phone');
  alert(emailOuTelefone.value);
});

//  Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido
const facebookForm = document.getElementById('facebook-form');
const span = document.createElement('span');
function validatingForm(event) {
  for (let key = 0; key < facebookForm.elements.length; key += 1) {
    if (facebookForm.elements[key].value === '') {
      event.preventDefault();
      span.innerHTML = 'Campos inválidos';
      facebookForm.appendChild(span);
      console.log('estou funfando');
    }
  }
}

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', validatingForm);

<<<<<<< HEAD
/* Substitua o conteúdo do container com a classe right-content se o formulário
estiver completamente preenchido e validado */
// Faltam os requisitos 19 e 20.
=======
function createField() {
  const genderField = document.getElementById('gender-custom');
  genderField.style.display = 'flex';
}

document.addEventListener('click', createField);
>>>>>>> 833af0c6f31d2a4f8884661a6c6a0ccef109c6fb
