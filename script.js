<<<<<<< HEAD
// Bloco de declaração de variáveis globais
const formResults = document.querySelectorAll('.form-new input');
=======
let entrarButton = document.getElementById('button-login')
entrarButton.addEventListener('click', function () {
    let emailContent = document.getElementById('user-email-phone').value;
    window.alert(emailContent)
});

const formResults = document.getElementsByTagName('input');
>>>>>>> e4a1a605370f70fc3fae8c72fea4757a5fb11579
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');
// const buttonLogin = document.getElementById('button-login');

// Bloco de declaração de funções
const isRadioChecked = (index) => {
  let checked = false;
  if (formResults[index].type === 'radio' && formResults[index].checked) {
    checked = true;
  }
  return checked;
};

buttonSubscrive.addEventListener('click', (event) => {
  event.preventDefault();
  const contentForm = {};
  for (let index = 0; index < formResults.length; index += 1) {
    if (isRadioChecked(index)) {
      contentForm[formResults[index].name] = formResults[index].value
    } else {
      contentForm[formResults[index].name] = formResults[index].value;
    }
  }
  console.log(contentForm);
});

// bloco de ações de inicialização

<<<<<<< HEAD
result.innerText = window.location.href;
=======
buttonSubscrive.addEventListener('click', function () {
  let contentForm = '';
  for (let index = 0; index < formResults.length; index++) {
      contentForm += `${index} : ${formResults[index].value}; `;      
  }    
    console.log(contentForm);
})
result.innerText = window.location.href 
function entrarButton () {
    var emailContent = document.getElementById('user-email-phone').value;
    alert(emailContent)
}

>>>>>>> e4a1a605370f70fc3fae8c72fea4757a5fb11579
