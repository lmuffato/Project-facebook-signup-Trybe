const inputsZone = document.querySelectorAll('[required]');
for (const zone of inputsZone) {
  zone.addEventListener('invalid', msgInvalid);
}
function msgInvalid (event) {
  const zone = event.target;
  function errors () {
    let erro = false;
    for (const key in zone.validity) {
      if (key != 'customError' && zone.validity[key]) {
        erro = true;
      }
    }
    return erro;
  }
  const found = errors()
  if (found) {
    errors ();
    zone.setCustomValidity('Campos inválidos');
  } else {
    zone.setCustomValidity('');
  }
}
