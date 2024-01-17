const btn = document.querySelector('button')
const error = document.querySelector('.error-wrapper')
const form = document.querySelector('.form-wrapper')
const span = document.querySelector('.error-wrapper span')
var password = document.getElementById('password')
var email = document.getElementById('email')



function validate(){
    

    if (email.value === "" || password.value === "" ) {
        // alert("enter email")
        error.classList.add('active')
        span.innerHTML = 'email/password is required'
        form.classList.add('inactive')
        return false;
    }
    if (password.value.length < 8 ) {
        error.classList.add('active')
        span.innerHTML = 'password must be 8 characters long'
        form.classList.add('inactive')
        return false;
    }   
    if (!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.classList.add('active')
        form.classList.add('inactive')
        return false;
    }
    // return true; 
}

// const icon = document.querySelector('#icon')
// icon.addEventListener('click',function(){

//     // alert('working')

// })
 function show(){
    if (password.getAttribute('type') === "password") {
        password.setAttribute('type','text');
        icon.style.backgroundImage = "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png )";

    } else{
        password.setAttribute('type','password');
        icon.style.backgroundImage = " url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png) ";
    }
 }
 const button = document.querySelector('.error-wrapper button')
 button.addEventListener('click',function(){
        error.classList.remove('active')
        form.classList.remove('inactive')
 })
