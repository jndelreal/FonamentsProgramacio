let result;
let number1 = parseFloat(prompt("Enter a number."));
let number2 = parseFloat(prompt("Enter another number."));
let operator = prompt("Enter an operator.");
switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log("Invalid operation");
        break;
}

const finalAnswer = alert(`Your final result is: ${result}`);