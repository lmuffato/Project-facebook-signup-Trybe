const buttonEnter = document.querySelector('#button-login');
const getLastElement = document.getElementById('term');

function verifyBlankFields() {
  const getInput = document.querySelectorAll('#form-right-content input');
  // Apliquei essa lógica para impedir a possibilidade de aparecer várias vezes a mensagem "Campos inválidos!"
  if (getLastElement.children.lenght !== 3) {
    getLastElement.lastElementChild.remove();
  }

  for (let index = 0; index < getInput.length; index += 1) {
    if (getInput[index].value === '') return true;
  }
}

function getInputsValue(div, inputs, checked) {
  // Juntei os valores dos inputs nome e sobrenome; Coloquei-os em um parágrafo com a mensagem "Olá, ...."; Coloquei esse parágrafo na div;
  const hello = `Olá, ${inputs[0].value} ${inputs[1].value}`;
  const helloParagraph = document.createElement('p');
  helloParagraph.innerText = hello;
  div.appendChild(helloParagraph);

  // Selecionei os inputs de email e data; Coloquei cada um em um parágrafo; Coloquei cada parágrafo dentro da div
  for (let index = 2; index < inputs.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = inputs[index].value;
    div.appendChild(paragraph);
  }

  // Coloquei o valor do checkbox selecionado. Como a lógica é diferente dos input, tive que colocar de forma separada
  div.appendChild(checked);
  return div;
}

function changeRightSide() {
  // Uma amontoado de constantes para realizar o exercício. Qualquer hora a gente tenta refatorar hehehe
  const rightContent = document.getElementsByClassName('right-content')[0];
  const divValues = document.createElement('div');
  const inputs = document.getElementsByClassName('input-get');
  const checked = document.querySelectorAll('input[name="gender"]:checked')[0];
  const checkedValue = checked.value;
  const checkedParagraph = document.createElement('p');
  checkedParagraph.innerText = checkedValue;
  const sectionValues = getInputsValue(divValues, inputs, checkedParagraph);

  // Limpo o conteúdo do form que está no right-content para colocar o novo valor com os textos da informação do usuário;
  rightContent.innerHTML = '';
  rightContent.appendChild(sectionValues);
}

function submit() {
  const getBtn = document.getElementById('facebook-register');
  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Apliquei essa lógica para impedir a possibilidade de aparecer várias vezes a mensagem "Campos inválidos!"
    if (verifyBlankFields()) {
      const createMsg = document.createElement('h3');
      getLastElement.appendChild(createMsg).innerText = 'Campos inválidos!';
    } else changeRightSide();
  });
}

buttonEnter.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('#user-email-phone');
  window.alert(email.value);
});

const getGender = document.getElementById('genderButtons');
const getCustomGender = document.getElementById('custom');
getGender.addEventListener('click', (e) => {
  // Apliquei a mesma lógica usada no requisito para impedir a possibilidade de aparecer vários campos vázios se o usuário clicar mais de uma vez no 'Personalizado'
  if (e.target === getCustomGender) {
    const createCustomField = document.createElement('input');
    createCustomField.setAttribute('type', 'text');
    createCustomField.setAttribute('name', 'gender-custom');
    createCustomField.setAttribute('placeholder', 'Gênero (opcional)');
    getGender.appendChild(createCustomField);
  }
  if (getGender.children.length > 9) {
    getGender.lastChild.remove();
  }
});

window.onload = () => {
  submit();
};
