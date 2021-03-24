const createInput = document.getElementById('hidden-input');
const buttonSignUp = document.querySelector('#facebook-register');
const form = document.getElementById('form');
const data = document.querySelector('#right-content-elements');
const rightContent = document.getElementById('print-right');

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

function checkRadio() {
  const female = document.getElementById('label-gender1');
  const male = document.getElementById('label-gender2');
  const personalized = document.getElementById('label-gender3');

  if (female.checked === true) {
    return female.value;
  } if (male.checked === true) {
    return male.value;
  } return personalized.value;
}

function dataExibition() {
  const name = form.elements[0].value;
  const lastName = form.elements[1].value;
  const email = form.elements[2].value;
  const birthDate = form.elements[4].value;
  const print = `Olá ${name} ${lastName}
  ${email}
  ${birthDate}
  ${checkRadio()}`;
  return print;
}

function showPrint() {
  const divPrint = document.createElement('div');
  divPrint.innerHTML = dataExibition();
  divPrint.className = 'print-data';
  return rightContent.appendChild(divPrint);
}

buttonSignUp.addEventListener('click', (event) => {
  event.preventDefault();
  data.style.display = 'none';
  showPrint();
});
