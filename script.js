const button = document.getElementById('button-login');
function submitCancel(event) {
  event.preventDefault();
  const login = document.querySelector('#user-email-phone').value;
  alert(`${login}`);
}
button.addEventListener('click', submitCancel);

//função feita baseado no vídeo da rocktseat https://www.youtube.com/watch?v=GTMEuHxh8aQ&t=2100s
const fields = document.querySelectorAll("[required]");
function validateForms(event) {
  const field = event.target;
  console.log('Campo Inválido');

  function verifyErrors(){
    let foundError = false;

    for (let error in field.validity) {
      if (error !== 'customError' && field.validity[error]) {
        foundError = true;
      }
    }
    return foundError;
  }
  const error = verifyErrors();

  if (error) {
    field.setCustomValidity('Campos inválidos');
  } else {
    field.setCustomValidity('');
  }
}

for (field of fields) {
  field.addEventListener('invalid', validateForms);
}

const form = document.querySelector('#form2');
form2.addEventListener('submit', event => {
  event.preventDefault();
})
//evento concluído baseado neste vídeo sobre eventos com radio buttons https://www.youtube.com/watch?v=zndWZv9DZWc
const personalizado = document.getElementById('radioPersonalizado');
function radioPersonalizado() {
  const inputPersonalizado = document.getElementById('inputPersonalizado');
  inputPersonalizado.style.display = 'flex';
  inputPersonalizado.style.width = '200px';
  inputPersonalizado.attributes = 'required';
  console.log('fui clicado');
}

personalizado.addEventListener('click', radioPersonalizado);

const masculino = document.getElementById('masculino');
function radioMasculino() {
  const inputPersonalizado = document.getElementById('inputPersonalizado');
  inputPersonalizado.style.display = 'none';
}

masculino.addEventListener('click', radioMasculino);

const feminino = document.getElementById('feminino');
function radioFeminino() {
  const inputPersonalizado = document.getElementById('inputPersonalizado');
  inputPersonalizado.style.display = 'none';
}

feminino.addEventListener('click', radioFeminino);