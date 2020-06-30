let tileContainer = document.getElementById("grid-container");
let tileArray = [[]]; // Multi-dimensional array used for tracking where a tile is at any position

let box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

// Good note, you can't add event listeners or get an ID until the element is existing
// REF: https://stackoverflow.com/questions/4498482/javascript-cant-find-element-by-id

window.onload = () => {
    tileContainer.style.display = "grid";
    let x = 0;
    let y = 0;
    for (let i = 1; i < 17; i++) {
        let tileBox = document.createElement("div");
        tileBox.id = "box-" + i.toString();
        console.log(tileBox.id); // TESTING PURPOSES
        tileContainer.appendChild(tileBox);
        if (y === 4) {
            x += 1;
            y = 0;
            tileArray[x] = []; // I guess I have to say here that the next row is also an array;
        }
        tileArray[x][y] = new Box(tileBox.id, x, y, false);
        //tileArray[x][y] = tileBox;
        y++;
    }
    // Initializes global variables since the boxes exist now!
    box1 = document.getElementById("box-1");
    box2 = document.getElementById("box-2");
    box3 = document.getElementById("box-3");
    box4 = document.getElementById("box-4");
    box5 = document.getElementById("box-5");
    box6 = document.getElementById("box-6");
    box7 = document.getElementById("box-7");
    box8 = document.getElementById("box-8");
    box9 = document.getElementById("box-9");
    box10 = document.getElementById("box-10");
    box11 = document.getElementById("box-11");
    box12 = document.getElementById("box-12");
    box13 = document.getElementById("box-13");
    box14 = document.getElementById("box-14");
    box15 = document.getElementById("box-15");
    box16 = document.getElementById("box-16");
    createTile();
}


function createTile() {
    box1.innerHTML = "2";
}

let moveableX = null;
let moveableY = null;

// BUG: Occupied is undefined??
document.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "ArrowRight") {
        for (let i = 3; i >= 0; i++) {
            if (tileArray[0][i].getOccupied() === true) {
            } else {
                moveableY = i;
                document.getElementById(tileArray[0][i].name).innerHTML = "2";
                tileArray[0][i].occupied = true;
                break;
            }
        }
    }
});

class Box { // Class of the boxes that hold the tiles
    constructor(id, xloc, yloc, occupied) {
        this.name = id;
        this.xloc = xloc;
        this.yloc = yloc;
        this.occupied = occupied;
    }

    getOccupied() {
        return this.occupied;
    }
}

class Tile { // Class of the tiles are are in the boxes
    constructor() {
        this.value = null;
        this.color = null;
        this.xloc = null;
        this.yloc = null;
    }
}

