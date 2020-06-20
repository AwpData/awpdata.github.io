let scores = [];
let randomTime = null;
let clickBox = document.getElementById("click-box");
let clickMessage = document.getElementById("click-status");
let userClickTime = document.getElementById("time");
let clickStatus = "blue";
/*
    blue = reaction time gain is waiting for user to start game
    red = wait() function to turn green (clicking turns to blue)
    green = user needs to click (clicking turns to blue)
 */
let waitTimer = null;
let startUserTimer = null;

// FUTURE: If above one second, do math to display in format (seconds.milliseconds)
clickBox.addEventListener("click", () => {
    if (clickStatus === "green") {
        let stopUserTimer = Date.now();
        console.log("Stopped user timer: " + stopUserTimer); // TESTING PURPOSES
        userClickTime.innerHTML = (stopUserTimer - startUserTimer).toLocaleString() + " ms";
        scores.push(userClickTime);
        clickBox.style.background = "#d3ef00";
        clickStatus = "blue"; // not really blue box but this is just for status
        clickMessage.innerHTML = "Click to try again";
        clearTimeout(waitTimer);
    } else if (clickStatus === "blue") {
        clickBox.style.background = "#f83737";
        clickStatus = "red";
        clickMessage.innerHTML = "Wait for green...";
        wait();
    } else if (clickStatus === "red") {
        clickBox.style.background = "#add8e6";
        clickStatus = "blue";
        clickMessage.innerHTML = "Too fast!";
        clearTimeout(waitTimer);
    }
});

function wait() {
    randomTime = Math.floor(7 * Math.random() + 3) * 1000;
    console.log(randomTime / 1000 + " seconds")
    waitTimer = setTimeout(changeToGreen, randomTime);
}

function changeToGreen() {
    clickBox.style.background = "green";
    clickStatus = "green";
    clickMessage.innerHTML = "Click!";
    startUserTimer = Date.now();
    console.log("Started user timer: " + startUserTimer); // TESTING PURPOSES
}

// I will use selection sort to sort users top 10 scores
/*
function sortScores() {

}

function displayScore() {

}
*/
