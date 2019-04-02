var fill = document.getElementById("fill");
var input = document.getElementById("input");
var fillStyle = fill.style;

function btnHandler() {
    var inputValue = Number(input.value);
    if (inputValue < 0 || inputValue > 100) {
        fillStyle.backgroundColor = "white";
        inputValue = "0"
        alert("Please enter value between 0 to 100");
    } else if (inputValue >= 0 || inputValue <= 100) {
        fillStyle.width = `${inputValue}%`;
        fillStyle.backgroundColor = "green";
    }
}