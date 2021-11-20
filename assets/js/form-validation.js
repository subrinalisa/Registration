// Fetching Dom Elements
const form = document.querySelector('#reg-form');
const userName = document.querySelector('#username');
const emailId = document.querySelector('#emailId');
const password = document.querySelector('#pw');
const confirmPassword = document.querySelector('#confirmPw');

// Form Submit Event
form.addEventListener('submit', function (e) {
    e.preventDefault();
    userNameValidation(userName, userName.value.trim(), 4, 16);
    emailValidation(emailId, emailId.value);
    passwordValidation(password, password.value);
    confirmPwValidation(password, confirmPassword);
});

// Username Validation
function userNameValidation(username, value, minLength, maxLength) {
    if (value.length == 0) {
        displayError(username, `Enter a user name`);
    } else if (value.length < minLength) {
        displayError(username, `Enter minimum ${minLength} characters`);
    } else if (value.length > maxLength) {
        displayError(username, `Can't exceed ${maxLength} characters`);
    } else {
        displaySuccess(username);
    }
}

// Email Validation
function emailValidation(email, value) {
    if (value == "") {
        displayError(email, `Enter an email id`);
    } else if (!value.match(/\S+@\S+\.\S/)) {
        displayError(email, `Enter valid email id`);
    } else {
        displaySuccess(email);
    }
}

// Password Validation
function passwordValidation(password, value) {
    if (value == "") {
        displayError(password, `Enter your password`);
    } else if (!value.match(/^(?=.*[A-Z])/)) {
        displayError(password, `One uppercase letter is required`);
    } else if (!value.match(/^(?=.*\d)/)) {
        displayError(password, `One digit is required`);
    } else if (!value.match(/^(?=.*[@$!%*?&])/)) {
        displayError(password, `One special character is required`);
    } else if (!value.match(/.{8,}/)) {
        displayError(password, `At least 8 characters long`);
    } else {
        displaySuccess(password);
    }
}

// Confirm Password Validation
function confirmPwValidation(passwordOne, passwordTwo) {
    if (passwordTwo.value == "") {
        displayError(passwordTwo, `Enter your password`);
    } else if (passwordOne.value != passwordTwo.value) {
        displayError(passwordTwo, `Passwords aren't matched`);
    } else {
        displaySuccess(passwordTwo);
    }
}

// Display Error
function displayError(element, message) {
    element.parentNode.className = 'input-group form-error';
    const feedback = element.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    feedback.className = 'invalid-feedback d-block';
}

// Display Success
function displaySuccess(element) {
    element.parentNode.className = 'input-group form-success';
    element.parentNode.querySelector('.invalid-feedback').className = 'invalid-feedback d-none';
}