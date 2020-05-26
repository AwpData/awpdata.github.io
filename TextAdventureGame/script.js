// Trevor Tang

let inputBox = document.getElementById("input-text"); // Text input-box
let inputSubmit = document.getElementById("input-submit"); // Submit button
let dialog = document.getElementById("dialog"); // Dialog div box
let image = document.getElementById("image"); // Image (CRUCIAL for location changes)

// This will hold objects that the user picks up and is used to update the visual display of the inventory on client
let inventory = [];

// Images from various screens
const imgMenu = new Image();
imgMenu.src = "PhotosOfLocations/VariousScreens/MenuScreen.png";
const imgHelp = new Image();
imgHelp.src = "PhotosOfLocations/VariousScreens/HelpScreen.png";
const imgWinner = new Image();
imgWinner.src = "PhotosOfLocations/VariousScreens/PCWinningScreen.png";

// Images of location 1 and variations
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

// Images of location 2 and variations
const imgL2 = new Image();
imgL2.src = "PhotosOfLocations/Location2/Location2.png";
const imgL2A = new Image();
imgL2A.src = "PhotosOfLocations/Location2/Location2a.png";
const imgL2B = new Image();
imgL2B.src = "PhotosOfLocations/Location2/Location2b.png";
const imgL2C = new Image();
imgL2C.src = "PhotosOfLocations/Location2/Location2c.png";

// Images of location 3 and variations
const imgL3 = new Image();
imgL3.src = "PhotosOfLocations/Location3/Location3.png";
const imgL3A = new Image();
imgL3A.src = "PhotosOfLocations/Location3/Location3a.png";
const imgL3B = new Image();
imgL3B.src = "PhotosOfLocations/Location3/Location3b.png";
const imgL3C = new Image();
imgL3C.src = "PhotosOfLocations/Location3/Location3c.png";
const imgL3D = new Image();
imgL3D.src = "PhotosOfLocations/Location3/Location3d.png";

// Images of location 4 and variations
const imgL4 = new Image();
imgL4.src = "PhotosOfLocations/Location4/Location4.png";
const imgL4A = new Image();
imgL4A.src = "PhotosOfLocations/Location4/Location4a.png";
const imgL4B = new Image();
imgL4B.src = "PhotosOfLocations/Location4/Location4b.png";
const imgL4C = new Image();
imgL4C.src = "PhotosOfLocations/Location4/Location4c.png";
const imgL4D = new Image();
imgL4D.src = "PhotosOfLocations/Location4/Location4d.png";
const imgL4E = new Image();
imgL4E.src = "PhotosOfLocations/Location4/Location4e.png";
const imgL4F = new Image();
imgL4F.src = "PhotosOfLocations/Location4/Location4f.png";

// Images of location 5 and variations
const imgL5 = new Image();
imgL5.src = "PhotosOfLocations/Location5/Location5.png";
const imgL5A = new Image();
imgL5A.src = "PhotosOfLocations/Location5/Location5a.png";

// Images of Location 6 and variations
const imgL6 = new Image();
imgL6.src = "PhotosOfLocations/Location6/Location6.png";
const imgL6A = new Image();
imgL6A.src = "PhotosOfLocations/Location6/Location6a.png";

// Images of Location 7 and variations
const imgL7 = new Image();
imgL7.src = "PhotosOfLocations/Location7/Location7.png";
const imgL7A = new Image();
imgL7A.src = "PhotosOfLocations/Location7/Location7a.png";
const imgL7B = new Image();
imgL7B.src = "PhotosOfLocations/Location7/Location7b.png";
const imgL7C = new Image();
imgL7C.src = "PhotosOfLocations/Location7/Location7c.png";

// Images of Location 8 and variations
const imgL8 = new Image();
imgL8.src = "PhotosOfLocations/Location8/Location8.png";
const imgL8A = new Image();
imgL8A.src = "PhotosOfLocations/Location8/Location8a.png";
const imgL8B = new Image();
imgL8B.src = "PhotosOfLocations/Location8/Location8b.png";

// Images of objects stored with their own dimensions so they print in the inventory correctly
const imgKeyDoor = new Image(150, 50);
imgKeyDoor.src = "PhotosOfModels/Key_Door.png";
const imgMagnifyingGlass = new Image(100, 90);
imgMagnifyingGlass.src = "PhotosOfModels/MagnifyingGlass.png";
const imgRag = new Image(70, 50);
imgRag.src = "PhotosOfModels/Rags.png";
const imgKeyPower = new Image(150, 50);
imgKeyPower.src = "PhotosOfModels/Key_Power.png";

// Item obtained status for inventory
// The conditionals below will set these to true once the user finds it
// True = found (invisible), false = not found (visible)
let keyFound = false, powerKeyFound = false, magnifierFound = false, ragFound = false;

// Stores last location of each location so when user switches to it, it will be that one
// In the code, you will see these being set to equal the current location the user is in
// This is so that when the user re-visits the location, it will be the last modified location (You will see when you play)
let lastStoredImg = imgL1.src; // This is particularly for the help screen (so user can get back to their location)
let lastStoredLoc1 = imgL1.src; // Bed default side
let lastStoredLoc2 = imgL2.src; // Computer default side
let lastStoredLoc3 = imgL3.src; // Door default side
let lastStoredLoc4 = imgL4.src; // window default side
let lastStoredLoc5 = imgL5.src; // blank wall default side
let lastStoredLoc6 = imgL6.src; // door is open on sign side
let lastStoredLoc7; // Will depend on whether door is open or closed and if power is on or off
let lastStoredLoc8 = imgL8.src; // Power station side

// This has to be used for the door side (loc 7) because it has many conditionals (the door and power status)
function whichLoc7ImageDoIUse(doorOpen, powerOn) {
    // Door is open and power is not on
    if (doorOpen && !powerOn) {
        show_image(imgL7.src);
        lastStoredLoc7 = imgL7.src;
        dialog.innerHTML = "Power is still off!";
    }
    // Door is open and power is on
    else if (doorOpen && powerOn) {
        show_image(imgL7B.src);
        lastStoredLoc7 = imgL7B.src;
        dialog.innerHTML = "Power is on!";
    }
    // Door is closed and power is not on
    else if (!doorOpen && !powerOn) {
        show_image(imgL7A.src);
        lastStoredLoc7 = imgL7A.src;
        dialog.innerHTML = "Power is still off!";
    }
    // Door is closed and power is on
    else if (!doorOpen && powerOn) {
        show_image(imgL7C.src);
        lastStoredLoc7 = imgL7C.src;
        dialog.innerHTML = "Power on!";
    }
}

// Booleans that tell if user visits location for the first time
// I only use this for dialog honestly
let firstTimeLoc1 = true;
const firstTimeDialogLoc1 = "Uh oh, I forgot to turn in my final project. Better get to my computer!";
let firstTimeLoc2 = true;
const firstTimeDialogLoc2 = "My \"computer\" is not working! I got to find out what is wrong";
let firstTimeLoc3 = true;
const firstTimeDialogLoc3 = "The \"door\" to my own power room; neat isn't it?";
let firstTimeLoc4 = true;
const firstTimeDialogLoc4 = "Wow, my window really needs to be cleaned";
let firstTimeLoc5 = true;
const firstTimeDialogLoc5 = "It sure is dark in here, where is the \"light\" switch?";
let firstTimeLoc6 = true;
const firstTimeDialogLoc6 = "This room is pretty dull, good thing I have that \"poster\"";
// There is no firstTimeDialogLoc7 since it is pre-determined by power and door boolean statuses
let firstTimeLoc8 = true;
const firstTimeDialogLoc8 = "Well, this is the power station";

// These are useful for the conditionals to prevent users from breaking the game (and the dialog)
// Location 1's poster location (true = up, false = down)
let posterDown = false;
// Location 2's computer power status (true = on, false = off)
let computerOn = false;
// Location 3's keypad power status (true = on, false = off)
let keypadPower = false;
// Location 3's keypad entered color status (door unlock status) (true = green, false = red)
let keypadSuccess = false;
// Location 3, 6, and 7's door open/closed status after unlock (true = open, false = closed)
let doorOpen = false;
// Location 3's allowed to move forward through door status (true = yes, false = no)
let moveForwardLoc3 = false;
// Location 4's window cleanliness (true = clean, false = dirty)
let windowClean = false;
// Location 4's magnifier used on window status (true = yes, false = no)
let magnifierOnWindow = false;
// Location 5, 6, 7, & 8's light status (true = on, false = off)
let lightOn = false;
// Location 7 & 8's power status (true = on, false = off)
let powerOn = false;
// Location 8's control box status (true = on, false = off)
let controlOn = false;

// First function called after submit is clicked; it parses input, updates the visual inventory, & clears input box
function getInput(form) {
    let input = form.inputBox.value.toLowerCase();
    parseInput(input);
    updateInventory(inventory);
    form.reset();
}

// Arrow function used to add event listener that allows user to press ENTER to submit input without refreshing the page
inputBox.addEventListener("keyup", (event) => {
    // preventDefault() used to not refresh the page
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
// Updates the current image shown on screen by getting the new src of the image and replacing it with the old one
function show_image(src) {
    // Creates a new image and then adds sourcing
    let img = document.createElement("img");
    img.src = src;
    image.src = img.src;
}

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep (Java try-catch equivalent)
// Used particularly when user views the sign in location 4 so that it delays a function to re-display loc 4 room
// I didn't want the user to have to type back (plus, it adds a cool animation)
function sleep(ms) {
    // Try to resolve that will actually never resolve, then don't let the user to anything for ms milliseconds
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//https://stackoverflow.com/questions/42327498/output-an-array-of-images-in-javascript
// For-loop used to display each item in the inventory
function updateInventory(array) {
    // Blanks HTML div before re-printing image array again;
    document.getElementById("inventory").innerHTML = "";
    // Gets each image and prints it to the #inventory div by creating a new image element and appending it to div element
    for (let i = 0; i < array.length; i++) {
        // I have to create a new image for each image in the inventory array before appending it as a child
        let img = document.createElement("img");
        img.src = array[i].src;
        img.width = array[i].width;
        img.height = array[i].height;
        document.getElementById("inventory").appendChild(img);
    }
}

// Used to delete an item from the inventory array once used by splicing its index
function deleteItem(array, item) {
    let index = array.indexOf(item);
    array.splice(index, 1);
}

// This decides what to do with the input
function parseInput(input) {
    // If the user is on the menu page they can only type 'play' to get to the help screen
    if (image.src === imgMenu.src) {
        if (input === "play") {
            show_image(imgHelp.src);
            dialog.innerHTML = "Type \"play\" or \"got it!\"";
        }
    }
    // If the user is on the help page, they can only type 'play' or 'got it' to get off of the help screen
    else if (image.src === imgHelp.src) { // If on the help screen..
        if (input === "play" || input === "got it") {
            show_image(lastStoredImg);
            dialog.style.display = "block";
            if (firstTimeLoc1) { // This is only used once at the start of the game as this is where the user starts
                dialog.innerHTML = firstTimeDialogLoc1;
                firstTimeLoc1 = false;
            }
        }
    } else if (image.src.match("Location1")) { // If user is on location 1, go to location 1's possible inputs!
        loc1Statements(input);
    } else if (image.src.match("Location2")) { // See above comment for rest of these statements
        loc2Statements(input);
    } else if (image.src.match("Location3")) {
        loc3Statements(input);
    } else if (image.src.match("Location4")) {
        loc4Statements(input);
    } else if (image.src.match("Location5")) {
        loc5Statements(input);
    } else if (image.src.match("Location6")) {
        loc6Statements(input);
    } else if (image.src.match("Location7")) {
        loc7Statements(input);
    }
    if (input === "help") { // Displays help screen no matter what location the user currently is in
        show_image(imgHelp.src);
        dialog.style.display = "none";
    }
}

// KEY cannot be found unless POSTER is pulled down!
function loc1Statements(input) {
    // Pull down poster (MAG not found, KEY not found)
    if (input === "poster" && !magnifierFound && !keyFound && !posterDown) {
        show_image(imgL1A.src);
        lastStoredLoc1 = imgL1A.src;
        posterDown = true;
        dialog.innerHTML = "I forgot I hid a \"key\" here!";
    }
    // Pull down poster (MAG found, KEY not found)
    else if (input === "poster" && magnifierFound && !keyFound && !posterDown) {
        show_image(imgL1D.src);
        lastStoredLoc1 = imgL1D.src;
        posterDown = true;
        dialog.innerHTML = "I forgot I hid a \"key\" here!";
    }
    // Get key (MAG not found, POSTER down)
    else if (input === "key" && !magnifierFound && !keyFound && posterDown) {
        show_image(imgL1B.src);
        lastStoredLoc1 = imgL1B.src;
        keyFound = true;
        dialog.innerHTML = "This may come in handy";
        inventory.push(imgKeyDoor);
    }
    // Get key (MAG found, POSTER down)
    else if (input === "key" && magnifierFound && !keyFound && posterDown) {
        show_image(imgL1E.src);
        lastStoredLoc1 = imgL1E.src;
        keyFound = true;
        dialog.innerHTML = "This may come in handy";
        inventory.push(imgKeyDoor);
    }
    // Get MAG (KEY not found, POSTER up)
    else if (input === "magnifying glass" && !magnifierFound && !keyFound && !posterDown) {
        show_image(imgL1C.src);
        lastStoredLoc1 = imgL1C.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }
    // Get MAG (KEY not found, POSTER down)
    else if (input === "magnifying glass" && !magnifierFound && !keyFound && posterDown) {
        show_image(imgL1D.src);
        lastStoredLoc1 = imgL1D.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }
    // Get MAG (KEY found, POSTER down)
    else if (input === "magnifying glass" && !magnifierFound && keyFound && posterDown) {
        show_image(imgL1E.src);
        lastStoredLoc1 = imgL1E.src;
        magnifierFound = true;
        dialog.innerHTML = "Wonder what I could use this for?";
        inventory.push(imgMagnifyingGlass);
    }

        // Inputs to move to LOC 2 (left) and LOC 4 (right)
    // to Loc 2 (computer)
    else if (input === "left") {
        show_image(lastStoredLoc2);
        if (firstTimeLoc2 === true) {
            dialog.innerHTML = firstTimeDialogLoc2;
            firstTimeLoc2 = false;
        }
    }
    // to Loc 4 (window)
    else if (input === "right") {
        show_image(lastStoredLoc4);
        if (firstTimeLoc4 === true) {
            dialog.innerHTML = firstTimeDialogLoc4;
            firstTimeLoc4 = false;
        }
    }

    // Various inputs for dialog
    else if (input === "bookcase" && !magnifierFound) { // Magnifier has not been found
        dialog.innerHTML = "Why is my \"magnifying glass\" there?";
    } else if (input === "bookcase" && magnifierFound) { // Magnifier has been found
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
    if (input === "rag" && !ragFound && !computerOn) {
        show_image(imgL2A.src);
        lastStoredLoc2 = imgL2A.src;
        ragFound = true;
        dialog.innerHTML = "I could use this somewhere...";
        inventory.push(imgRag);

    }
    // This is an easter egg for speed runners that did not clean the window to see the code that pick up the rag
    else if (input === "rag" && !ragFound && computerOn) {
        show_image(imgL2C.src);
        lastStoredLoc2 = imgL2C.src;
        ragFound = true;
        dialog.innerHTML = "What is this dirty ol' rag gonna help me with?";
        inventory.push(imgRag);

    }
    // END OF THE GAME STATEMENT: Power must be on for computer to be on
    else if (input === "computer" && computerOn) {
        show_image(imgWinner.src);
        // I hide all inputs because the user won and it cleans up the screen
        inputBox.style.visibility = "none";
        inputSubmit.style.visibility = "none";
        dialog.innerHTML = "Yay! I turned it in just in time!";
    }

        // Inputs to move to LOC 1 (right) and LOC 3 (left)
    // to Loc 1 (bed)
    else if (input === "right") {
        show_image(lastStoredLoc1);
    }
    // to Loc 3 (door)
    else if (input === "left") {
        show_image(lastStoredLoc3);
        if (firstTimeLoc3) {
            dialog.innerHTML = firstTimeDialogLoc3;
            firstTimeLoc3 = false;
        }
    }

    // Various inputs for dialog
    else if (input === "computer" && !computerOn) { // Computer is not on
        dialog.innerHTML = "It's unresponsive";
    } else if (input === "table" && !ragFound) { // Rag has not been found
        dialog.innerHTML = "I left my \"rag\" from cleaning my table today";
    } else if (input === "table" && ragFound) { // Rag has been found
        dialog.innerHTML = "Sturdy table for my computer";
    } else if (input === "power" && !computerOn) { // Computer is not on
        dialog.innerHTML = "Weird, my computer is on, but the power shows that it's off";
    } else if (input === "power" && computerOn) { // Computer is on
        dialog.innerHTML = "Sweet! My computer is on";
    } else if (input === "poster") {
        dialog.innerHTML = "My favorite poster in my room";
    } else {
        dialog.innerHTML = "I don't know how that's going to help me";
    }
    lastStoredImg = lastStoredLoc2;
}

function loc3Statements(input) {
    // Allows user to insert key in door to turn on code power (Door is locked, key is in inventory)
    if (input === "key" && keyFound && !keypadPower) {
        show_image(imgL3A.src);
        lastStoredLoc3 = imgL3A.src;
        dialog.innerHTML = "Well, the power to the keypad turned on, but what is the code? \"####\"";
        keypadPower = true;
        deleteItem(inventory, imgKeyDoor);
    }
    // Allows user to input code (can skip window part) if keypad power is online
    else if (input === "7253" && keypadPower && !keypadSuccess) {
        show_image(imgL3B.src);
        lastStoredLoc3 = imgL3B.src;
        dialog.innerHTML = "The code worked!";
        keypadSuccess = true;
    }
    // Opens the door if keypad status is green, it opens to a dark room if location 4's lights were not turned on.
    else if (input === "door" && !doorOpen && keypadSuccess && !lightOn) {
        show_image(imgL3C.src);
        lastStoredLoc3 = imgL3C.src;
        moveForwardLoc3 = true;
        doorOpen = true;
    }
    // Opens the door if keypad status is green, but to a lit room if location 4's lights are on
    else if (input === "door" && !doorOpen && keypadSuccess && lightOn) {
        show_image(imgL3D.src);
        lastStoredLoc3 = imgL3D.src;
        moveForwardLoc3 = true;
        doorOpen = true;
    }
    // Closes the door in location 3 if it is open, this prevents the user from moving forward
    else if (input === "door" && doorOpen) {
        show_image(imgL3B.src);
        lastStoredLoc3 = imgL3B.src;
        moveForwardLoc3 = false;
        doorOpen = false;
    }

    // Inputs to move to LOC 5 (forward), LOC 4 (left) and LOC 2 (right)
    else if (input === "forward" && doorOpen) {
        show_image(lastStoredLoc5);
        if (firstTimeLoc5) {
            dialog.innerHTML = firstTimeDialogLoc5;
            firstTimeLoc5 = false;
        } else if (!lightOn) {
            dialog.innerHTML = "Still can't see anything!";
        } else if (lightOn) {
            dialog.innerHTML = "This wall is intimidating";
        }
    }
    // to Loc 4 (window)
    else if (input === "left") {
        show_image(lastStoredLoc4);
        if (firstTimeLoc4) {
            dialog.innerHTML = firstTimeDialogLoc4;
            firstTimeLoc4 = false;
        }
    }
    // to Loc 2 (computer)
    else if (input === "right") {
        show_image(lastStoredLoc2);
        if (firstTimeLoc2) {
            dialog.innerHTML = firstTimeDialogLoc2;
            firstTimeLoc2 = false;
        }
    }

        // Various inputs for dialog

    // Door locked, no key in inventory, no power to keypad
    else if (input === "key" && !keyFound && !keypadPower) {
        dialog.innerHTML = "I don't have a key for this door";
    }
    // Door locked, no key in inventory, no power to keypad
    else if (input === "door" && !keyFound && !keypadPower) {
        dialog.innerHTML = "Well I can't get in, its locked";
    }
    // Door locked, key in inventory, no power to keypad
    else if (input === "door" && keyFound && !keypadPower) {
        dialog.innerHTML = "Maybe I can insert something here";
    }
    // Door locked, keypad has power, keypad status RED (not unlocked)
    else if (input === "door" && keypadPower && !keypadSuccess) {
        dialog.innerHTML = "The door won't budge, I need a code";
    }
    // Door locked, no power to keypad
    else if (input === "keypad" && !keypadPower) {
        dialog.innerHTML = "Keypad isn't working";
    }
    // Door locked, keypad has power, keypad status RED (not unlocked)
    else if (input === "keypad" && keypadPower && !keypadSuccess) {
        dialog.innerHTML = "What do I enter into the keypad?";
    }
    // If key is already used, this will be said again
    else if (input === "key" && keypadPower) {
        dialog.innerHTML = "No more need for a key here";
    } else if (input === "painting") {
        dialog.innerHTML = "What a nice painting of flowers";
    }

    // Easter egg if user enters #### when door is not unlocked
    else if (input === "####" && keypadPower && !keypadSuccess) {
        dialog.innerHTML = "No silly, that is the format of what NUMBERS I should enter into the keypad";
    } else {
        dialog.innerHTML = "I don't know how that's going to help me";
    }
    lastStoredImg = lastStoredLoc3;
}

function loc4Statements(input) {
    // Gets power key if not found and if the window isn't clean
    if (input === "key" && !powerKeyFound && !windowClean) {
        show_image(imgL4C.src);
        lastStoredLoc4 = imgL4C.src;
        dialog.innerHTML = "Might need this";
        powerKeyFound = true;
        inventory.push(imgKeyPower);
    }
    // Gets power key if not found and window is clean and magnifier is NOT on the window
    else if (input === "key" && !powerKeyFound && windowClean && !magnifierOnWindow) {
        show_image(imgL4D.src);
        lastStoredLoc4 = imgL4D.src;
        dialog.innerHTML = "Might need this";
        powerKeyFound = true;
        inventory.push(imgKeyPower);
    }
    // Gets power key if not found and window is clean and magnifier IS on the window
    else if (input === "key" && !powerKeyFound && windowClean && magnifierOnWindow) {
        show_image(imgL4E.src);
        lastStoredLoc4 = imgL4E.src;
        dialog.innerHTML = "Might need this";
        powerKeyFound = true;
        inventory.push(imgKeyPower);
    }
    // Cleans window if power key IS found
    else if (input === "rag" && ragFound && !windowClean && !powerKeyFound) {
        show_image(imgL4A.src);
        lastStoredLoc4 = imgL4A.src;
        dialog.innerHTML = "Nice and clean now, but what is that \"sign\" in the distance?";
        windowClean = true;
        deleteItem(inventory, imgRag);
    }
    // Cleans window if power key is NOT found
    else if (input === "rag" && ragFound && !windowClean && powerKeyFound) {
        show_image(imgL4D.src);
        lastStoredLoc4 = imgL4D.src;
        dialog.innerHTML = "Nice and clean now, but what is that \"sign\" in the distance?";
        windowClean = true;
        deleteItem(inventory, imgRag);
    }
    // If key is NOT found, window is clean, and magnifier is used
    else if (input === "magnifying glass" && windowClean && magnifierFound && !powerKeyFound) {
        show_image(imgL4B.src);
        lastStoredLoc4 = imgL4B.src;
        dialog.innerHTML = "Great, now I can \"look\" at the sign";
        magnifierOnWindow = true;
        deleteItem(inventory, imgMagnifyingGlass);
    }
    // If key IS found, window is clean, and magnifier is used
    else if (input === "magnifying glass" && windowClean && magnifierFound && powerKeyFound) {
        show_image(imgL4E.src);
        lastStoredLoc4 = imgL4E.src;
        dialog.innerHTML = "Great, now I can \"look\" at the sign";
        magnifierOnWindow = true;
        deleteItem(inventory, imgMagnifyingGlass);
    }

        // Movement inputs to sign ("Look"), LOC 1 (left) and LOC 3 (right)

    // If the user somehow looks at the sign before entering location 3 (the door), it has different dialog
    else if (input === "look" && magnifierOnWindow) {
        show_image(imgL4F.src);
        inputBox.style.display = "none";
        inputSubmit.style.display = "none";
        // This gives hint to the user that they can use it on the door if they have been in loc3 and keypad power is on
        if (!firstTimeLoc3 && keypadPower) {
            dialog.innerHTML = "I bet I can use this code on the door!";
        }
        // If user already unlocked the door, person will say this
        else if (keypadSuccess) {
            dialog.innerHTML = "I already unlocked the door, no need for this";
        } else {
            dialog.innerHTML = "Where could I use this code?";
        }
        // The program will soft-lock the player from inputting anything as they are observing the sign
        sleep(3000).then(() => {
            show_image(lastStoredLoc4);
            inputBox.style.display = "inline";
            inputSubmit.style.display = "inline";
        });
    }
    // to loc 1 (bed)
    else if (input === "left") {
        show_image(lastStoredLoc1);
    }
    // to loc 3 (door)
    else if (input === "right") {
        show_image(lastStoredLoc3);
        if (firstTimeLoc3) {
            dialog.innerHTML = firstTimeDialogLoc3;
            firstTimeLoc3 = false;
        }
    }

    // Various inputs for dialog (Mainly the window must be clean for dialog to play)
    else if (input === "poster") {
        dialog.innerHTML = "I am awesome";
    } else if (input === "window" && !windowClean) {
        dialog.innerHTML = "I better clean this window";
    } else if (input === "window" && windowClean) {
        dialog.innerHTML = "Absolutely spotless!";
    } else if (input === "moon" && windowClean) {
        dialog.innerHTML = "Bright moon tonight";
    } else if (input === "sign" && windowClean) {
        dialog.innerHTML = "I can't see the sign from here. I need something to see it...";
    } else if (input === "key" && windowClean && powerKeyFound) {
        dialog.innerHTML = "Well, there is no place for a key here";
    }
    lastStoredImg = lastStoredLoc4;
}

function loc5Statements(input) {
    // The only statement that does something, turning the light on if it is off
    if (input === "light" && !lightOn) {
        show_image(imgL5A.src);
        lastStoredLoc5 = imgL5A.src;
        lastStoredLoc3 = imgL3D.src; // THIS IS CRUCIAL in part that now loc 3 is forced to use the bright loc 5
        dialog.innerHTML = "Nice, now I can see";
        lightOn = true;
    }

        // Movement statements to move to loc 3 (back), loc 8 (left), and loc 6 (right)
    // to Loc 3 (door)
    else if (input === "back" && doorOpen) {
        show_image(lastStoredLoc3);
    }
    // to loc 6 (sign)
    else if (input === "right") {
        show_image(lastStoredLoc6);
        if (firstTimeLoc6) {
            dialog.innerHTML = firstTimeDialogLoc6;
            firstTimeLoc6 = false;
        }
    }
    // to loc 8 (power side)
    else if (input === "left") {
        show_image(lastStoredLoc8);
        if (firstTimeLoc8) {
            dialog.innerHTML = firstTimeDialogLoc8;
            firstTimeLoc8 = false;
        }
    }
    // A little easter egg for trying to back into the closed door
    else if (input === "back" && !doorOpen) {
        dialog = "I just hit the door and it really hurt D:";
    }

    // Various inputs for dialog (Light is only requirement for dialog to be played)
    else if (input === "light" && lightOn) {
        dialog.innerHTML = "I'm not turning this light off right now";
    } else if (input === "wall" && lightOn) {
        dialog.innerHTML = "This wall is very ugly";
    }

    lastStoredImg = lastStoredLoc5;
}

function loc6Statements(input) {
    // User cannot see the poster because the door is open on LOC 7
    if (input === "poster" && doorOpen) {
        dialog.innerHTML = "I can't see the poster, the door is in the way";
    }
    // Door is now closed so the poster is readable
    else if (input === "poster" && !doorOpen) {
        dialog.innerHTML = "Where can these colors be used?";
    } else if (input === "door" && doorOpen) {
        dialog.innerHTML = "I need to be facing the door to close it";
    }

    // Movement statements to loc 5 (left) and loc 7 (right)
    else if (input === "left") {
        show_image(lastStoredLoc5);
    } else if (input === "right") {
        whichLoc7ImageDoIUse(doorOpen, powerOn); // there are too many conditionals for loc 7, so use a function to simplify
    }

    lastStoredImg = lastStoredLoc6;
}

function loc7Statements(input) {
    // Closes the door and power is off
    if (input === "door" && !powerOn && doorOpen) {
        show_image(imgL7A.src);
        lastStoredLoc7 = imgL7A.src;
        doorOpen = false;
    }
    // Closes the door and power is on
    else if (input === "door" && powerOn && doorOpen) {
        show_image(imgL7C.src);
        lastStoredLoc7 = imgL7C.src;
        doorOpen = false;
    }
    // Opens the door and power is off
    else if (input === "door" && !powerOn && !doorOpen) {
        show_image(imgL7.src);
        lastStoredLoc7 = imgL7.src;
        doorOpen = true;
    }
    // Opens the door and power is on
    else if (input === "door" && powerOn && !doorOpen) {
        show_image(imgL7B.src);
        lastStoredLoc7 = imgL7B.src;
        doorOpen = true;
    }

        // Statements to move to loc 1 (forward), loc 6 (left), loc 8 (right)
    // to Loc 1 (bed)
    else if (input === "forward" && doorOpen) {
        show_image(lastStoredLoc1);
    }
    // to Loc 6 (sign but door is open)
    else if (input === "left" && doorOpen) {
        show_image(imgL6.src);
        lastStoredLoc6 = imgL6.src;
    }
    // to Loc 6 (sign but door is closed)
    else if (input === "left" && !doorOpen) {
        show_image(imgL6A.src);
        lastStoredLoc6 = imgL6A.src;
    }
    // to Loc 8 (power station)
    else if (input === "right") {
        show_image(lastStoredLoc8);
        if (firstTimeLoc8) {
            dialog.innerHTML = firstTimeDialogLoc8;
            firstTimeLoc8 = false;
        }
    }

    // Various input for dialog
    else if (input === "forward" && !doorOpen) {
        dialog.innerHTML = "The door is not open";
    } else if (input === "power" && !powerOn) {
        dialog.innerHTML = "Indicator says power is off";
    } else if (input === "power" && powerOn) {
        dialog.innerHTML = "Indicator says power is on";
    }
    lastStoredImg = lastStoredLoc7;
}