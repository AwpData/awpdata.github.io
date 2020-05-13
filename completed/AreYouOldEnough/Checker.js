var age = prompt("Please enter your age");

if (age === null || age === "") {
    document.getElementById("message").innerHTML = "Nothing entered :(";
} else if (age <= 4 || age >= 100) {
    if (age <= 4) {
        document.getElementById("message").innerHTML = "Please enter an age greater than 4!";
    } else { // if (age >= 100)
        document.getElementById("message").innerHTML = "Please enter an age less than 100!";
    }
} else if (age < 16) {
    document.getElementById("message").innerHTML = "Sorry, you are not allowed to drive";
    document.getElementById("message2").innerHTML = "Sorry, you are not old enough to vote";
    document.getElementById("message3").innerHTML = "Sorry, you are not allowed to retire";
} else if (age >= 16 && age < 21) {
    document.getElementById("message").innerHTML = "You are allowed to drive!".bold();
    document.getElementById("message2").innerHTML = "Sorry, you are not old enough to vote";
    document.getElementById("message3").innerHTML = "Sorry, you are not allowed to retire";
} else if (age >= 21 && age < 65) {
    document.getElementById("message").innerHTML = "You are allowed to drive!".bold();
    document.getElementById("message2").innerHTML = "You are allowed to vote!".bold();
    document.getElementById("message3").innerHTML = "Sorry, you are not allowed to retire";
} else if (age >= 65) {
    document.getElementById("message").innerHTML = "You are allowed to drive!".bold();
    document.getElementById("message2").innerHTML = "You are allowed to vote!".bold();
    document.getElementById("message3").innerHTML = "You are allowed to retire!".bold();
} else {
    document.getElementById("message").innerHTML = age.bold() + " is not a number, try again";
}

window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === "r") {
        window.location.reload(true);
    }
    if (event.key === "h") {
        window.location.href = "../../index.html";
    }
});