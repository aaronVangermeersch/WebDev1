const setup = () => {
    let knop = document.getElementById("change");
    knop.addEventListener("click", veranderen)
}

const veranderen = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}
window.addEventListener("load", setup);