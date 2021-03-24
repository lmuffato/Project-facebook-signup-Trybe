const button = document.getElementById('button-login');
const valorDoInput = document.querySelector('#user-email-phone');
button.addEventListener('click', () => {
  alert(valorDoInput.value);
});

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

function verificaData() {
  const valorData = document.getElementById('datanasc');
  if (valorP.value === undefined && valorData.value === '') {
    valorP.innerHTML = textInvalido;
  }
}

function verificaInputsVazios() {
  verificaNome();
  verificaSobrenome();
  verificaEmailPhone();
  verificaSenha();
  verificaData();
  // if (verificaNome() || verificaSobrenome() || verificaEmailPhone() || verificaSenha() || verificaData()) {
  //   console.log('entrou no if do verificaInputsVazios');
  //   const paragrafo = document.createElement('p');
  //   const divPai = document.querySelector('.msg-invalido');
  //   paragrafo.innerHTML = 'Campos inválidos';
  //   divPai.appendChild(paragrafo);
  // }
}

const botaoCadastro = document.getElementById('facebook-register');
botaoCadastro.addEventListener('click', verificaInputsVazios);

function stopDefAction(event) {
  event.preventDefault();
}

botaoCadastro.addEventListener('click', stopDefAction, false);

const pers = document.getElementById('personalizado');
const pegaDiv = document.getElementById('genderSpace');

const criarInput = () => {
  if (pegaDiv.className !== 'existeClasse') {
    const inputGender = document.createElement('input');
    inputGender.type = 'text';
    inputGender.placeholder = 'Gênero (opcional)';
    inputGender.name = 'gender-custom';
    pegaDiv.className = 'existeClasse';
    pegaDiv.appendChild(inputGender);
  }
};

pers.addEventListener('click', criarInput);
