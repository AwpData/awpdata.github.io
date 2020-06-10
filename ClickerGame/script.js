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
let cursorPrice = 100;
let cursorFactor = 1;
let ownedCursors = 0;

let robotCPS = document.getElementById("robot");
let robotPrice = 1000;
let robotFactor = 2;
let ownedRobots = 0;

window.onload = getMousePosition();
let x = null;
let y = null;

// Does this forever to let CPS add to total
setInterval(update, 1000);

// Continuously checks if the user can buy this upgrade
setInterval(checkBuyable, 0);

// Adds an event to the clicker which adds to the total while pulsating by adding the pulsate animation
clicker.addEventListener("click", () => {
    clicker.classList.add("pulsate");
    total += clickMultiplier;
    numOfUserClicks++;
    document.getElementById("user-stats-clicks").innerHTML = "Total # of User Clicks: " + numOfUserClicks.toString();
    update();
    play("Sounds/Click.wav");
});

// After animation finishes, remove the pulsate animation so it can be used again
clicker.addEventListener("animationend", () => {
    clicker.classList.remove("pulsate");
});


// So javascript requires you to put stuff in functions??? (GOOGLE THIS)
function checkForUpgrade() {
    if (total >= 100 && !checkUnlockedUpgrades("First Upgrade")) {
        new upgrade("First Upgrade", "Doubles click power", "100", "click", "2");
    }
    if (total >= 200 && numOfUserClicks >= 250 && !checkUnlockedUpgrades("Second Upgrade")) {
        new upgrade("Second Upgrade", "Doubles click power again", "500", "click", "2");
    }
    if (total >= 1000 && numOfUserClicks >= 1000 && !checkUnlockedUpgrades("Third Upgrade")) {
        new upgrade("Third Upgrade", "Doubles click power again!", "10000", "click", "2");
    }
    if (ownedCursors >= 10 && !checkUnlockedUpgrades("Double Cursors")) {
        new upgrade("Double Cursors", "Doubles CPS of Cursors", "1000", "cursor", "2");
    }
    if (ownedCursors >= 25 && !checkUnlockedUpgrades("Quad Cursors")) {
        new upgrade("Quad Cursors", "Doubles CPS of Cursors", "15000", "cursor", "2");
    }
    if (ownedRobots >= 10 && !checkUnlockedUpgrades("More Efficient Robots")) {
        new upgrade("More Efficient Robots", "Doubles CPS of Robots", "10000", "robot", "2");
    }
    if (ownedRobots >= 25 && !checkUnlockedUpgrades("Smarter Robots")) {
        new upgrade("Smarter Robots", "Doubles CPS of Robots", "50000", "robot", "2");
    }
}

// Function checks if a new helper is ready to display
function checkForHelperDisplay() {
    if (ownedCursors >= 10) {
        robotCPS.style.display = "block";
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
function update() {
    total += cps;
    counter.innerHTML = total + " clicks";
    cpsCounter.innerHTML = cps + " helpers per second";
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
        document.getElementById("cursor-count").innerHTML = ownedCursors.toString() + " owned";
        document.getElementById("cursor-price").innerHTML = "Cost: " + cursorPrice.toString() + " clicks";
        counter.innerHTML = total + " clicks";
    }
});

// Event for clicking on robot buyer
robotCPS.addEventListener("click", () => {
    if (total >= robotPrice) {
        cps += robotFactor;
        ownedRobots++;
        total -= robotPrice;
        robotPrice = Math.floor(robotPrice *= 1.2);
        document.getElementById("robot-count").innerHTML = ownedRobots.toString() + " owned";
        document.getElementById("robot-price").innerHTML = "Cost: " + robotPrice.toString() + " clicks";
        counter.innerHTML = total + " clicks";
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
                // Checks which power up to upgrade, in this case it is the click
                if (this.getPowerUpType() === "click") {
                    upgradeClick(this.getFactor());
                } else if (this.getPowerUpType() === "cursor") {
                    upgradeCursor(this.getFactor());
                } else if (this.getPowerUpType() === "robot") {
                    upgradeRobot(this.getFactor());
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
    document.getElementById("click-multi-display").innerHTML = "# of Clicks per User Click: " + clickMultiplier.toString();
}

function upgradeCursor(factor) {
    // I have to subtract the already owned cursors multiplier from cps before adding it again
    cps -= (cursorFactor * ownedCursors);
    cursorFactor *= factor;
    document.getElementById("cursor-current-CPS").innerHTML = "+" + factor.toString() + " CPS";
    cps += (cursorFactor * ownedCursors);
}

function upgradeRobot(factor) {
    cps -= (robotFactor * ownedRobots);
    robotFactor *= factor;
    document.getElementById("robot-current-CPS").innerHTML = "+" + factor.toString() + " CPS";
    cps += (robotFactor * ownedRobots);
}

function getMousePosition() {
    document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    document.getElementById("x-pos").innerHTML = "x position: " + x.toString();
    document.getElementById("y-pos").innerHTML = "y position: " + y.toString();
}


