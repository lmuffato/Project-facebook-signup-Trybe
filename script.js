function addLogo() {
  const takeLogo = document.querySelector('header');
  const createImg = document.createElement('img');
  createImg.src = 'imgs/facebook-logo.png';
  createImg.classList.add('facebook-logo');
  takeLogo.appendChild(createImg);
}
addLogo();
