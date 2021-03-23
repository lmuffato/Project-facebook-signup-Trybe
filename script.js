function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);

// function verificaCampos(e) {
//   e.preventDefault();
//   const inputs = document.querySelectorAll('input');
//   const erro = document.createElement('p');
//   for (let index = 2; index < inputs.length; index += 1) {
//     const inputValue = inputs[index].value;
//     if (inputValue === '') {
//       erro.innerHTML = 'Campos inválidos';
//       erro.style.color = 'red';
//       const form = document.querySelector('#formMain');
//       form.appendChild(erro);
//       break;
//     }
//   }

// }

// const btnCadastreSe = document.getElementById('facebook-register');
// btnCadastreSe.addEventListener('click', verificaCampos);

function criaCampoGenero(e) {
  const generoInputIdName = '#genero-input';
  if (e.target.id === 'female' || e.target.id === 'male') {
    console.log('teste');
    if (document.querySelector(generoInputIdName)) {
      const input = document.querySelector(generoInputIdName);
      input.parentNode.removeChild(input);
    }
  } else if (!document.querySelector(generoInputIdName)) {
    const containerGenders = document.querySelector('.genders');
    const generoInput = document.createElement('input');
    generoInput.type = 'text';
    generoInput.id = 'genero-input';
    generoInput.name = 'gender-custom';
    generoInput.placeholder = 'Gênero(opcional)';
    containerGenders.insertBefore(generoInput, containerGenders.lastChild);
  }
}

const radios = document.querySelectorAll('.radio');

for (let index = 0; index < radios.length; index += 1) {
  radios[index].addEventListener('change', criaCampoGenero);
}
