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




