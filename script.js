const password = document.querySelector("input#password");
const confirm_pass = document.querySelector("input#confirm-password");

confirm_pass.addEventListener("input", e => {
    if (confirm_pass.value !== password.value) {
        console.log(e);
        password.style.border = "1px solid red";
        confirm_pass.style.border = "1px solid red";
        confirm_pass.setCustomValidity("Passwords do not match")
    } else {
        password.style.border = "1px solid green";
        confirm_pass.style.border = "1px solid green";
        confirm_pass.setCustomValidity("")
    }
});