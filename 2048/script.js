let tileContainer = document.getElementById("grid-container");
let tileArray = [[]]; // Multi-dimensional array used for tracking where a tile is at any position

window.onload = () => {
    tileContainer.style.display = "grid";
    let x = 0;
    let y = 0;
    for (let i = 1; i < 17; i++) {
        let tileBox = document.createElement("div");
        tileBox.id = "box-" + i.toString();
        console.log(tile.id); // TESTING PURPOSES
        tileContainer.appendChild(tileBox);
        if (y === 4) {
            x += 1;
            y = 0;
            tileArray[x] = []; // I guess I have to say that the next row is also an array;
        }
        tileArray[x][y] = tileBox;
        y++;
    }
    startGame();
}

// Good note, you can't add event listeners or get an ID until the element is existing
// REF: https://stackoverflow.com/questions/4498482/javascript-cant-find-element-by-id
function startGame() {
    let box1 = document.getElementById("box-1");
    box1.innerHTML = "2";
}

class tile {
    constructor() {
        this.value = null;
        this.color = null;
    }
}
