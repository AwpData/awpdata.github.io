let head = $("h1");
$('document').ready(function () {
    $("button").click(function () {
        if (head.text() === "Test") {
            head.text("red");
        } else {
            head.text("Test");
        }
    });
});

