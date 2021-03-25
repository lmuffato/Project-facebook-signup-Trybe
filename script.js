// requisito 7
const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);

// requisito 20
// seleciono todos os valores dos inputs
function changeContent() {
  const name = document.querySelector('#firstname').value;
  const Lastname = document.querySelector('#lastname').value;
  const phoneEmail = document.querySelector('#phone-email').value;
  const birthdate = document.querySelector('#birthdate').value;
  // como os generos estão em um array faço um for para ver qual está marcado e pego o valor do que está checked
  const inputRadio = document.querySelectorAll('.input-radio');
  let radioValue = '';
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked) {
      radioValue = inputRadio[index].value;
    }
  }
  // busco a classe rigth-content e subsituo o conteeudo dela pelos valores que quero com o innet.text
  const rightContent = document.querySelector('.right-content');
  rightContent.innerText = `Olá, ${name} ${Lastname} 
  ${phoneEmail} 
  ${birthdate} 
  ${radioValue}`;
}

// requisito 18 validar se todos os campos foram preenchidos
function validateInputText() {
  // estou validando todo os input de type text, para sabe se estão vazios ou não. Se estão vazio conto uma vez, se estão preenchidos não conto
  const inputText = document.querySelectorAll('.input-text');
  let validate = 0;

  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      validate += 1;
    }
  }
  console.log(validate);
  return validate;
}

function validateInputRadio() {
  // estou validando todo os input de type radio, para sabe se estão marcados ou não. já começa contando uma vez pois sempre vão existir inputs não checked, se caso algum estiver checked não conto nenhum deles.
  const inputRadio = document.querySelectorAll('.input-radio');
  let validate = 1;

  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked === true) {
      validate = 0;
    }
  }
  console.log(validate);
  return validate;
}

const message = document.createElement('span');
const div = document.querySelector('#error-message');
div.appendChild(message);

function validateInputs(event) {
  event.preventDefault();
  const validateAll = validateInputText() + validateInputRadio();

  if (validateAll === 0) {
    changeContent();
  } else if (validateAll >= 1) {
    message.innerText = 'Campos inválidos';
  } else {
    message.innerText = '';
  }
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', validateInputs);

// requisito 19 adicionar campo personalizado
const pers = document.getElementById('personalizado');
const fem = document.getElementById('feminino');
const mas = document.getElementById('masculino');

function check() {
  const containerGender = document.getElementById('gender-container');
  console.log(pers.checked);

  if (pers.checked) {
    containerGender.style.display = 'flex';
  } else {
    containerGender.style.display = 'none';
  }
}
pers.addEventListener('click', check);
fem.addEventListener('click', check);
mas.addEventListener('click', check);
