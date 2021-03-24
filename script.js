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
  if(childNumber.length === 0){
    const personalizedGender = document.createElement('input');
    personalizedGender.setAttribute('name', 'gender-custom');
    personalizedGender.setAttribute('placeholder', 'Gênero (opcional)');
    genderOptions.appendChild(personalizedGender);
  }
})

const removePersonalGender = () => {
  const noGenderDiv = document.getElementById('genders');
  const childrenDiv = noGenderDiv.childNodes;
  if (childrenDiv.length > 0) {
    noGenderDiv.removeChild(noGenderDiv.firstChild);
  }
};
