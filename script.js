const createInput = document.getElementById('hidden-input');

document.getElementById('label-gender1').onclick = function genderFemale() {
  const personalizedGender = document.getElementsByName('gender');
  for (let index = 0; index < personalizedGender.length; index += 1) {
    if (personalizedGender[index].value === 'Feminino') {
      createInput.style.display = 'none';
    }
  }
};
document.getElementById('label-gender2').onclick = function genderMale() {
  const personalizedGender = document.getElementsByName('gender');
  for (let index = 0; index < personalizedGender.length; index += 1) {
    if (personalizedGender[index].value === 'Masculino') {
      createInput.style.display = 'none';
    }
  }
};
document.getElementById('label-gender3').onclick = function genderPers() {
  const personalizedGender = document.getElementsByName('gender');
  for (let index = 0; index < personalizedGender.length; index += 1) {
    if (personalizedGender[index].value === 'Personalizado') {
      createInput.style.display = 'flex';
    }
  }
};
