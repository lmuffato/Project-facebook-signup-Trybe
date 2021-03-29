const button = document.getElementById('button-login');
const btnSubmit = document.getElementById('facebook-register');
const rightContent = document.querySelector('.right-content');

function submitCancel(event) {
  event.preventDefault();
  const login = document.querySelector('#user-email-phone').value;
  alert(`${login}`);
}
button.addEventListener('click', submitCancel);

// Função feita baseado no vídeo da rocktseat https://www.youtube.com/watch?v=GTMEuHxh8aQ&t=2100s
// const fields = document.querySelectorAll('[required]');
// function validateForms(event) {
//   const field = event.target;
//   console.log('Campo inválido');

//   function verifyErrors() {
//     let foundError = false;

//     for (let error in field.validity) {
//       if (error !== 'customError' && field.validity[error]) {
//         foundError = true;
//       }
//     }
//     return foundError;
//   }
//   const error = verifyErrors();

//   if (error) {
//     field.setCustomValidity('Campos inválidos');
//   } else {
//     field.setCustomValidity('');
//   }
//   return true;
// }

// for (field of fields) {
//   field.addEventListener('invalid', validateForms);
// }

const firstName = document.getElementsByName('firstname')[0];
const lastName = document.getElementsByName('lastname')[0];
const phoneEmail = document.getElementsByName('phone_email')[0];
const birthDate = document.getElementsByName('birthdate')[0];
const female = document.getElementById('feminino');
const male = document.getElementById('masculino');
const customGender = document.getElementById('radioPersonalizado');

// Evento concluído baseado neste vídeo sobre eventos com radio buttons https://www.youtube.com/watch?v=zndWZv9DZWc
function radioPersonalizado() {
  const inputPersonalizado = document.createElement('input');
  inputPersonalizado.style.display = 'flex';
  inputPersonalizado.style.width = '200px';
  inputPersonalizado.attributes = 'required';
  inputPersonalizado.name = '';
  console.log('fui clicado');
  female.classList.remove('checked');
  male.classList.remove('checked');
  customGender.classList.add('checked');
}

customGender.addEventListener('click', radioPersonalizado);

const masculino = document.getElementById('masculino');
function radioMasculino() {
  const inputPersonalizado = document.getElementById('inputPersonalizado');
  inputPersonalizado.style.display = 'none';
  female.classList.remove('checked');
  male.classList.add('checked');
  customGender.classList.remove('checked');
}

masculino.addEventListener('click', radioMasculino);

const feminino = document.getElementById('feminino');
function radioFeminino() {
  const inputPersonalizado = document.getElementById('inputPersonalizado');
  inputPersonalizado.style.display = 'none';
  female.classList.add('checked');
  male.classList.remove('checked');
  customGender.classList.remove('checked');
}

feminino.addEventListener('click', radioFeminino);
// Criação de div a partir do submit da página feito baseado no code Review do pull request da dupla Maria Luiza e Cla Oliveira https://github.com/tryber/sd-010-a-project-facebook-signup/pull/104/files
const content = {
  firstName: '',
  lastName: '',
  phoneEmail: '',
  birthDate: '',
  gender: '',
};

function createValues() {
  content.firstName = firstName.value;
  content.lastName = lastName.value;
  content.phoneEmail = phoneEmail.value;
  content.birthDate = birthDate.value;

  if (customGender.classList.contains('checked')) {
    content.gender = customGender.value;
  } else if (female.classList.contains('checked')) {
    content.gender = female.value;
  } else if (male.classList.contains('checked')) {
    content.gender = male.value;
  }
}

function validate() {
  const valiDate = document.querySelectorAll('.validate');
  for (let index = 0; index < valiDate.length; index += 1) {
    if (valiDate[index].value === '') {
      return false;
    }
  }
  return true;
}

function gerarInformacoes(e) {
  if (validate()) {
    e.preventDefault();
    createValues();
    rightContent.innerHTML = '';
    const informations = document.createElement('div');
    const string = `Olá, ${content.firstName} ${content.lastName}
    ${content.phoneEmail}
    ${content.birthDate}
    ${content.gender}`;
    informations.innerText = string;
    informations.style.marginTop = '50px';
    rightContent.appendChild(informations);
  } else {
    const formSignup = document.getElementById('form2');
    const message = document.createElement('p');
    message.innerText = 'Campos inválidos';
    formSignup.appendChild(message);
  }
}

btnSubmit.addEventListener('click', gerarInformacoes);
