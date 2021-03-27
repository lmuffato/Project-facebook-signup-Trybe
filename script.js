function mostrarAlert() {
  const emailtel = document.getElementById('user-email-phone');
  alert(emailtel.value);
}

const botao = document.getElementById('button-login');
botao.addEventListener('click', mostrarAlert);

/*const btn = document.getElementById('facebook-register');
const checarseTem = () => {
  console.log('entrou função');
  const inputs = document.getElementById('cadastro').elements;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === undefined) {
      alert('Campos inválidos');
      return;
    }
  }
};
btn.addEventListener('click', checarseTem);*/
