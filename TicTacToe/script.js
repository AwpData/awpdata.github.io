window.onload = () => {
    checkBrowser();
}

let currentMove = "X";

// NOTE: Do not forget the '.' for querySelectorAll! (they are classes)
document.querySelectorAll(".box").forEach(item => {
    // Adds a click event to each individual box
    item.addEventListener("click", () => {
        let id = document.getElementById(item.id);
        if (id.innerHTML === "") {
            id.innerHTML = currentMove;
            swapPlayer(id);
        } else if (id.innerHTML === "X" || id.innerHTML === "O") { // Remove this later, this is for testing purposes
            id.innerHTML = "";
        }
    });
});

// Just changes the icon for each player and the color do distinguish them
function swapPlayer(id) {
    if (currentMove === "X") {
        id.style.color = "blue";
        currentMove = "O";
    } else if (currentMove === "O") {
        id.style.color = "red";
        currentMove = "X";
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


