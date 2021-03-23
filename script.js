function alertLogin() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', alertLogin);

function criaCampoGenero(e) {
  const generoInputIdName = '#genero-input';
  if (e.target.id === 'female' || e.target.id === 'male') {
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
