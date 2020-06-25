let box1 = document.getElementById("box-1");

box1.addEventListener("mouseover", () => {
    document.body.style.cursor = "pointer";
    box1.style.backgroundColor = "red";
});

box1.addEventListener("mouseout", () => {
    document.body.style.cursor = "default";
    box1.style.backgroundColor = "lightgrey";
});

// I could create a clicking game where you have to click a highlighted square before the time runs out... HMMM