document.getElementById("button-login").addEventListener("click", function(event){
    event.preventDefault()
    const login = document.querySelector('#user-email-phone').value;
    // const senha = document.querySelector('#user-password').value;
    alert(`${login}`);
  });