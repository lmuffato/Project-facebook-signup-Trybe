function addLogo() {
  const takeLogo = document.querySelector('header');
  const createImg = document.createElement('img');
  createImg.src = 'imgs/facebook-logo.png';
  takeLogo.appendChild(createImg);
}
addLogo();
