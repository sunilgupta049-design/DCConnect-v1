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