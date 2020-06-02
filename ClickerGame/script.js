let clicker = document.getElementById("clicker");
let counter = document.getElementById("clicks");

let firstUpgrade = true;

let total = 0;
// clickMultiplier is what changes how many clicks you gain per click
let clickMultiplier = 1;
// cps is how many auto adders you gain per second
let cps = 0;

clicker.addEventListener("click", () => {
    clicker.classList.add("pulsate");
    total += clickMultiplier;
    counter.innerHTML = total + " clicks";
    console.log(total);
    checkForUpgrade();
});

clicker.addEventListener("animationend", () => {
    clicker.classList.remove("pulsate");
});

// So javascript requires you to put stuff in functions??? (GOOGLE THIS)
function checkForUpgrade() {
    if (total === 100 && firstUpgrade) {
        createUpgrade("First Upgrade", "Doubles click power", "100 clicks")
        firstUpgrade = false;
    }
}


function createUpgrade(title, description, cost) {
    let container = document.getElementById("upgrade-container");
    let upgrade = document.createElement("div");
    let upgradeTitle = document.createElement("p");
    upgradeTitle.innerHTML = title;
    let upgradeDescription = document.createElement("p");
    upgradeDescription.innerHTML = description;
    let upgradeCost = document.createElement("p");
    upgradeCost.innerHTML = cost;
    upgrade.appendChild(upgradeTitle);
    upgrade.appendChild(upgradeDescription);
    upgrade.appendChild(upgradeCost);
    container.appendChild(upgrade);
}
