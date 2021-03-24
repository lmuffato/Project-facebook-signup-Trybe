// add alert no button login
const loginButton = document.getElementById('button-login');
function buttonAlert() {
  const camp = document.getElementById('user-email-phone').value;
  alert(camp);
}
loginButton.addEventListener('click', buttonAlert);

// criando alerta nos required

// add o personalize option gender
const toBe = document.getElementById('to-be');
const toBeInput = document.createElement('input');
toBeInput.id = 'to-be-input';
toBeInput.name = 'gender-custom';
toBeInput.placeholder = 'Gênero (opcional)';
function newCamp() {
  if (toBe.checked === true) {
    document.getElementById('gender-input-if-true').appendChild(toBeInput);
  }
}
function removeCamp() {
  if (toBe.checked === false) {
    document.getElementById('gender-input-if-true').removeChild(toBeInput);
  }
}
const male = document.getElementById('male');
const female = document.getElementById('female');
male.addEventListener('click', removeCamp);
female.addEventListener('click', removeCamp);
toBe.addEventListener('click', newCamp);

// requesito 20
// resgatando o nome do user
const userNameInForm = () => {
  const userName = document.getElementById('name-content').children;
  const realName = `${userName[0].value} ${userName[1].value}`;
  return realName;
};
// resgatando email ou telefone
const userEmailOrPhone = () => {
  const userEmail = document.getElementById('phone-mail').children;
  const outPutEmail = userEmail[0].value;
  return outPutEmail;
};

// resgatando data
const birthDate = () => {
  const date = document.getElementById('birthdate').children[1].value;
  return date;
};

// resgatando gender
const outPutTheGender = () => {
  let oqueVaiSair;
  if (male.checked) {
    oqueVaiSair = 'Masculino';
  } else if (female.checked) {
    oqueVaiSair = 'Feminino';
  } else {
    oqueVaiSair = 'Personalizado';
  }
  return oqueVaiSair;
};
// resgatando o lindo do right-content
const rightContent = document.querySelector('.right-content');
// dando inner vazio
const changeTheRight = () => {
  const theList = rightContent.childNodes;
  for (let i = 0; i < theList.length; i += 1) {
    rightContent.removeChild(theList[i]);
  }
};
// definindo a função com os output
const outPutContent = () => {
  const dados = `Olá, ${userNameInForm()}
  ${userEmailOrPhone()}
  ${birthDate()}
  ${outPutTheGender()}`;
  changeTheRight();
  rightContent.innerHTML = dados;
  // rightContent.appendChild[0](elementText('p',dados));
};

const signUpButton = document.getElementById('facebook-register');
signUpButton.addEventListener('click', outPutContent);
// partindo para o abraço #XABLAU o mago é Implacável
