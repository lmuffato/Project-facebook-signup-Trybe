const myAddEventListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

window.onload = () => {
  myAddEventListener('#button-login', 'click', (e) => {
    e.preventDefault();
    alert('Email ou telefone');
  });
};
