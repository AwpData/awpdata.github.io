function getInput(form) {
    let input = form.inputBox.value;
    alert("You typed: " + input);
    document.getElementById("input-text").value = "";
}

document.getElementById("input-text").addEventListener("keyup", event => {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});
