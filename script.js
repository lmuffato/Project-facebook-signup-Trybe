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
const arrayInputsValid = [];
arrayInputsValid.push(document.getElementById('firstname'));
arrayInputsValid.push(document.getElementById('lastname'));
arrayInputsValid.push(document.getElementById('phone_email'));
arrayInputsValid.push(document.getElementById('password'));
arrayInputsValid.push(document.getElementById('datanasc'));
const valorP = document.querySelector('.text-invalido');
const textInvalido = 'Campos inválidos';
const form = document.getElementById('cadastre');

const validaCampos = () => {
  let bool = true;
  for (let index = 0; index < arrayInputsValid.length; index += 1) {
    if (arrayInputsValid[index].value === '') {
      valorP.innerHTML = textInvalido;
      bool = false;
    }
  }
  return bool;
};

// Requisito 20

const addDados = (fullname, emailPhone, dataNasc, genero) => {
  const section = document.querySelector('.right-content');
  section.innerHTML = '';
  section.innerHTML = `Olá, ${fullname} 
  ${emailPhone}

  ${dataNasc}

  ${genero}`;
};

const dadosForms = () => {
  if (validaCampos()) {
    const fullname = `${form.firstname.value} ${form.lastname.value}`;
    const emailPhone = form.phone_email.value;
    const dataNasc = form.datanasc.value;
    const genero = form.gender.value;
    addDados(fullname, emailPhone, dataNasc, genero);
  }
};

// function verificaNome() {
//   const valorNome = document.getElementById('firstname');
//   if (valorP.value === undefined && valorNome.value === '') {
//     valorP.innerHTML = textInvalido;
//     return true;
//   }
// }

// function verificaSobrenome() {
//   const valorSobrenome = document.getElementById('lastname');
//   if (valorP.value === undefined && valorSobrenome.value === '') {
//     valorP.innerHTML = textInvalido;
//     return true;
//   }
// }

// function verificaEmailPhone() {
//   const valorEmailPhone = document.getElementById('phone_email');
//   if (valorP.value === undefined && valorEmailPhone.value === '') {
//     valorP.innerHTML = textInvalido;
//     return true;
//   }
// }

// function verificaSenha() {
//   const valorSenha = document.getElementById('password');
//   if (valorP.value === undefined && valorSenha.value === '') {
//     valorP.innerHTML = textInvalido;
//     return true;
//   }
// }

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
    inputGender.placeholder = '"Gênero (opcional)"';
    inputGender.name = 'gender-custom';
    inputGender.className = 'generos';
    pegaDiv.className = 'existeClasse';
    pegaDiv.appendChild(inputGender);
  }
};

pers.addEventListener('click', criarInput);

const botaoCadastro = document.getElementById('facebook-register');

function stopDefAction(event) {
  event.preventDefault();
}

botaoCadastro.addEventListener('click', stopDefAction, false);
botaoCadastro.addEventListener('click', validaCampos);
botaoCadastro.addEventListener('click', dadosForms);

// Eu (Adelino junior) pesquisei alguns códigos de colegas e vi
// uma forma de validação mais simples e curta para usar no código
// meu e de minha dupla nos requisitos 18 e 20
