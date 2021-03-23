function verifyBlankFields() {
  const getInput = document.querySelectorAll('input');
  for (let index = 0; index < getInput.length; index += 1) {
    if (getInput[index].value === '') {
      alert('Campos inválidos!');
      break;
    }
  }
}

function submit() {
  const getBtn = document.getElementById('facebook-register');
  getBtn.addEventListener('click', verifyBlankFields);
}

function genderCustom() {
  let getCustomGender = document.getElementById('custom')
  getCustomGender.addEventListener('click', () => {
      let createArea = document.createElement('input');
      createArea.setAttribute('type', 'textarea');
      getCustomGender.appendChild(createArea)
  })
}

window.onload = () => {
  submit();
  genderCustom();
};
