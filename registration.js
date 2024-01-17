var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var password = document.getElementById('password')
var Cpassword = document.getElementById('Cpassword')
const error = document.querySelector('.error-wrapper')
var error_message = document.querySelector('.error-wrapper p')
const icons = document.querySelectorAll("span")
const form = document.querySelector('.form-wrapper')
var check = document.getElementById('checkbox')
function validate(){
    if (firstname.value == "" || lastname.value == "" || email.value == "" || phone.value == "" || password.value == "" || Cpassword.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "feild is required"
        return false;
    }
    if (firstname.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "first Name is required"
        return false;
    }
    if (lastname.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "last Name is required"
        return false;
    }
    if (email.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "email is required"
        return false;
    }
    if (phone.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "phone is required"
        return false;
    }
    if (password.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "password is required"
        return false;
    }
    if (password.value.length < 8 || Cpassword.value.length < 8 ) {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "password must be atleast 8 charaters long"
        return false;
    }
    if (Cpassword.value == "") {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "kindly Confirm password"
        return false;
    }
    if (password.value !== Cpassword.value) {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "password does not match"
        return false;
    }
    if (!check.checked) {
        error.classList.add("active")
        form.classList.add('inactive');
        error_message.innerHTML = "agree to continue"
        return false;
    }
}
icons.forEach((icon) =>{
    icon.addEventListener('click',function(){
        const pinput = icon.parentElement.querySelector('input')
        if (pinput.type === "password") {
            pinput.type = "text"
            icon.style.backgroundImage =  "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png )";
            // alert('okay')
        } else{
            pinput.type = "password"
            icon.style.backgroundImage = "url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png )";
        }
    })
    
})
// document.getElementById('checkbox').setAttribute('required',"true");
const button = document.querySelector('.error-wrapper button')
 button.addEventListener('click',function(){
        error.classList.remove('active')
        form.classList.remove('inactive')
 })