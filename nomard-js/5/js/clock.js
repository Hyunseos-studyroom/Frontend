const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

function newData() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
newData()
setInterval(newData, 1000)
// setTimeout(sayHello, 5000);