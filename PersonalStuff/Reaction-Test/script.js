let scores = [];
let randomTime = null;
let clickBox = document.getElementById("click-box");
let clickMessage = document.getElementById("click-status");
let subtext = document.getElementById("subtext");
let averages = document.getElementById("average");
let scoreTable = document.getElementById("scores")
let clickStatus = "blue";
let numOfSuccesses = 0;
let time = null;
let totalTime = 0;
/*
    blue = reaction time gain is waiting for user to start game
    red = wait() function to turn green (clicking turns to blue)
    green = user needs to click (clicking turns to blue)
 */
let waitTimer = null;
let startUserTimer = null;
let stopUserTimer = null;

clickBox.addEventListener("mouseover", () => {
    document.body.style.cursor = "pointer";
});

clickBox.addEventListener("mouseout", () => {
    document.body.style.cursor = "default";
});

// FUTURE: If above one second, do math to display in format (seconds.milliseconds)
clickBox.addEventListener("click", () => {
    if (clickStatus === "green") {
        getScore();
        clickBox.style.background = "#d3ef00";
        clickStatus = "blue"; // not really blue box but this is just for status
        subtext.innerHTML = "Click to try again";
        clickMessage.innerHTML = time + " ms";
    } else if (clickStatus === "blue") {
        clickBox.style.background = "#f83737";
        clickStatus = "red";
        clickMessage.innerHTML = "Wait for green...";
        subtext.innerHTML = "";
        wait();
    } else if (clickStatus === "red") {
        clickBox.style.background = "#add8e6";
        clickStatus = "blue";
        clickMessage.innerHTML = "Too fast!";
        subtext.innerHTML = "Click to try again";
        clearTimeout(waitTimer);
    }
});

function wait() {
    randomTime = Math.round(7 * Math.random() + 3) * 1000;
    console.log(randomTime / 1000 + " seconds to go") // TESTING PURPOSES
    waitTimer = setTimeout(changeToGreen, randomTime);
}

function changeToGreen() {
    clickBox.style.background = "green";
    clickStatus = "green";
    clickMessage.innerHTML = "Click!";
    startUserTimer = Date.now();

    console.log("Started user timer: " + startUserTimer); // TESTING PURPOSES
}

function getScore() {
    stopUserTimer = Date.now(); // "Stops" the timer
    clearTimeout(waitTimer); // Just in case there are multiple sessions running, it stops them
    // FIND A WORKAROUND FOR -50 FOR MORE ACCURATE TIMING
    time = (stopUserTimer - startUserTimer - 50).toLocaleString(); // Calculates the time it took for use to click
    console.log ("Time: " + time);
    numOfSuccesses++; // Tracks number of successful games (for average)
    totalTime += Math.round(parseInt(time)); // Gets the total time of all clicks (for average)
    averages.innerHTML = "Average Time: " + Math.round(totalTime / numOfSuccesses) + " ms"; // Gets average num of clicks

    scores.push(time); // Pushes time to score array for printing
    sortScores(); // Sorts the scores
    displayScore(); // Then displays them

    console.log("Stopped user timer: " + stopUserTimer); // TESTING PURPOSES
    console.log(numOfSuccesses + " successes") // TESTING PURPOSES
    console.log(totalTime + " total time"); // TESTING PURPOSES
}

// I used selection sort to sort users top 10 scores
// BUG: 2 DIGITS ARE NOT BEING SORTED ?
function sortScores() {
    for (let i = 0; i < scores.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < scores.length; j++) {
            if (scores[j] < scores[minIndex]) {
                minIndex = j;
            }
        }
        let temp = scores[minIndex];
        scores[minIndex] = scores[i];
        scores[i] = temp;
    }
}

function displayScore() {
    // Clears the div before adding the scores in
    scoreTable.textContent = "Top 10 Scores";
    for (let i = 0; i < scores.length; i++) {
        if (i > 9) { // This limits the for loop to not show more than 10 scores
            break;
        }
        let score = document.createElement("p");
        score.innerHTML = (i + 1) + ". " + scores[i] + " ms";
        scoreTable.appendChild(score);
    }
}

