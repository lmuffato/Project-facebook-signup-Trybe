const button = document.getElementById('button-login');
const valorDoInput = document.querySelector('#user-email-phone');
button.addEventListener('click', () => {
  alert(valorDoInput.value);
});

const valorP = document.querySelector('.text-invalido');
const textInvalido = 'Campos inválidos';

function verificaNome() {
  const valorNome = document.getElementById('firstname');
  if (valorP.value === undefined) {
    if (valorNome.value === '') {
      valorP.innerHTML = textInvalido;
    }
  }
}

function verificaSobrenome() {
  const valorSobrenome = document.getElementById('lastname');
  if (valorP.value === undefined) {
    if (valorSobrenome.value === '') {
      valorP.innerHTML = textInvalido;
    }
  }
}

function verificaEmailPhone() {
  const valorEmailPhone = document.getElementById('phone_email');
  if (valorP.value === undefined) {
    if (valorEmailPhone.value === '') {
      valorP.innerHTML = textInvalido;
    }
  }
}

function verificaSenha() {
  const valorSenha = document.getElementById('password');
  if (valorP.value === undefined) {
    if (valorSenha.value === '') {
      valorP.innerHTML = textInvalido;
    }
  }
}

function verificaData() {
  const valorData = document.getElementById('datanasc');
  if (valorP.value === undefined) {
    if (valorData.value === '') {
      valorP.innerHTML = textInvalido;
    }
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
