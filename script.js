document.getElementById('label-gender1').onclick = function() {
  
  const genderPersonalized = document.getElementsByName("gender");
  let createInput = document.getElementById('hidden-input');
  
  for (let index = 0; index < genderPersonalized.length; index += 1) {
      if (genderPersonalized[index].value === 'Feminino') {
        createInput.style.display = 'none';
      } 
      
  }
};
document.getElementById('label-gender2').onclick = function() {
  
  const genderPersonalized = document.getElementsByName("gender");
  let createInput = document.getElementById('hidden-input');
  
  for (let index = 0; index < genderPersonalized.length; index += 1) {
      if (genderPersonalized[index].value === 'Masculino') {
        createInput.style.display = 'none';
      } 
      
  }
};
document.getElementById('label-gender3').onclick = function() {
  
  const genderPersonalized = document.getElementsByName("gender");
  let createInput = document.getElementById('hidden-input');
  
  for (let index = 0; index < genderPersonalized.length; index += 1) {
      if (genderPersonalized[index].value === 'Personalizado') {
        createInput.style.display = 'flex';
      } 
      
  }
};

