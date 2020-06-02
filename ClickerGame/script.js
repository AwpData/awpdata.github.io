let clicker = document.getElementById("clicker");
let counter = document.getElementById("clicks");

let total = 0;
// clickMultiplier is what changes how many clicks you gain per click
let clickMultiplier = 1;
// cps is how many auto adders you gain per second
let cps = 0;

clicker.addEventListener("click", () => {
    clicker.classList.add("pulsate");
    total += clickMultiplier;
    counter.innerHTML = total + " clicks";
});

clicker.addEventListener("animationend", () => {
    clicker.classList.remove("pulsate");
});
