function alert1() {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alert1);

// criar uma variável q chama o id do form e criar outra variável com os elementos da variável anterior
const fbForm = document.querySelectorAll('.validate');
const arrayInputs = fbForm;
const span = document.createElement('span');
const facebookForm = document.querySelector('#facebook-form');
const validateGender = document.querySelectorAll('.validate-gender');

// Requisito 18 resolvido graças aos ensinamentos do Lucas Pedroso. Grande Lucasss!!!
// cria função para checar inputs radio

function validateRadio() {
  for (let index = 0; index < validateGender.length; index += 1) {
    if (validateGender[index].checked) {
      return true;
    }
  }
  return false;
}
// criar função com for para passar por todos os elementos do arrayImputs, excluindo a posicao do gender

function validateRegister(event) {
  event.preventDefault();
  for (let index = 0; index < arrayInputs.length; index += 1) {
    if (arrayInputs[index].value === '' || validateRadio() === false) {
      span.innerHTML = 'Campos inválidos';
      facebookForm.appendChild(span);
      return true;
    }
  } return false;
}

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', validateRegister);

const personalizeGender = document.querySelector('#other');

function genderOther() {
  if (personalizeGender.checked) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'personalizeGender';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    document.querySelector('#addInput').appendChild(newInput);
  }
}
personalizeGender.addEventListener('click', genderOther);
// Projeto da Helô (:
