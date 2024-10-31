const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginClick() {
    console.log(loginInput.value);
}

loginButton.onclick = onLoginClick;