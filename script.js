const button = document.getElementById('button-login');
const valorDoInput = document.querySelector('#user-email-phone');
button.addEventListener('click', () => {
  alert(valorDoInput.value);
});

function verificaNome() {
  const valorNome = document.getElementById('firstname');
  console.log('Entrou no verificaNome');
  if (valorNome.value === '') {
    alert('Nome Vazio');
  } else {
    alert('Entrou no ELSE');
  }
}

function verificaInputsVazios() {
  verificaNome();
}

const botaoCadastro = document.getElementById('facebook-register');
botaoCadastro.addEventListener('click', verificaInputsVazios);
