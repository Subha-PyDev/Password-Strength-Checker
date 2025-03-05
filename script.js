function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthBar = document.getElementById("strengthBar");
    var strengthText = document.getElementById("strengthText");

    var strength = 0;

    if (password.length >= 8) strength++;  
    if (/[A-Z]/.test(password)) strength++;  
    if (/\d/.test(password)) strength++;  
    if (/[@$!%*?&]/.test(password)) strength++;  

    switch (strength) {
        case 0:
            strengthBar.className = "";
            strengthText.innerText = "";
            break;
        case 1:
            strengthBar.className = "weak";
            strengthText.innerText = "Weak";
            strengthText.style.color = "red";
            break;
        case 2:
            strengthBar.className = "medium";
            strengthText.innerText = "Medium";
            strengthText.style.color = "orange";
            break;
        case 3:
        case 4:
            strengthBar.className = "strong";
            strengthText.innerText = "Strong";
            strengthText.style.color = "green";
            break;
    }
}

document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});