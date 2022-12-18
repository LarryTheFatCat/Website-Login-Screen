const viewPassword = document.getElementById("bi-eye-slash"); // BootStrap Icon For Eye Slash password.
const passwordInput = document.getElementById("passwordInput"); // Input Password.
const usernameInput = document.getElementById("usernameInput"); // Username input.


// View Password option with Bootstrap Icons
viewPassword.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("bi-eye");
 });
 

 // Check Authentication for the inputs provided.
 // Uses Regex...
 function checkVerify() {
    
 }



