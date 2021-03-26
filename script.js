const buttonLogin = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
const submitButton = document.getElementById('facebook-register');
const openAccInput = document.getElementsByClassName('openAccount');
buttonLogin.addEventListener('click', (Event) => {
  Event.preventDefault();
  alert(inputEmailTel.value);
});
function checkNullInputText() {
  let hasNull;
  for (let index = 0; index < openAccInput.length; index += 1) {
    if ((index <= 4 || index > 7) && openAccInput[index].value === '') {
      hasNull = true;
    }
  }
  return hasNull;
}
function checkNullInputRadio() {
  const checkers = [];
  for (let index = 5; index <= openAccInput.length; index += 1) {
    if (index < 8 && openAccInput[index].checked === false) {
      checkers.push(index);
    }
  }
  return checkers;
}
function getGender() {
  let gender;
  for (let index = 5; index <= 7; index += 1) {
    if (openAccInput[index].checked) {
      gender = openAccInput[index].value;
    } else if (openAccInput[index].checked === true && index === 6) {
      gender = openAccInput[8].value;
    }
  }
  return gender;
}
function boasVindas() {
  const gender = getGender();
  const divpai = document.getElementsByClassName('right-content');
  const filhos = divpai[0].children;
  const dados = [openAccInput[0].value, openAccInput[1].value];
  dados.push(openAccInput[2].value, openAccInput[4].value);
  for (let index = filhos.length - 1; index >= 0; index -= 1) {
    divpai[0].removeChild(filhos[index]);
  }
  const alerta = document.createElement('h3');
  alerta.innerText = `Olá, ${dados[0]}  ${dados[1]} ,
  ${dados[2]}
  ${dados[3]}
  ${gender}.`;
  alerta.setAttribute('class', 'welcome');
  divpai[0].appendChild(alerta);
}
function formData() {
  const checkerText = checkNullInputText();
  const checkerRadio = checkNullInputRadio();
  if (checkerText === true || checkerRadio.length !== 2) {
    const divform = document.getElementById('registerBox');
    const alerta = document.createElement('h3');
    alerta.innerText = 'Campos inválidos';
    alerta.setAttribute('class', 'alertlog');
    divform.appendChild(alerta);
  }
  if (checkerText === false || checkerRadio.length === 2) {
    boasVindas();
  }
}
submitButton.addEventListener('click', (Event) => {
  Event.preventDefault();
  formData();
});
function createCustomBox() {
  const customGender = document.createElement('input');
  const genderBox = document.getElementById('genderBox');
  customGender.setAttribute('placeholder', 'Gênero (opcional)');
  customGender.setAttribute('name', 'gender-custom');
  customGender.setAttribute('id', 'genderCustom');
  customGender.classList.add('openAccount');
  customGender.style.borderRadius = '5%';
  customGender.style.border = '1px solid rgb(104, 104, 104)';
  genderBox.appendChild(customGender);
}
function removeCustomBox() {
  const genderBox = document.getElementById('genderBox');
  const childs = genderBox.children;
  if (childs[6] !== undefined) {
    genderBox.removeChild(childs[6]);
  }
}
openAccInput[7].addEventListener('click', () => {
  const genderBox = document.getElementById('genderBox');
  if (genderBox.children.length === 6) {
    createCustomBox();
  }
});
for (let index = 5; index < 7; index += 1) {
  openAccInput[index].addEventListener('click', () => {
    if (openAccInput[7].checked !== true) {
      removeCustomBox();
    }
  });
}
