Login Panel
===========

This is a login panel that allows users to enter their email and password to log in to their account.

Features
--------

-   Email validation
-   Password validation
-   Forgot Password option

Technologies
------------

-   HTML
-   CSS
-   JavaScript
-   Bootstrap Icons

Usage
-----

1.  Open the `index.html` file in a web browser.
2.  Enter your email and password in the provided fields.
3.  Click on the "Login" button to submit the form.
4.  If the email or password is invalid, an error message will appear below the corresponding input field.
5.  If you forget your password, click on the "Forgot Password" link.

Note
----

-   This code uses an external CSS file (style.css) and an external JavaScript file (script.js) for styling and validation respectively.
-   This code uses Bootstrap Icons CDN to get the icons.

Additional Resources
--------------------

-   [Bootstrap Icons](https://icons.getbootstrap.com/)
-   [HTML](https://www.w3schools.com/html/)
-   [CSS](https://www.w3schools.com/css/)
-   [JavaScript](https://www.w3schools.com/js/)

JavaScript for Login Panel
==========================

This is a JavaScript code that is used in conjunction with the HTML and CSS provided in the previous question. It provides validation for the email and password fields in the login form, as well as an option to view the password.

Variables
---------

-   `viewPassword`: variable that gets the element with the id "bi-eye-slash"
-   `passwordInput`: variable that gets the element with the id "passwordInput"
-   `usernameInput`: variable that gets the element with the id "usernameInput"
-   `button`: variable that gets the element with the id "log"
-   `errorMessageUsername`: variable that gets the element with the id "errormessage"
-   `errorMessagePassword`: variable that gets the element with the id "errormessage-password"

Functions
---------

-   `checkVerify`: arrow function that is called when the button is clicked. It uses a regular expression to check if the input in the email field is in the correct format (i.e., contains an '@' symbol and a period). If the email and password fields are empty or contain less than 8 characters, it will show an error message.

-   `viewPassword.addEventListener("click", function()`: an event listener that listens for a click on the "view password" icon and toggles the visibility of the password.

Note
----

-   This code uses Bootstrap Icons library to change the icon on the view password button.
-   The code uses `.test()` and `.length` method to check for the validation of the email and password fields.
-   `.style.display` and `.classList.toggle()` methods are used to show/hide the error message and change the icon respectively.

Additional Resources
--------------------

-   [JavaScript Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
-   [JavaScript Event Listener](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
-   [getattribute](https://developer.mozilla.org/en-US/)