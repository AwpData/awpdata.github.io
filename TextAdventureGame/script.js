let inputBox = document.getElementById("input-text"); // Text input-box

function getInput(form) {
    let input = form.inputBox.value;
    alert("You typed: " + input);
    inputBox.value = "";
}

inputBox.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});
