<<<<<<< HEAD

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
result.innerText = window.location.href 
=======
function entrarButton () {
    var emailContent = document.getElementById('user-email-phone').value;
    alert(emailContent)
}
>>>>>>> dae006992e0d75c25f3cf78f4b1af5d3cea7c9c0
