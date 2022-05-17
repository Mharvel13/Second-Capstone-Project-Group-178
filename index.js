
// Hamburger Navbar
var disp_val = 1;

function dropdown(){
    var display = document.getElementById("dropdown").style;

    var size = screen.width;
    if (size < 460){
        if (disp_val == 1){
            display.display = "block";
            disp_val = 0;
        }
    
        else{
            display.display = "none";
            disp_val = 1;
        }
    }
}

window.addEventListener("resize", function(){
    var win_size = screen.width;
    if (win_size > 460){
        document.getElementById("dropdown").style.display = "inline";
    }
});


// Form Validation Styles
const form = document.querySelector('form');

const usernameField = form.querySelector('.username');
const usernameInput = usernameField.querySelector('input');

const emailField = form.querySelector('.email');
const emailInput = emailField.querySelector('input');

const phoneField = form.querySelector('.phone');
const phoneInput = phoneField.querySelector('input');

const passwordField = form.querySelector('.password');
const passwordInput = passwordField.querySelector('input');

const confirmPasswordField = form.querySelector('.confirm-password');
const confirmPasswordInput = confirmPasswordField.querySelector('input');

let hidePassword = document.getElementById('hide-password');
let seePassword = document.getElementById('see-password');

let hidePassword2 = document.getElementById('hide-password2');
let seePassword2 = document.getElementById('see-password2');



function toggleEye(){
    if( passwordInput.type === 'password'){
       passwordInput.type = 'text';
       hidePassword.style.display = 'block';
       seePassword.style.display = 'none';

    }else{
        passwordInput.type = 'password';
        hidePassword.style.display = 'none';
        seePassword.style.display = 'block';
    }

};

function toggleEye2(){
    if( confirmPasswordInput.type === 'password'){
       confirmPasswordInput.type = 'text';
       hidePassword2.style.display = 'block';
       seePassword2.style.display = 'none';

    }else{
        confirmPasswordInput.type = 'password';
        hidePassword2.style.display = 'none';
        seePassword2.style.display = 'block';
    }

};



form.onsubmit = (e)=>{
    e.preventDefault();

    if(usernameInput.value ==""){
        usernameField.classList.add("error");
    }else{
        checkUsername();
    }

    if(emailInput.value ==""){
        emailField.classList.add("error");
    }else{
        checkEmail();
    }

    if(phoneInput.value ==""){
        phoneField.classList.add("error");
    }else{
        checkPhone();
    }

    if(passwordInput.value ==""){
        passwordField.classList.add("error");
    }else{
        checkPassword();
    }

    if(confirmPasswordInput.value ==""){
        confirmPasswordField.classList.add("error");
    }else{
        checkconfirmPassword();
    }


    // Key up functions

    usernameInput.onkeyup = () =>{
        checkUsername();
    }

    function checkUsername(){
        let userErrorText = usernameField.querySelector(".error-txt");
        let usernamePattern = /^[A-Za-z]+$/;
        if(!usernameInput.value.match(usernamePattern)){
            usernameField.classList.add('error');
            usernameField.classList.remove('sucess');
            userErrorText.innerHTML = ' Username can only contain letters, PleaseEnter a Valid usename';

        }else if(usernameInput.value ==''){
            usernameField.classList.add('error');

        } else if(usernameInput.value =='username'){
            usernameField.classList.add("error")
            usernameField.classList.remove("sucess")

            userErrorText.innerHTML = "username cannot be username";
        }
        else if(usernameInput.value.length < 5){
            usernameField.classList.add("error")
            usernameField.classList.remove("sucess")
            userErrorText.innerHTML = "username must be more than 5 characters"
        }
        else{
            usernameField.classList.remove('error');
            usernameField.classList.add('sucess'); 
        }
        
    }

    
    emailInput.onkeyup = () =>{
       checkEmail(); 
    }  

    function checkEmail(){
        let emailErrorText = emailField.querySelector(".error-txt");
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInput.value.match(emailPattern)){
           emailField.classList.add('error');
            emailField.classList.remove('sucess');
            emailErrorText.innerHTML = 'Enter a Valid email address';

        }else{
            emailField.classList.remove('error');
            emailField.classList.add('sucess');
            
        }

    }
    /*
   if(!usernameInput.value.match(usernamePattern))
     {
      usernameField.classList.add('error');
            usernameField.classList.remove('sucess');
            usernameErrorText.innerHTML = 'Enter a Valid usename';
    
    */

    phoneInput.onkeyup = () =>{
        checkPhone();
        
    }

    function checkPhone(){
        let phonePattern = /^\d{11}$/;
        let phoneErrorText = phoneField.querySelector(".error-txt");
        if(!phoneInput.value.match(phonePattern)){

            phoneField.classList.add('error');
            phoneField.classList.remove('sucess');
            phoneErrorText.innerHTML = 'Enter a Valid phone Number';
        }
        else if(phoneInput.value == ''){
            phoneField.classList.add('error');
            phoneField.classList.remove('sucess');
            phoneErrorText.innerHTML = 'Phone Number cannot be blank';

        }
        else if(!phoneInput.value.length > 11){
            phoneField.classList.add('error');
            phoneField.classList.remove('sucess');
            phoneErrorText.innerHTML = 'Phone Number must not be more than 11 digits';
        }else{
            phoneField.classList.remove('error');
            phoneField.classList.add('sucess');
        }
    }


    passwordInput.onkeyup = () =>{
        checkPassword();
    }

    function checkPassword(){
        let passwordErrorText = passwordField.querySelector(".error-txt");
        if (passwordInput.value ==''){
            passwordField.classList.add('error');

        }else if(passwordInput.value.length < 8){
            passwordField.classList.add('error');
            passwordField.classList.remove('sucess');
           passwordErrorText.innerHTML = 'password must be more than 8 characters';
        }else{
            passwordField.classList.remove('error');
            passwordField.classList.add('sucess');

        }
    }

    confirmPasswordInput.onkeyup = () =>{
        checkconfirmPassword();

    }

    function checkconfirmPassword(){
        let confirmPasswordErrorText = confirmPasswordField.querySelector(".error-txt");
        if (confirmPasswordInput.value == ''){
            confirmPasswordField.classList.add('error'); 

        } else if(confirmPasswordInput.value.length < 8){
            confirmPasswordField.classList.add('error');
            confirmPasswordField.classList.remove('sucess');
            confirmPasswordErrorText.innerHTML = 'password must be more than 8 characters';

        }else if (confirmPasswordInput.value !== passwordInput.value){
            confirmPasswordField.classList.add('error');
            confirmPasswordErrorText.innerHTML = 'Passwords do not match';

        }else{
            confirmPasswordField.classList.remove('error');
            confirmPasswordField.classList.add('sucess');        
        }

    }




    if (!usernameField.classList.contains('error') && !emailField.classList.contains('error') && !phoneField.classList.contains('error') && !passwordField.classList.contains('error') && !confirmPasswordField.classList.contains('error')){
        window.location.href = '#';
        console.log("form Submitted!!!")

    }

};

