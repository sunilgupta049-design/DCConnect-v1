// Show / Hide Password

const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");

if (showPassword && password) {
    showPassword.addEventListener("change", function () {
        if (this.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
}
// Login Form Validation

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if(email === ""){
            alert("Please enter your email.");
            return;
        }

        if(password === ""){
            alert("Please enter your password.");
            return;
        }

        if(password.length < 6){
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Login Successful!");
    });

}
// ==========================
// Register Page Validation
// ==========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    const showRegisterPassword = document.getElementById("showRegisterPassword");
    const regPassword = document.getElementById("regPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    // Show / Hide Passwords
    showRegisterPassword.addEventListener("change", function () {

        const type = this.checked ? "text" : "password";

        regPassword.type = type;
        confirmPassword.type = type;

    });

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = regPassword.value;
        const confirm = confirmPassword.value;

        if (fullname === "") {
            alert("Please enter your full name.");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration Successful!");

    });

}