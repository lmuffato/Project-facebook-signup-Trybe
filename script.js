const button = document.getElementById('button-login');
const valorDoInput = document.querySelector('#user-email-phone');
button.addEventListener('click', () => {
  alert(valorDoInput.value);
});

// const valorSobrenome = document.getElementById('lastname');
// const valorNome = document.getElementById('firstname');
// const valorEmailPhone = document.getElementById('phone_email');
// const valorData = document.getElementById('datanasc');
// const valorSenha = document.getElementById('password');
const valorP = document.querySelector('.text-invalido');
const textInvalido = 'Campos inválidos';

function verificaNome() {
  const valorNome = document.getElementById('firstname');
  if (valorP.value === undefined && valorNome.value === '') {
    valorP.innerHTML = textInvalido;
  }
}

function verificaSobrenome() {
  const valorSobrenome = document.getElementById('lastname');
  if (valorP.value === undefined && valorSobrenome.value === '') {
    valorP.innerHTML = textInvalido;
  }
}

function verificaEmailPhone() {
  const valorEmailPhone = document.getElementById('phone_email');
  if (valorP.value === undefined && valorEmailPhone.value === '') {
    valorP.innerHTML = textInvalido;
  }
}

function verificaSenha() {
  const valorSenha = document.getElementById('password');
  if (valorP.value === undefined && valorSenha.value === '') {
    valorP.innerHTML = textInvalido;
  }
}

// function verificaData() {
//   if (valorP.value === undefined && valorData.value === '') {
//     valorP.innerHTML = textInvalido;
//   }
// }

const pers = document.getElementById('personalizado');
const pegaDiv = document.getElementById('genderSpace');

const criarInput = () => {
  if (pegaDiv.className !== 'existeClasse') {
    const inputGender = document.createElement('input');
    inputGender.type = 'text';
    inputGender.placeholder = 'Gênero (opcional)';
    inputGender.name = 'gender-custom';
    inputGender.className = 'generos';
    pegaDiv.className = 'existeClasse';
    pegaDiv.appendChild(inputGender);
  }
};

pers.addEventListener('click', criarInput);

// Requisito 20 (Função que cria a div dos dados no forms)
// const section = document.querySelector('.right-content');

// const valueNameSobrenome = () => `Olá, ${valorNome.value} ${valorSobrenome.value}`;

// const valueEmailPhone = () => valorEmailPhone.value;

// const valueData = () => valorData.value;

// const valueGenero = () => {
//   const inputGeneros = document.querySelectorAll('.generos');
//   for (let index = 0; index < inputGeneros.length: index += 1) {
//     if (inputGeneros[index].checked) {
//       return inputGeneros[index].value;
//     }
//   }
// }

function verificaInputsVazios() {
  verificaNome();
  verificaSobrenome();
  verificaEmailPhone();
  verificaSenha();
  // verificaData();
  // createDivDados();
}

const botaoCadastro = document.getElementById('facebook-register');
botaoCadastro.addEventListener('click', verificaInputsVazios);

function stopDefAction(event) {
  event.preventDefault();
}

botaoCadastro.addEventListener('click', stopDefAction, false);
