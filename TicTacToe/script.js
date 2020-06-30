window.addEventListener("keyup", (event) => {
    if (event.key === "o") {
        document.getElementById("box-2").innerHTML = "5";
    } else if (event.key === "p") {
        document.getElementById("box-2").innerHTML = "";
    }
});

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", addX(boxes[i]), false);
}

function addX(object) {
    document.getElementById(object.id).innerHTML = "X";
}

