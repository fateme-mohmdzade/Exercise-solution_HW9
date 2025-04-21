
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");

//  Design of the icon section and location of error validation
eyeClose.style.display = "none";

eyeOpen.addEventListener('click', function () {
    passwordInput.type = "text";
    eyeOpen.style.display = "none";
    eyeClose.style.display = "inline";
});
eyeClose.addEventListener('click', function () {
    passwordInput.type = "password";
    eyeClose.style.display = "none";
    eyeOpen.style.display = "inline";
});

passwordInput.addEventListener('input', function () {
    if (passwordInput.value.trim() === "") {
        errorMessage.textContent = "Password input is empty";
    }
});