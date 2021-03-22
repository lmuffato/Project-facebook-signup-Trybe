const myAddEventListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

myAddEventListener('#button-login', 'click',
  () => { alert('Email ou telefone'); });
