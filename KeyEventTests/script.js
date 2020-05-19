let letterCounter = Array(26);
let otherCounter = Array(5);
letterCounter.fill(0);
otherCounter.fill(0);

let total = 0;
// [Q, W, E, R, T, Y...]

// Receives event of LETTER keypress, then increases it by 1 in its respective array index
window.addEventListener("keyup", event => {
    // To prevent overflow, I reset string length to 0 to fit more letters.
    if (document.getElementById("string").innerHTML.length === 10) {
        document.getElementById("string").innerHTML = "";
    }
    if (event.key === "q" || event.key === "Q") {
        document.getElementById("string").innerHTML += "Q";
        addOne(letterCounter, 0);
        document.getElementById("qCounter").innerHTML = "Q Counter: " + letterCounter[0].toString();
    }
    if (event.key === "w" || event.key === "W") {
        document.getElementById("string").innerHTML += "W";
        addOne(letterCounter, 1);
        document.getElementById("wCounter").innerHTML = "W Counter: " + letterCounter[1].toString();
    }
    if (event.key === "e" || event.key === "E") {
        document.getElementById("string").innerHTML += "E";
        addOne(letterCounter, 2);
        document.getElementById("eCounter").innerHTML = "E Counter: " + letterCounter[2].toString();
    }
    if (event.key === "r" || event.key === "R") {
        document.getElementById("string").innerHTML += "R";
        addOne(letterCounter, 3);
        document.getElementById("rCounter").innerHTML = "R Counter: " + letterCounter[3].toString();
    }
    if (event.key === "t" || event.key === "T") {
        document.getElementById("string").innerHTML += "T";
        addOne(letterCounter, 4);
        document.getElementById("tCounter").innerHTML = "T Counter: " + letterCounter[4].toString();
    }
    if (event.key === "y" || event.key === "Y") {
        document.getElementById("string").innerHTML += "Y";
        addOne(letterCounter, 5);
        document.getElementById("yCounter").innerHTML = "Y Counter: " + letterCounter[5].toString();
    }
    if (event.key === "u" || event.key === "U") {
        document.getElementById("string").innerHTML += "U";
        addOne(letterCounter, 6);
        document.getElementById("uCounter").innerHTML = "U Counter: " + letterCounter[6].toString();
    }
    if (event.key === "i" || event.key === "I") {
        document.getElementById("string").innerHTML += "I";
        addOne(letterCounter, 7);
        document.getElementById("iCounter").innerHTML = "I Counter: " + letterCounter[7].toString();
    }
    if (event.key === "o" || event.key === "O") {
        document.getElementById("string").innerHTML += "O";
        addOne(letterCounter, 8);
        document.getElementById("oCounter").innerHTML = "O Counter: " + letterCounter[8].toString();
    }
    if (event.key === "p" || event.key === "P") {
        document.getElementById("string").innerHTML += "P";
        addOne(letterCounter, 9);
        document.getElementById("pCounter").innerHTML = "P Counter: " + letterCounter[9].toString();
    }
    if (event.key === "a" || event.key === "A") {
        document.getElementById("string").innerHTML += "A";
        addOne(letterCounter, 10);
        document.getElementById("aCounter").innerHTML = "A Counter: " + letterCounter[10].toString();
    }
    if (event.key === "s" || event.key === "S") {
        document.getElementById("string").innerHTML += "S";
        addOne(letterCounter, 11);
        document.getElementById("sCounter").innerHTML = "S Counter: " + letterCounter[11].toString();
    }
    if (event.key === "d" || event.key === "D") {
        document.getElementById("string").innerHTML += "D";
        addOne(letterCounter, 12);
        document.getElementById("dCounter").innerHTML = "D Counter: " + letterCounter[12].toString();
    }
    if (event.key === "f" || event.key === "F") {
        document.getElementById("string").innerHTML += "F";
        addOne(letterCounter, 13);
        document.getElementById("fCounter").innerHTML = "F Counter: " + letterCounter[13].toString();
    }
    if (event.key === "g" || event.key === "G") {
        document.getElementById("string").innerHTML += "G";
        addOne(letterCounter, 14);
        document.getElementById("gCounter").innerHTML = "G Counter: " + letterCounter[14].toString();
    }
    if (event.key === "h" || event.key === "H") {
        document.getElementById("string").innerHTML += "H";
        addOne(letterCounter, 15);
        document.getElementById("hCounter").innerHTML = "H Counter: " + letterCounter[15].toString();
    }
    if (event.key === "j" || event.key === "J") {
        document.getElementById("string").innerHTML += "J";
        addOne(letterCounter, 16);
        document.getElementById("jCounter").innerHTML = "J Counter: " + letterCounter[16].toString();
    }
    if (event.key === "k" || event.key === "K") {
        document.getElementById("string").innerHTML += "K";
        addOne(letterCounter, 17);
        document.getElementById("kCounter").innerHTML = "K Counter: " + letterCounter[17].toString();
    }
    if (event.key === "l" || event.key === "L") {
        document.getElementById("string").innerHTML += "L";
        addOne(letterCounter, 18);
        document.getElementById("lCounter").innerHTML = "L Counter: " + letterCounter[18].toString();
    }
    if (event.key === "z" || event.key === "Z") {
        document.getElementById("string").innerHTML += "Z";
        addOne(letterCounter, 19);
        document.getElementById("zCounter").innerHTML = "Z Counter: " + letterCounter[19].toString();
    }
    if (event.key === "x" || event.key === "X") {
        document.getElementById("string").innerHTML += "X";
        addOne(letterCounter, 20);
        document.getElementById("xCounter").innerHTML = "X Counter: " + letterCounter[20].toString();
    }
    if (event.key === "c" || event.key === "C") {
        document.getElementById("string").innerHTML += "C";
        addOne(letterCounter, 21);
        document.getElementById("cCounter").innerHTML = "C Counter: " + letterCounter[21].toString();
    }
    if (event.key === "v" || event.key === "V") {
        document.getElementById("string").innerHTML += "V";
        addOne(letterCounter, 22);
        document.getElementById("vCounter").innerHTML = "V Counter: " + letterCounter[22].toString();
    }
    if (event.key === "b" || event.key === "B") {
        document.getElementById("string").innerHTML += "B";
        addOne(letterCounter, 23);
        document.getElementById("bCounter").innerHTML = "B Counter: " + letterCounter[23].toString();
    }
    if (event.key === "n" || event.key === "N") {
        document.getElementById("string").innerHTML += "N";
        addOne(letterCounter, 24);
        document.getElementById("nCounter").innerHTML = "N Counter: " + letterCounter[24].toString();
    }
    if (event.key === "m" || event.key === "M") {
        document.getElementById("string").innerHTML += "M";
        addOne(letterCounter, 25);
        document.getElementById("mCounter").innerHTML = "M Counter: " + letterCounter[25].toString();
    }
    total++;
    document.getElementById("totalTyped").innerHTML = "Total Keystrokes: " + total.toString();
});

window.addEventListener("keyup", event => {
    if (event.key === " ") {
        document.getElementById("string").innerHTML += " ";
        addOne(otherCounter, 0);
        document.getElementById("spaceCounter").innerHTML = "Space Counter: " + otherCounter[0].toString();
    }
});

function addOne(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            array[i]++;
            break;
        }
    }
}

