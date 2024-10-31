const h1 = document.querySelector(".hello > h1")

function handleTitleClick() {
    const clickedClass = "active"
    h1.classList.toggle(clickedClass);
}

h1.onclick = handleTitleClick;
