document.write("For Loop<br>");
for (let i = 0; i < 9; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("<br>While Loop<br>");

let i = 0;
while (i < 9) {
    let j = 0;
    while (j <= i) {
        document.write("#");
        j++;
    }
    document.write("<br>");
    i++;
}


