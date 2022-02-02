let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let resultTextArea = document.getElementById("resultTextArea");

addButton.addEventListener("click", function() {
let value1= Number(number1Input.value);
let value2 = Number(number2Input.value);
resultTextArea.innerText = value1 + value2;
});

subtractButton.addEventListener("click", function() {
let value1= Number(number1Input.value);
let value2 = Number(number2Input.value);
resultTextArea.innerText = value1 - value2;
});

multiplyButton.addEventListener("click", function() {
let value1= Number(number1Input.value);
let value2 = Number(number2Input.value);
resultTextArea.innerText = value1 * value2;
});

divideButton.addEventListener("click", function() {
let value1= Number(number1Input.value);
let value2 = Number(number2Input.value);
resultTextArea.innerText = value1 / value2;
});