let button = document.getElementById("button-login");
button.addEventListener("click", function(event){
  event.preventDefault();
  const login = document.querySelector('#user-email-phone').value;
  alert(`${login}`);
});
