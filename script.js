const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');
const buttom = document.getElementById('facebook-register');
const inputs = document.getElementsByTagName('input')
const text = document.createElement('p')
const formulario = document.getElementById('nameContainer') 

function alerta() {
  alert(user.value);
}

// login.addEventListener('click', alerta);

// // function checkFill() {
// //   text.innerText = 'Campos inválidos'
// //   if (inputs.value === '') {
// //     text.appendChild(formulario)
// //   }
// // }
// // buttom.addEventListener('click', checkFill)

// const rightContent = document.querySelector('.right-content');
// const error = document.createElement('h1');
// const radio = document.querySelectorAll('#form').gender;
// const submitForm = document.getElementById('submitForm');
// // inputs values/////////////////
// const name = document.getElementById('name');
// const sobrenome = document.getElementById('sobrenome');
// const email = document.getElementById('celular-email');
// const senha = document.getElementById('senha');
// const birthdate = document.getElementById('birthdate');
// function checkGender() {
//   let genderSelected = ''
//   for (let index = 0; index < 3; index += 1) {
//     if (radio[index].checked) {
//       genderSelected = radio[index].value
//     }
//   }
//   return genderSelected
// }
// // checkGender();
// const genderSelect = checkGender();
// // inputs values/////////////////

// console.log(radio);

// function checkRadio() {
//   if (radio[0].checked === false && radio[1].checked === false && radio[2].checked === false) {
//     return false;
//   }
//   return true;
// }

// function register(e) {
//   e.preventDefault();
//   for (let index = 2; index < inputs.length; index += 1) {
//     if (inputs[index].value === '' || checkRadio() === false) {
//       error.innerText = 'Campos inválidos';
//       rightContent.appendChild(error);
//       break;
//     }
//     rightContent.classList.add('removeElement');
//     submitedForm();
//   }
// }

// buttom.addEventListener('click', register);

// function submitedForm() {
//   submitForm.classList.remove('removeElement');
//   const p = document.getElementById('p');
//   p.innerHTML = `Olá ${nome.value} ${sobrenome.value}<br>
//   Email: ${email.value}<br>
//   Data de nascimento: ${birthdate.value}<br>
//   Gênero: ${genderSelect}`
// }

// const gender = document.getElementById('personalizado')
// const genderConteiner = document.getElementsByClassName('genderConteiner')

// function customGender() {
//   const customInput = document.createElement('input')
//   genderConteiner.appendChild(customInput)
//   Object.assign(customInput, {
//     id: customGenderId,
//     name: customGenderName,
//     type: 'text',
//     placeholder: 'Gênero (opcional)',
//   });
// }

// gender.addEventListener('click', customGender);
