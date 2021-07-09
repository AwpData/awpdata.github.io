window.onload = () => {
    checkBrowser();
}

let currentMove = "X"; // Player 1 starts "x"
let currentPlayer = document.getElementById("currentPlayer"); // The p tag that tells what player is going

let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");
let box5 = document.getElementById("box-5");
let box6 = document.getElementById("box-6");
let box7 = document.getElementById("box-7");
let box8 = document.getElementById("box-8");
let box9 = document.getElementById("box-9");

let boxArray = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9]
]

// NOTE: Do not forget the '.' for querySelectorAll! (they are classes)
document.querySelectorAll(".box").forEach(item => {
    // Adds a click event to each individual box
    item.addEventListener("click", () => {
        let id = document.getElementById(item.id);
        if (id.innerHTML === "") {
            id.innerHTML = currentMove;
            swapPlayer(id);
        }
        checkWin();
    });
});


// Just changes the icon for each player and the color do distinguish them
function swapPlayer(id) {
    if (currentMove === "X") {
        id.style.color = "blue";
        currentPlayer.style.color = "red";
        currentPlayer.innerHTML = "Player 2's Turn";
        currentMove = "O";
    } else if (currentMove === "O") {
        id.style.color = "red";
        currentPlayer.style.color = "blue";
        currentPlayer.innerHTML = "Player 1's Turn";
        currentMove = "X";
    }
}

function checkWin() {
    let gameOver = false;
    let xCounter = 0;
    let oCounter = 0;

    // Horizontal Win Checker
    for (let i = 0; i < 4; i++) {
        if (xCounter === 3) {
            currentPlayer.innerHTML = "Player 1 Wins!";
            gameOver = true;
        }
        if (oCounter === 3) {
            currentPlayer.innerHTML = "Player 2 Wins!";
            gameOver = true;
        }
        if (gameOver) {
            currentPlayer.style.color = "green";
            removeEvents();
        }
        xCounter = 0;
        oCounter = 0;
        for (let j = 0; j < 4; j++) {
            if (boxArray[i][j].innerHTML === "X") { // Says array is undefined when it actually isn't lol
                xCounter++;
            } else if (boxArray[i][j].innerHTML === "O") {
                oCounter++;
            }
        }
    }
}

function removeEvents() {
    for (let i = 1; i < 10; i++) {
        let id = document.getElementById("box-" + i);
        id.style.pointerEvents = "none";
    }
}

// Checks if user is using firefox (since it is not that supported
function checkBrowser() {
    let userAgentString = navigator.userAgent;
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;
    let fireFoxAgent = userAgentString.indexOf("Firefox") > -1;
    if (chromeAgent) {
        console.log("User is using chrome!");
    } else if (fireFoxAgent) {
        window.alert("Warning: you may experience bugs using Firefox on this website! Consider using Google Chrome for the best experience :)");
    }
}


