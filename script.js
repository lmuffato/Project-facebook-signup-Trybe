function loginAlert() {
  const btnLogin = document.getElementById('button-login');
  let inputText = '';
  btnLogin.addEventListener('click', () => {
    inputText = document.getElementById('user-email-phone').value;
    alert(inputText);
  });
}

function addCustonGender() {
  const gendersBlock = document.getElementById('genders');
  gendersBlock.addEventListener('click', (event) => {
    const gendersLength = gendersBlock.children.length;
    if (event.target.id === 'gen-personalized' && gendersLength < 7) {
      const newGender = document.createElement('input');
      newGender.name = 'gender-custom';
      newGender.placeholder = 'Gênero (opcional)';
      gendersBlock.appendChild(newGender);
    }
  });
}

function removeCustonGender() {
  const gendersBlock = document.getElementById('genders');
  gendersBlock.addEventListener('click', (event) => {
    const gendersLength = gendersBlock.children.length;
    const idE = event.target.id;
    if ((idE === 'gen-masc' || idE === 'gen-fem') && gendersLength > 6) {
      gendersBlock.removeChild(gendersBlock.lastChild);
    }
  });
}

window.onload = function run() {
  loginAlert();
  addCustonGender();
  removeCustonGender();
};
