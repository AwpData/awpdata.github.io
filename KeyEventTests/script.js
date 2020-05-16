let counter = Array(26);
counter.fill(0);
// [Q, W, E, R, T, Y...]

// Receives event of keypress, then increases it by 1 in its respective array index
window.addEventListener("keyup", event => {
    if (event.key === "q" || event.key === "Q") {
        document.getElementById("string").innerHTML = "Q";
        addOne(counter, 0);
        document.getElementById("qCounter").innerHTML = "Q Counter: " + counter[0].toString();
    }
    if (event.key === "w" || event.key === "W") {
        document.getElementById("string").innerHTML = "W";
        addOne(counter, 1);
        document.getElementById("wCounter").innerHTML = "W Counter: " + counter[1].toString();
    }
    if (event.key === "e" || event.key === "E") {
        document.getElementById("string").innerHTML = "E";
        addOne(counter, 2);
        document.getElementById("eCounter").innerHTML = "E Counter: " + counter[2].toString();
    }
    if (event.key === "r" || event.key === "R") {
        document.getElementById("string").innerHTML = "R";
        addOne(counter, 3);
        document.getElementById("rCounter").innerHTML = "R Counter: " + counter[3].toString();
    }
    if (event.key === "t" || event.key === "T") {
        document.getElementById("string").innerHTML = "T";
        addOne(counter, 4);
        document.getElementById("tCounter").innerHTML = "T Counter: " + counter[4].toString();
    }
    if (event.key === "y" || event.key === "Y") {
        document.getElementById("string").innerHTML = "Y";
        addOne(counter, 5);
        document.getElementById("yCounter").innerHTML = "Y Counter: " + counter[5].toString();
    }
    if (event.key === "u" || event.key === "U") {
        document.getElementById("string").innerHTML = "U";
        addOne(counter, 6);
        document.getElementById("uCounter").innerHTML = "U Counter: " + counter[6].toString();
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

