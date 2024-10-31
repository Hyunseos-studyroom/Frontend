const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.onclick = onLoginClick;