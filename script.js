const username = document.getElementById('username');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');
const email = document.getElementById('email');
const form = document.getElementById('form');

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  


form.addEventListener('submit', (e)=>{
    
let messsages = [];
if (username.value.length >50){
    messsages.push('Username cannot be more than 50 characters');
}

if (password.value.length < 8) {
    messsages.push('Password cannot be less than 8 characters');
}else if(!containsSpecialChars(password.value)){
    messsages.push('Password has to have atleast one special character');
}



if(messsages.length > 0){
    e.preventDefault();
    errorElement.innerText = messsages.join(',\n');
    errorElement.style.display = "block";
}else{
    alert('Successfully Registered');

}



});