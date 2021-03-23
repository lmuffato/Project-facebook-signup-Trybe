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

botaoCadastre.addEventListener('click', () => {
  const formField = document.getElementsByTagName('input');
  for (let index = 0; index < formField.length; index += 1) {
    formField[index].oninvalid = (e) => {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        e.target.setCustomValidity('Campos inválidos');
      }
    };
    formField[index].oninput = (e) => {
      e.target.setCustomValidity('');
    };
  }
});
