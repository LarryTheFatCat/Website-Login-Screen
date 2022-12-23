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
    const passwordRegex = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/;

    const validateEmail = emailRegex.test(usernameInput.value);
    const validatePassword = passwordRegex.test(passwordInput.value);

    if(usernameInput.value === "" && passwordInput.value === "") {
        errorMessagePassword.style.display = "block";
        errorMessageUsername.style.display = "block";
    } else if(validateEmail === false && validatePassword === false) {
        errorMessagePassword.style.display = "block";
        errorMessageUsername.style.display = "block";
    }

    if(validateEmail === true && validatePassword === true) {
        errorMessagePassword.style.display = "none";
        errorMessageUsername.style.display = "none";
    }
}


