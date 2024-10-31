const clock = document.querySelector("h2")

function newData() {
    const date = new Date();
    clock.innerText = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}

newData()
setInterval(newData, 1000)
// setTimeout(sayHello, 5000);