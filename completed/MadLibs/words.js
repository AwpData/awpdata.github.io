var color = window.prompt("Enter a color", "red");
var adjective1 = window.prompt("Enter an adjective (ending in \"est\")", "coolest");
var adjective2 = window.prompt("Enter an adjective", "fat");
var bodyPart1 = window.prompt("Enter a body part (plural)", "arms");
var bodyPart2 = window.prompt("Enter a body part", "leg");
var noun = window.prompt("Enter a noun", "house");
var animal = window.prompt("Enter an animal (plural)", "dogs");
var adjective3 = window.prompt("Enter an adjective", "big");
var adjective4 = window.prompt("Enter an adjective", "small");
var adjective5 = window.prompt("Enter an adjective", "stinky");

document.write("The " + color.bold() + " dragon is the " + adjective1.bold() + " dragon of all."
    + "<br>" + "It has " + adjective2.bold() + " " + bodyPart1.bold() + ", and a " + bodyPart2.bold() + " shaped like a " + noun.bold()
    + "<br>" + "It loves to eat " + animal.bold() + ", although it will feast on nearly anything."
    + "<br>" + "It is " + adjective3.bold() + " and " + adjective4.bold() + "."
    + "<br>" + "You must be " + adjective5.bold() + " around it, or you may end up as it's meal!");

/*
.bold function from http://www.scriptingmaster.com/javascript/formatting-text-JavaScript.asp
 */
