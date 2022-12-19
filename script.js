const viewPassword = document.getElementById("bi-eye-slash"); // BootStrap Icon For Eye Slash password.
const passwordInput = document.getElementById("passwordInput"); // Input Password.
const usernameInput = document.getElementById("usernameInput"); // Username input.
const button = document.getElementById("log"); // Login Button.
const errorMessageUsername = document.getElementById("errormessage"); // Error Message username.
const errorMessagePassword = document.getElementById("errormessage-password"); // Error Message password.

// View Password option with Bootstrap Icons
viewPassword.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("bi-eye"); 
});

// Testing project. fucking gotta fix the user input stuff...
/*
function checkVerify() {
    let errorMessageUsername = document.getElementById("errormessage"); // Error Message username.
    let errorMessagePassword = document.getElementById("errormessage-password"); // Error Message password.
    let validation;
    let regexUsername = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    
    validation = regexUsername.test(usernameInput.value);
    validation = regexPassword.test(passwordInput.value);
    console.log(validation);

    if(validation == false) {
        button.addEventListener("click", function() {
            if(usernameInput.value == "" || passwordInput.value == "") {
                errorMessageUsername.style.display = "block";
                errorMessagePassword.style.display = "block";
            }
        });
    } else {
        console.log("You are logged in");
    }
}
*/

// Use this for regex auth purpose
/**
 * 
 * button.addEventListener("click", function() {
    if(usernameInput.value == "" || passwordInput.value == "") {
        errorMessageUsername.style.display = "block";
        errorMessagePassword.style.display = "block";
    }
});
*/




