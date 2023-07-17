function validateForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');

    resetErrors([firstNameInput, lastNameInput, emailInput, passwordInput], [errorFirstName, errorLastName, errorEmail, errorPassword]);
    let valid = true;

    function setErrorInfo(input, span, message) {
        input.classList.add("error-input");
        span.classList.add("error-text");
        span.innerText = message;
    }

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        setErrorInfo(firstNameInput, errorFirstName, "First Name cannot be empty.");
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 50)) {
        valid = false;
        setErrorInfo(firstNameInput, errorFirstName, "First Name must contain from 2 to 50 characters.")
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        setErrorInfo(lastNameInput, errorLastName, "Last Name cannot be empty.")
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 50)) {
        valid = false;
        setErrorInfo(lastNameInput, errorLastName, "Last Name must contain from 2 to 50 characters.")
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        setErrorInfo(emailInput, errorEmail, "Email cannot be empty.")
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        setErrorInfo(emailInput, errorEmail, "Field is not an email")
    }

    if (!checkRequired(passwordInput.value)) {
        valid = false;
        setErrorInfo(passwordInput, errorPassword, "Password cannot be empty.")
    } else if (!checkTextLengthRange(passwordInput.value, 8, 50)) {
        valid = false;
        setErrorInfo(passwordInput, errorPassword, "Password must contain from 8 to 50 characters.")
    } else if (hasOneLowerCase(passwordInput.value)) {
        valid = false;
        setErrorInfo(passwordInput, errorPassword, "Password must contain at least one lowercase letter.")
    } else if (hasOneUpperCase(passwordInput.value)) {
        valid = false;
        setErrorInfo(passwordInput, errorPassword, "Password must contain at least one uppercase letter.")
    } else if (hasOneNumber(passwordInput.value)) {
        valid = false;
        setErrorInfo(passwordInput, errorPassword, "Password must contain at least one number.")
    }

    return valid;
}

