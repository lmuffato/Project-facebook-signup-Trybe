const inputsZone = document.querySelectorAll('[required]');

for (let zone of inputsZone) {
  zone.addEventListener('invalid', msgInvalid);
}

function msgInvalid(event) {
  let zone = event.target;
  
  function errors() {
    let erro = false;
    
    for (let key in zone.validity) {
      if (key !== 'customError' && zone.validity[key]) {
        erro = true;
      }
    }
    return erro;
  }

  let found = errors()
  
  if (found) {
    errors();
    zone.setCustomValidity('Campos inválidos');
  } else {
    zone.setCustomValidity('');
  }
}
