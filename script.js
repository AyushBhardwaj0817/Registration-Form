const togglePasswordVisibility = (inputElement, toggleElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
}

const validateForm = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("passwordConfirm").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const passwordConfirm = document.getElementById("passwordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");

togglePassword.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, togglePassword);
});

togglePasswordConfirm.addEventListener("click", () => {
    togglePasswordVisibility(passwordConfirm, togglePasswordConfirm);
});


     


     
    
    
     

     
    


