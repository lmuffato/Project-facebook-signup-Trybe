const info = document.getElementById('user-email-phone');

function alertButton() {
  alert(info.value);
}
const botao = document.getElementById('button-login');
botao.addEventListener('click', alertButton);

const personalized = document.querySelector('#personalized');

personalized.addEventListener('click', () => {
  const genderOptions = document.querySelector('#genders');
  const childNumber = genderOptions.childNodes;
  if (childNumber.length === 0) {
    const personalizedGender = document.createElement('input');
    personalizedGender.setAttribute('name', 'gender-custom');
    personalizedGender.setAttribute('placeholder', 'Gênero (opcional)');
    genderOptions.appendChild(personalizedGender);
  }
});

const removePersonalGender = () => {
  const noGenderDiv = document.getElementById('genders');
  const childrenDiv = noGenderDiv.childNodes;
  if (childrenDiv.length > 0) {
    noGenderDiv.removeChild(noGenderDiv.firstChild);
  }
};

const otherGender = document.querySelectorAll('.other-gender');

otherGender[0].addEventListener('click', removePersonalGender);
otherGender[1].addEventListener('click', removePersonalGender);

const invalidCamp = document.createElement('div');
const registerForm = document.querySelector('#registerForm');
invalidCamp.innerHTML = 'Campos inválidos';
invalidCamp.className = 'invalidCamp';
invalidCamp.style.display = 'none';
registerForm.appendChild(invalidCamp);

function verifyContent(event) { // Contribuição para desenvolvimento do raciocinio - PedroGordo - Turma 09//
  event.preventDefault();
  let emptyInput = 0;
  const verify = document.querySelectorAll('.verify');
  for (let index = 0; index < verify.length; index += 1) {
    if (verify[index].value === '') {
      emptyInput += 1;
      invalidCamp.style.display = 'block';
    } else if (emptyInput === 0) {
      invalidCamp.style.display = 'none';
    }
  }
}
const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', verifyContent);
