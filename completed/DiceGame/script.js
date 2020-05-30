// Trevor Tang 5/25/20

// I have audio in this game to make it less boring by replacing the audio objects src when I want it to be played
// https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
let audio = new Audio("");
let play = document.getElementById("play");
let roll = document.getElementById("roll");
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let output = document.getElementById("output");
let scoreCounter = document.getElementById("score");
let score = 0;

// Each image of the die initialized to be used later
let diceImageArray = ["Images/d1.png", "Images/d2.png", "Images/d3.png", "Images/d4.png", "Images/d5.png", "Images/d6.png"]

// This event listener just transitions the start screen to the play screen when clicked
// In detail: Start Screens display is set to hide while main game's display will show
play.addEventListener("click", (event) => {
    audio.src = "Sounds/Click.wav";
    audio.play();
    document.getElementById("startScreen").style.display = "none"
    document.getElementById("mainBox").style.display = "block";
    die1.src = "Images/d1.png";
    die2.src = "Images/d1.png";
});

// Event listener listens for the button to be clicked, which invokes the method that rolls the die / plays die audio
roll.addEventListener("click", (event) => {
    // Plays audio for when user rolls die
    audio.src = "Sounds/DiceRoll.mp3";
    audio.play();
    dieChooser();
});

// Here is where the die that gets shown is chosen through random numbers
function dieChooser() {
    // Random numbers are picked from 1-6 to simulate a real dice roll!
    let num1 = Math.floor(6 * Math.random()) + 1;
    let num2 = Math.floor(6 * Math.random()) + 1;
    // to prevent repetitive code, I use a for-loop to get the die num that matches the random ones, then display that die image!
    for (let i = 1; i < 7; i++) {
        if (i === num1) {
            newDieImage(die1, i);
        }
        if (i === num2) {
            newDieImage(die2, i);
        }
    }
    // Then it checks to see if die 1 and 2 add up to something worth noting (7, 11, 2) through this method
    checkWin(num1, num2);
}

// Function is used to replace the die image from the array depending on what was rolled for that die from dieChooser() method
function newDieImage(oldDie, newDieNum) {
    // Replaces the dice image with new dice image from array based on newDieNum parameter passed
    oldDie.src = diceImageArray[newDieNum - 1];
}

// https://stackoverflow.com/questions/35114042/triggering-css3-keyframes-with-javascript-multiple-times
// I wanted to animate the output text if your score incremented or decremented for added effect when you won/lost

// This checks if you won or lost by using conditionals to check if the sum of the die equal 7, 11, or 2
function checkWin(num1, num2) {
    // If you roll a 7 or 11, green text appears, telling that you won as well as incrementing your score by 1
    if ((num1 + num2) === 7 || (num1 + num2) === 11) {
        // Play a winning sound by changing the audio src path to win.wav
        audio.src = "Sounds/Win.wav";
        audio.play();
        // This is what shows in the output div box I made
        const coloredText = ("Rolled " + (num1 + num2) + "!").fontcolor("green");
        output.innerHTML = coloredText + " Score +1";
        score++;
        scoreCounter.innerHTML = "Score: " + score;
        // This here adds the flash animation in the CSS file which plays it (see below event handler for more)
        output.classList.add("flash");
    }
    // If you roll a 2, red text appears, telling that you lost as well as decrementing your score by 1
    else if ((num1 + num2) === 2) {
        // Play a losing sound by changing the audio src path to lose.wav
        audio.src = "Sounds/Lose.wav";
        audio.play();
        const coloredText = ("Rolled " + (num1 + num2) + "!").fontcolor("red");
        output.innerHTML = coloredText + " Score -1";
        score--;
        scoreCounter.innerHTML = "Score: " + score;
        output.classList.add("flash");
    } else {
        // Just output what you rolled
        output.innerHTML = "Rolled " + (num1 + num2);
    }
}

// This is here to remove the animation class .flash so that it can be used again
output.addEventListener("animationend", function () {
    output.classList.remove("flash");
});
