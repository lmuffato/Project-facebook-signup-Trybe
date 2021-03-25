const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta);

const buttom = document.getElementById("facebook-register")
const inputs = document.getElementsByClassName("input")
const rightContent = document.querySelector(".right-content")
const error = document.createElement('h1');
const radios = document.querySelector('#form').gender;

console.log(radios);

function checkRadio() {
  if (radios[0].checked === false && radios[1].checked === false && radios[2].checked === false) {
    return false
    
  }
  return true

}

function register(e) {
  e.preventDefault()
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '' || checkRadio() === false) {
      error.innerText = 'Campos inválidos';
      rightContent.appendChild(error);
      break;
    }
  }
}

buttom.addEventListener('click', register);