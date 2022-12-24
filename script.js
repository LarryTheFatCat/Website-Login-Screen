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


function checkVerify() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validateEmail = emailRegex.test(usernameInput.value);

    if(passwordInput.value.length < 8 || validateEmail === false) {
        errorMessageUsername.style.display = "block";
        errorMessagePassword.style.display = "block";
    } else if(passwordInput.value.length > 8 || validateEmail === true  ){
        errorMessageUsername.style.display = "none";
        errorMessagePassword.style.display = "none";
    }
}
