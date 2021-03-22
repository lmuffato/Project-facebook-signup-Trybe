function addLogo() {
  const takeLogo = document.querySelector('header');
  const takeImg = document.querySelector('img');
  takeImg.src = 'imgs/facebook-logo.png';
  takeLogo.appendChild(takeImg);
}
addLogo();
