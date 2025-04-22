document.addEventListener("DOMContentLoaded", () => {

    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClose = document.getElementById("eyeClose");

    if (!passwordInput || !errorMessage || !eyeOpen || !eyeClose) return;

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const minlength = /.{9,}/;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const digit = /[0-9]/;
        const specialChar = /[^a-zA-Z0-9\s]/;

        let isValid = true;

        if (passwordInput.value.trim() === "") {
            errorMessage.textContent = "Password input is empty";
            errorMessage.style.color = "red";
            return;
        } else if (!minlength.test(password)) {
            errorMessage.textContent = "Password must be at least 9 characters long.";
            errorMessage.style.color = "red";
            isValid = false;
        } else if (!digit.test(password)) {
            errorMessage.textContent = "Password must contain at least one digit.";
            errorMessage.style.color = "red";
            isValid = false;
        } else if (!uppercase.test(password)) {
            errorMessage.textContent = "Password must contain at least one uppercase letter.";
            errorMessage.style.color = "red";
            isValid = false;
        } else if (!lowercase.test(password)) {
            errorMessage.textContent = "Password must contain at least one lowercase letter.";
            errorMessage.style.color = "red";
            isValid = false;
        } else if (!specialChar.test(password)) {
            errorMessage.textContent = "Password must contain at least one special character.";
            errorMessage.style.color = "red";
            isValid = false;
        } else {
            errorMessage.textContent = "password is great:)";
            errorMessage.style.color = "green";
        }
        return isValid;
    });


//  Design of the icon section

    eyeClose.style.display = "inline";

    eyeOpen.addEventListener('click', () => {
        passwordInput.type = "password";
        eyeClose.style.display = "inline";
        eyeOpen.style.display = "none";
    });
    eyeClose.addEventListener('click', () => {
        passwordInput.type = "text";
        eyeOpen.style.display = "inline";
        eyeClose.style.display = "none";
    });
});

