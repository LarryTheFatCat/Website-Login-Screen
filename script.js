const viewPassword = document.getElementById("bi-eye-slash");
const passwordInput = document.getElementById("passwordInput");
const usernameInput = document.getElementById("usernameInput");
const button = document.getElementById("log");
const errorMessageUsername = document.getElementById("errormessage");
const errorMessagePassword = document.getElementById("errormessage-password");
const newPageTitle = "test_1"

// Verification code, regex works dont ask why
const checkVerify = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Determines if user correctly inputs email
    const validateEmail = emailRegex.test(usernameInput.value);

    if (passwordInput.value.length < 8 && validateEmail === false) { // Checks for incorrect input on click
        errorMessageUsername.style.display = "block";
        errorMessagePassword.style.display = "block";
    } else if (passwordInput.value.length > 8 && validateEmail === true) { // Checks for correct output after click
        errorMessageUsername.style.display = "none";
        errorMessagePassword.style.display = "none";
    }
}

// View Password option with Bootstrap Icons
viewPassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});