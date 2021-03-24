let entrarButton = document.getElementById('button-login')
entrarButton.addEventListener('click', function () {
    let emailContent = document.getElementById('user-email-phone').value;
    window.alert(emailContent)
});

const formResults = document.getElementsByTagName('input');
const buttonSubscrive = document.getElementById('facebook-register');
const result = document.querySelector('.result');

buttonSubscrive.addEventListener('click', function () {
  let contentForm = '';
  for (let index = 0; index < formResults.length; index++) {
      contentForm += `${index} : ${formResults[index].value}; `;      
  }    
    console.log(contentForm);
})


