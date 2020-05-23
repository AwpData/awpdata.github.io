let inputBox = document.getElementById("input-text"); // Text input-box
let dialog = document.getElementById("dialog");
let image = document.getElementById("image");
let visibleInventory = document.getElementById("inventory"); // Remove??
// This will hold objects that the user picks up and will update
let inventory = [];

const imgMenu = new Image();
imgMenu.src = "PhotosOfLocations/VariousScreens/MenuScreen.png";
const imgHelp = new Image();
imgHelp.src = "PhotosOfLocations/VariousScreens/HelpScreen.png";

const imgL1 = new Image();
imgL1.src = "PhotosOfLocations/Location1/Location1.png";
const imgL1A = new Image();
imgL1A.src = "PhotosOfLocations/Location1/Location1a.png";
const imgL1B = new Image();
imgL1B.src = "PhotosOfLocations/Location1/Location1b.png";
const imgL1C = new Image();
imgL1C.src = "PhotosOfLocations/Location1/Location1c.png";
const imgL1D = new Image();
imgL1D.src = "PhotosOfLocations/Location1/Location1d.png";
const imgL1E = new Image();
imgL1E.src = "PhotosOfLocations/Location1/Location1e.png";

const imgL2 = new Image();
imgL2.src = "PhotosOfLocations/Location2/Location2.png";
const imgL2A = new Image();
imgL2A.src = "PhotosOfLocations/Location2/Location2a.png";
const imgL2B = new Image();
imgL2B.src = "PhotosOfLocations/Location2/Location2b.png";
const imgL2C = new Image();
imgL2C.src = "PhotosOfLocations/Location2/Location2c.png";

const imgKeyDoor = new Image(150, 50);
imgKeyDoor.src = "PhotosOfModels/Key_Door.png";
const imgMagnifyingGlass = new Image(100, 90);
imgMagnifyingGlass.src = "PhotosOfModels/MagnifyingGlass.png";
const imgRag = new Image(70, 50);
imgRag.src = "PhotosOfModels/Rags.png";

// True = found (invisible), false = not found (visible)
let keyFound = false, electricKeyFound = false, magnifierFound = false, ragFound = false;

// Stores last location of each location so when user switches to it, it will be that one
let lastStoredImg = imgL1.src; // This is particularly for the help screen
let lastStoredLoc1 = imgL1.src;
let lastStoredLoc2 = imgL2.src;

// Booleans that tell if user visits location for the first time
let firstTimeLoc1 = true;
const firstTimeDialogLoc1 = "Uh oh, I forgot to turn in my final project. Better get to my computer!";
let firstTimeLoc2 = true;
const firstTimeDialogLoc2 = "My computer is not working! I got to find out what is wrong";

// Location 1's poster location (true = up, false = down)
let posterDown = false;
// Location 2's computer power status (true = on, false = off)
let computerOn = false;

function getInput(form) {
    let input = form.inputBox.value.toLowerCase();
    parseInput(input);
    updateInventory(inventory);
    form.reset();
}

// Arrow function used to add event listener that allows user to press ENTER to submit input
inputBox.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
function show_image(src) {
    let img = document.createElement("img");
    img.src = src;
    image.src = img.src;
}

//https://stackoverflow.com/questions/42327498/output-an-array-of-images-in-javascript
function updateInventory(array) {
    // Blanks HTML div before re-printing image array again;
    document.getElementById("inventory").innerHTML = "";
    // Gets each image and prints it to the #inventory div
    array.forEach(image => {
        let img = document.createElement("img");
        img.src = image.src;
        img.width = image.width;
        img.height = image.height;
        document.getElementById("inventory").appendChild(img);
    });
}

function parseInput(input) {
    if (image.src === imgMenu.src) {
        if (input === "play") {
            show_image(imgHelp.src);
            dialog.innerHTML = "Type \"play\" or \"got it!\"";
        }
    } else if (image.src === imgHelp.src) {
        if (input === "play" || input === "got it") {
            show_image(lastStoredImg);
            dialog.style.display = "block";
            if (firstTimeLoc1) { // The first statement at the start of the game
                dialog.innerHTML = firstTimeDialogLoc1;
                firstTimeLoc1 = false;
            }
        }
    } else if (image.src.match("Location1")) {
        loc1Statements(input);
    } else if (image.src.match("Location2")) {
        loc2Statements(input);
    }
    if (input === "help") {
        show_image(imgHelp.src);
        dialog.style.display = "none";
    }
}

// KEY cannot be found unless POSTER is pulled down!
function loc1Statements(input) {
    // Pull down poster (MAG not found, KEY not found)
    if (input === "poster" && magnifierFound === false && keyFound === false && posterDown === false) {
        show_image(imgL1A.src);
        lastStoredLoc1 = imgL1A.src;
        posterDown = true;
        dialog.innerHTML = "I forgot I hid a \"key\" here!";
    }
    // Pull down poster (MAG found, KEY not found)
    else if (input === "poster" && magnifierFound === true && keyFound === false && posterDown === false) {
        show_image(imgL1D.src);
        lastStoredLoc1 = imgL1D.src;
        posterDown = true;
        dialog.innerHTML = "I forgot I hid a \"key\" here!";
    }
    // Get key (MAG not found, POSTER down)
    else if (input === "key" && magnifierFound === false && keyFound === false && posterDown === true) {
        show_image(imgL1B.src);
        lastStoredLoc1 = imgL1B.src;
        keyFound = true;
        dialog.innerHTML = "This may come in handy";
        inventory.push(imgKeyDoor);
    }
    // Get key (MAG found, POSTER down)
    else if (input === "key" && magnifierFound === true && keyFound === false && posterDown === true) {
        show_image(imgL1E.src);
        lastStoredLoc1 = imgL1E.src;
        keyFound = true;
        dialog.innerHTML = "This may come in handy";
        inventory.push(imgKeyDoor);
    }
    // Get MAG (KEY not found, POSTER up)
    else if (input === "magnifying glass" && magnifierFound === false && keyFound === false && posterDown === false) {
        show_image(imgL1C.src);
        lastStoredLoc1 = imgL1C.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }
    // Get MAG (KEY not found, POSTER down)
    else if (input === "magnifying glass" && magnifierFound === false && keyFound === false && posterDown === true) {
        show_image(imgL1D.src);
        lastStoredLoc1 = imgL1D.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }
    // Get MAG (KEY found, POSTER down)
    else if (input === "magnifying glass" && magnifierFound === false && keyFound === true && posterDown === true) {
        show_image(imgL1E.src);
        lastStoredLoc1 = imgL1E.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }

    // Inputs to move to LOC 2 and LOC 4
    else if (input === "left") {
        show_image(lastStoredLoc2);
        if (firstTimeLoc2) {
            dialog.innerHTML = firstTimeDialogLoc2;
            firstTimeLoc2 = false;
        }
    }

    // Various inputs for dialog
    else if (input === "bookcase" && magnifierFound === false) {
        dialog.innerHTML = "Why is my \"magnifying glass\" there?";
    } else if (input === "bookcase" && magnifierFound === true) {
        dialog.innerHTML = "Haven't read those books for years now";
    } else if (input === "poster") {
        dialog.innerHTML = "What an ugly poster";
    } else if (input === "clock") {
        dialog.innerHTML = "It's almost midnight. My assignment is due soon!";
    } else if (input === "bed") {
        dialog.innerHTML = "I can't sleep yet!";
    } else {
        dialog.innerHTML = "I don't know how that's going to help me";
    }
    lastStoredImg = lastStoredLoc1;
}

function loc2Statements(input) {
    if (input === "right") {
        show_image(lastStoredLoc1);
    } else if (input === "rag" && ragFound === false && computerOn === false) {
        show_image(imgL2A.src);
        lastStoredLoc2 = imgL2A.src;
        ragFound = true;
        dialog.innerHTML = "I could use these somewhere...";
        inventory.push(imgRag);
    }

    lastStoredImg = lastStoredLoc2;
}