let spanEl = document.getElementById("span");
let inputEl = document.getElementById("input");
let counter = 10;

let timer = setInterval(function() {
    counter -= 1;
    spanEl.innerHTML = counter;
    if (counter === 0) {
        clearInterval(timer);
        let para = document.getElementById("para").textContent = "Bomb Blasted"
    }
}, 1000);

inputEl.addEventListener("keydown", function(event) {
    let inputValue = inputEl.value;
    if (event.key === "Enter" && inputValue === "Diffuse" && counter !== 0) {
        clearInterval(timer)
        let para = document.getElementById("para").textContent = "Bomb Diffused"
    }
})