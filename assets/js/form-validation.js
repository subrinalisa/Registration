'use strict';
// Fetching Dom Elements
const form = document.querySelector('#reg-form');
const userName = document.querySelector('#username');
const emailId = document.querySelector('#emailId');
const password = document.querySelector('#pw');
const confirmPassword = document.querySelector('#confirmPw');

// Form Submit Event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const uName = userNameValidation(userName, userName.value.trim(), 4);
    const uEmail = emailValidation(emailId, emailId.value);
    const pw = passwordValidation(password, password.value);
    const cpw = confirmPwValidation(password, confirmPassword);
    if (uName && uEmail && pw && cpw) {
        $('.modal').modal('show');
    }
});

// Username Validation
const userNameValidation = (username, value, minLength) => {
    if (checkEmpty(username, value)) {
        if (!value.match(/[A-Za-z]/)) {
            return displayError(username, `User name must start with a string`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Email Validation
const emailValidation = (email, value) => {
    if (checkEmpty(email, value)) {
        if (!value.match(/\S+@\S+\.\S/)) {
            return displayError(email, `Enter valid email id`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Password Validation
const passwordValidation = (password, value) => {
    if (checkEmpty(password, value)) {
        if (!value.match(/^(?=.*[A-Z])/)) {
            return displayError(password, `One uppercase letter is required`);
        } else if (!value.match(/^(?=.*\d)/)) {
            return displayError(password, `One digit is required`);
        } else if (!value.match(/^(?=.*[@$!%*?&])/)) {
            return displayError(password, `One special character is required`);
        } else if (!value.match(/.{8,}/)) {
            return displayError(password, `At least 8 characters long`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Confirm Password Validation
const confirmPwValidation = (passwordOne, passwordTwo) => {
    if (checkEmpty(passwordTwo, passwordTwo.value)) {
        if (passwordOne.value != passwordTwo.value) {
            return displayError(passwordTwo, `Passwords aren't matched`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Display Error
const displayError = (element, message) => {
    getFeedback(element, message, 'input-group form-error', 'invalid-feedback d-block');
    return false;
}

// Display Success
const displaySuccess = (element) => {
    getFeedback(element, '', 'input-group form-success', 'invalid-feedback d-none');
    return true;
}

// Check Empty input
const checkEmpty = (element, value) => {
    if (value == "") {
        return displayError(element, `Enter your ${element.name}`);
    } else {
        return displaySuccess(element);
    }
}

// Feedback
const getFeedback = (element, message, parentClass, feedbackClass) => {
    element.parentNode.className = parentClass;
    const feedback = element.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    feedback.className = feedbackClass;
}