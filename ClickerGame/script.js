let clicker = document.getElementById("clicker");
let counter = document.getElementById("clicks");
let unlockedUpgrades = [];
let boughtUpgrades = [];

// FIX BUG, CANT CLICK ON SECOND UPGRADE WITH FIRST UPGRADE ALSO UNLOCKED

let total = 0;
// clickMultiplier is what changes how many clicks you gain per click
let clickMultiplier = 1;
// cps is how many auto adders you gain per second
let cps = 0;

let numOfUserClicks = 0;

clicker.addEventListener("click", () => {
    clicker.classList.add("pulsate");
    total += clickMultiplier;
    counter.innerHTML = total + " clicks";
    numOfUserClicks++;
    document.getElementById("user-stats-clicks").innerHTML = "# of User Clicks: " + numOfUserClicks.toString();
    console.log(total); // remove later
    checkForUpgrade();
});

clicker.addEventListener("animationend", () => {
    clicker.classList.remove("pulsate");
});


// So javascript requires you to put stuff in functions??? (GOOGLE THIS)
function checkForUpgrade() {
    if (total === 200 && !checkUnlocked("Second Upgrade")) {
        new upgrade("Second Upgrade", "Doubles click power again", "500", "click", "2");
    }
    if (total === 100 && !checkUnlocked("First Upgrade")) {
        new upgrade("First Upgrade", "Doubles click power", "100", "click", "2");
    }
}

// Goes through the array of unlocked upgrades to make sure it is not unlocked
function checkUnlocked(title) {
    for (let i = 0; i < unlockedUpgrades.length; i++) {
        if (title === unlockedUpgrades[i].getTitle()) {
            return true;
        }
    }
    return false;
}

class upgrade {
    // Creates a new achievement and pushes it into the unlocked upgrades array and makes it visible to the user
    constructor(title, description, cost, powerUpType, factor) {
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.powerUpType = powerUpType;
        this.factor = factor;
        unlockedUpgrades.push(this);
        this.createUpgrade(this.title, this.description, this.cost);
    }

    getTitle() {
        return this.title;
    }

    getCost() {
        return this.cost;
    }

    getPowerUpType() {
        return this.powerUpType;
    }

    getFactor() {
        return this.factor;
    }

    createUpgrade(title, description, cost) {
        // adds the upgrade to the container
        let container = document.getElementById("upgrade-container");
        let upgrade = document.createElement("div");
        let upgradeTitle = document.createElement("p");
        upgradeTitle.innerHTML = title;
        let upgradeDescription = document.createElement("p");
        upgradeDescription.innerHTML = description;
        let upgradeCost = document.createElement("p");
        upgradeCost.innerHTML = cost + " clicks";
        upgrade.appendChild(upgradeTitle);
        upgrade.appendChild(upgradeDescription);
        upgrade.appendChild(upgradeCost);
        upgrade.classList.add("upgrade");
        container.appendChild(upgrade);

        // removes the upgrade if clicked as well as pushing it to bought upgrades
        upgrade.addEventListener("click", () => {
            if (total >= this.getCost()) {
                total -= parseInt(this.getCost());
                counter.innerHTML = total + " clicks";
                upgrade.style.display = "none";
                boughtUpgrades.push(this);
                // Checks which power up to upgrade, in this case it is the click
                if (this.getPowerUpType() === "click") {
                    upgradeClick(this.getFactor());
                }

                // Brings a pop up of what upgrade you just bought briefly
                let upgradeBoughtPopUp = document.getElementById("popup");
                let upgradeName = document.createElement("p");
                upgradeName.innerHTML = this.getTitle();
                upgradeBoughtPopUp.appendChild(upgradeName);
                upgradeBoughtPopUp.classList.add("pop-flash");
                upgradeBoughtPopUp.addEventListener("animationend", () => {
                    upgradeBoughtPopUp.classList.remove("pop-flash");
                    upgradeBoughtPopUp.removeChild(upgradeName);
                });
            }
        });
    }
}

// Upgrades the user click by given factor
function upgradeClick(factor) {
    clickMultiplier *= factor;
    document.getElementById("click-multi-display").innerHTML = "# of Clicks per User Click: " + clickMultiplier.toString();
}

