// TO-DO: Add an upgrade for 10 cursors bought
// -Add a nice div box to the user clicks per click
let audio = new Audio();

let clicker = document.getElementById("clicker");
let counter = document.getElementById("clicks");
let cpsCounter = document.getElementById("cps");
let unlockedUpgrades = [];

let total = 0;
// clickMultiplier is what changes how many clicks you gain per click
let clickMultiplier = 1;
let numOfUserClicks = 0;

// cps is how many auto adders you gain per second
let cps = 0;

let cursorCPS = document.getElementById("cursor");
let cursorPrice = 50;
let cursorFactor = 1;
let ownedCursors = 0;

let robotCPS = document.getElementById("robot");
let robotPrice = 1000;
let robotFactor = 5;
let ownedRobots = 0;

let autoClickerCPS = document.getElementById("autoclicker");
let autoClickerPrice = 10000;
let autoClickerFactor = 50;
let ownedAutoClickers = 0;

// Asks the user before they leave or refresh page
window.onbeforeunload = function (e) {
    e.returnValue = 'onbeforeunload';
    return 'onbeforeunload';
};

// Does this forever to let helper CPS add to total
setInterval(helperUpdate, 1000);

// Continuously checks if the user can buy this upgrade
setInterval(checkBuyable, 0);

// Adds an event to the clicker which adds to the total while pulsating by adding the pulsate animation
clicker.addEventListener("click", () => {
    clicker.classList.add("pulsate");
    total += clickMultiplier;
    numOfUserClicks++;
    popUpCPS();
    counter.innerHTML = total.toLocaleString() + " clicks";
    document.getElementById("user-stats-clicks").innerHTML = "Total # of User Clicks: " + numOfUserClicks.toLocaleString();
    play("Sounds/Click.wav");
    checkForUpgrade();
    checkForHelperDisplay();
});

// Change cursor style when mouse hovers over the clickable object
clicker.addEventListener("mouseover", () => {
    document.body.style.cursor = "pointer";
});

clicker.addEventListener("mouseout", () => {
    document.body.style.cursor = "default"
});

// After animation finishes, remove the pulsate animation so it can be used again
clicker.addEventListener("animationend", () => {
    clicker.classList.remove("pulsate");
});


// So javascript requires you to put stuff in functions??? (GOOGLE THIS)
function checkForUpgrade() {

    // User Click Upgrades
    if (total >= 100 && !checkUnlockedUpgrades("First Upgrade")) {
        new upgrade("First Upgrade", "Doubles click power", "500", "click", "2");
    }
    if (total >= 1000 && numOfUserClicks >= 1100 && !checkUnlockedUpgrades("Second Upgrade")) {
        new upgrade("Second Upgrade", "Doubles click power again", "2500", "click", "2");
    }
    if (total >= 1000 && numOfUserClicks >= 5000 && !checkUnlockedUpgrades("Third Upgrade")) {
        new upgrade("Third Upgrade", "Doubles click power again!", "10000", "click", "2");
    }

    // Cursor Upgrades
    if (ownedCursors >= 10 && !checkUnlockedUpgrades("Double Cursors")) {
        new upgrade("Double Cursors", "Doubles CPS of Cursors", "1000", "cursor", "2");
    }
    if (ownedCursors >= 25 && !checkUnlockedUpgrades("Quad Cursors")) {
        new upgrade("Quad Cursors", "Doubles CPS of Cursors", "15000", "cursor", "2");
    }

    // Robot Upgrades
    if (ownedRobots >= 10 && !checkUnlockedUpgrades("More Efficient Robots")) {
        new upgrade("More Efficient Robots", "Doubles CPS of Robots", "10000", "robot", "2");
    }
    if (ownedRobots >= 25 && !checkUnlockedUpgrades("Smarter Robots")) {
        new upgrade("Smarter Robots", "Doubles CPS of Robots", "50000", "robot", "2");
    }

    // Auto Clicker Upgrades
    if (ownedAutoClickers >= 10 && !checkUnlockedUpgrades("Premium Auto Clickers")) {
        new upgrade("Premium Auto Clickers", "Doubles CPS of Auto Clickers", "100000", "autoClicker", "2");
    }
}

// Function checks if a new helper is ready to display
function checkForHelperDisplay() {
    if (ownedCursors >= 10) {
        robotCPS.style.display = "block";
    }
    if (ownedRobots >= 15) {
        autoClickerCPS.style.display = "block";
    }
}

// Goes through the array of unlocked upgrades to make sure it is not unlocked
function checkUnlockedUpgrades(title) {
    for (let i = 0; i < unlockedUpgrades.length; i++) {
        if (title === unlockedUpgrades[i].getTitle()) {
            return true;
        }
    }
    return false;
}

// Increments the total by however many CPS every second
// Updates the total clicks the user has and the CPS they get from helpers / Checks if user can buy an upgrade
function helperUpdate() {
    total += cps;
    counter.innerHTML = total.toLocaleString() + " clicks";
    cpsCounter.innerHTML = cps.toLocaleString() + " helpers per second";
    checkForUpgrade();
    checkForHelperDisplay();
}

function play(src) {
    audio.src = src;
    audio.play();
}

// Event for clicking on clicker buyer
cursorCPS.addEventListener("click", () => {
    if (total >= cursorPrice) {
        cps += cursorFactor;
        ownedCursors++;
        total -= cursorPrice;
        cursorPrice = Math.floor(cursorPrice *= 1.2);
        document.getElementById("cursor-count").innerHTML = ownedCursors.toLocaleString() + " owned";
        document.getElementById("cursor-price").innerHTML = "Cost: " + cursorPrice.toLocaleString() + " clicks";
        counter.innerHTML = total + " clicks";
        play("Sounds/CPSBought.wav");
    }
});

// Event for clicking on robot buyer
robotCPS.addEventListener("click", () => {
    if (total >= robotPrice) {
        cps += robotFactor;
        ownedRobots++;
        total -= robotPrice;
        robotPrice = Math.floor(robotPrice *= 1.2);
        document.getElementById("robot-count").innerHTML = ownedRobots.toLocaleString() + " owned";
        document.getElementById("robot-price").innerHTML = "Cost: " + robotPrice.toLocaleString() + " clicks";
        counter.innerHTML = total + " clicks";
        play("Sounds/CPSBought.wav");
    }
});

autoClickerCPS.addEventListener("click", () => {
    if (total >= autoClickerPrice) {
        cps += autoClickerFactor;
        ownedAutoClickers++;
        total -= autoClickerPrice;
        autoClickerPrice = Math.floor(autoClickerPrice *= 1.2);
        document.getElementById("autoclicker-count").innerHTML = ownedAutoClickers.toLocaleString() + " owned";
        document.getElementById("autoclicker-price").innerHTML = "Cost: " + autoClickerPrice.toLocaleString() + " clicks";
        counter.innerHTML = total + " clicks";
        play("Sounds/CPSBought.wav");
    }
});


// This will constantly check if helpers are buyable by changing their color when ready
function checkBuyable() {
    if (total >= cursorPrice) {
        cursorCPS.style.background = "green";
    } else {
        cursorCPS.style.background = "#ff3333";
    }
    if (total >= robotPrice) {
        robotCPS.style.background = "green";
    } else {
        robotCPS.style.background = "#ff3333"
    }
    if (total >= autoClickerPrice) {
        autoClickerCPS.style.background = "green";
    } else {
        autoClickerCPS.style.background = "#ff3333"
    }
}

// This is the upgrade class for all of the upgrades in the game
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
        upgradeCost.innerHTML = cost.toLocaleString() + " clicks"; // BUG, no commas
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
                // Checks which power up to upgrade, in this case it is the click
                if (this.getPowerUpType() === "click") {
                    upgradeClick(this.getFactor());
                } else if (this.getPowerUpType() === "cursor") {
                    upgradeCursor(this.getFactor());
                } else if (this.getPowerUpType() === "robot") {
                    upgradeRobot(this.getFactor());
                } else if (this.getPowerUpType() === "autoClicker") {
                    upgradeAutoClicker(this.getFactor());
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
                play("Sounds/BoughtUpgrade.mp3");
            }
        });
    }
}

// Upgrades the user click by given factor
function upgradeClick(factor) {
    clickMultiplier *= factor;
    document.getElementById("click-multi-display").innerHTML = "# of Clicks per User Click: " + clickMultiplier.toLocaleString();
}

function upgradeCursor(factor) {
    // I have to subtract the already owned cursors multiplier from cps before adding it again
    cps -= (cursorFactor * ownedCursors);
    cursorFactor *= factor;
    document.getElementById("cursor-current-CPS").innerHTML = "+" + cursorFactor.toLocaleString() + " CPS";
    cps += (cursorFactor * ownedCursors);
}

function upgradeRobot(factor) {
    cps -= (robotFactor * ownedRobots);
    robotFactor *= factor;
    document.getElementById("robot-current-CPS").innerHTML = "+" + robotFactor.toLocaleString() + " CPS";
    cps += (robotFactor * ownedRobots);
}

function upgradeAutoClicker(factor) {
    cps -= (autoClickerFactor * ownedAutoClickers);
    autoClickerFactor *= factor;
    document.getElementById("autoclicker-current-CPS").innerHTML = "+" + autoClickerFactor.toLocaleString() + " CPS";
    cps += (autoClickerFactor * ownedAutoClickers);
}

// This pops up the cp of the mouse when the clicker is clicked
// NOTE: Using CSS style in Javascript must match what you put in CSS (the 'px' in the left styler)
function popUpCPS() {
    let popUp = document.createElement("p");
    popUp.innerHTML = "+" + clickMultiplier;
    // This just sets the x (left) and y (top) of where the cursor is currently positioned
    popUp.style.left = event.pageX.toString() + "px";
    popUp.style.top = event.pageY.toString() + "px";
    clicker.appendChild(popUp);
    popUp.classList.add("showCPS");
    popUp.addEventListener("animationend", () => {
        clicker.removeChild(popUp);
    });
}


