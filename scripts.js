const pwd = document.querySelector('.pwd #pwd');
const pwd2 = document.querySelector('.pwd2 #pwd2');
const pwdErrMsg = document.querySelector('.pwd .error');

createErrorMessage();
validateForm();


function createErrorMessage() {
    pwd.addEventListener('focusout', () => pwd2.value && handlePasswordErrMsg());
    pwd2.addEventListener('focusout', () => handlePasswordErrMsg());
}

function handlePasswordErrMsg() {
    if (isPasswordMatch()) {
        pwdErrMsg.textContent = "";
        pwd.style.border = "";
        pwd2.style.border = "";
    } else {
        pwdErrMsg.textContent = "* Password do not match";
        pwd.style.border = "1px solid red";
        pwd2.style.border = "1px solid red";
    }
}

function isPasswordMatch() {
    return pwd.value === pwd2.value;
}

function validateForm() {
    const form = document.querySelector('.create-acc');
    form?.addEventListener('submit', e => {
        if (isPasswordMatch()) {
            handlePasswordErrMsg();
            return;
        }
        e.preventDefault();
        handlePasswordErrMsg();
    });
}
