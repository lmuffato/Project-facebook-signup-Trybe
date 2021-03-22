function myFormProcessing(event) {
  const userEmailBox = document.getElementById('user-email-phone');
  alert(userEmailBox.value);
  event.preventDefault(); 
}
