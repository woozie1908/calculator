//Addition function
var add = function (a, b) {
    return a + b;
};
//Subtract function
var subtract = function (a, b) {
    return a - b;
};
//Multiply function
var multiply = function (a, b) {
    return a * b;
};
//Divide function
var divide = function (a, b) {
    return a / b;
};
//Operator function
var operate = function (operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === 'x') {
        return multiply(a, b);
    }
    else if (operator === '÷') {
        return divide(a, b);
    }
};
//Global variables
var firstNumber = '';
var operator = '';
//Display
var display = document.querySelector("#display");
// Number buttons
// FIX 1: Changed display.value = currentValue + buttonNumber
// to display.value = display.value + buttonNumber
// because currentValue was never defined!
var numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonNumber = button.textContent || '';
        display.value = display.value + buttonNumber;
    });
});
// Symbol buttons
// FIX 2: Added "as NodeListOf<HTMLButtonElement>" 
// so TypeScript knows these are buttons!
// FIX 3: Added "const clickedOperator = button.textContent || ''"
// because clickedOperator was never defined!
var symbolButtons = document.querySelectorAll(".symbol");
symbolButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // FIX 3: Define clickedOperator at the TOP of the handler
        var clickedOperator = button.textContent || '';
        if (firstNumber && operator) {
            // Calculate first, then show result + new operator
            var result = operate(operator, Number(firstNumber), Number(display.value.split(operator)[1].trim()));
            firstNumber = String(result);
            display.value = firstNumber + ' ' + clickedOperator + ' ';
        }
        else {
            // First operator being clicked
            firstNumber = display.value;
            display.value = display.value + ' ' + clickedOperator + ' ';
        }
        // Save which operator was clicked
        operator = clickedOperator;
    });
});
// Reset button
// FIX 4: Added "as HTMLButtonElement"
// so TypeScript knows this is a button!
var clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    display.value = '';
    firstNumber = '';
    operator = '';
});
// Equals button
var equals = document.querySelector(".result");
equals.addEventListener("click", function () {
    if (firstNumber && operator) {
        var parts = display.value.split(operator);
        var secondNumber = parts[1].trim();
        if (secondNumber) {
            var result = operate(operator, Number(firstNumber), Number(secondNumber));
            display.value = String(result);
            firstNumber = '';
            operator = '';
        }
    }
});
// button.addEventListener("click", () => {
// const a = Number(input1.value);
// const b = Number(input2.value);
//     result.value = add(a, b);
//   });
// document.body.appendChild(answerBox);
// answerBox.appendChild(input1);
// answerBox.appendChild(input2);
// answerBox.appendChild(button);
// answerBox.appendChild(result);
// //Answer Box -> Playing around 
// const answerBox = document.createElement('div');
// answerBox.placeholder = 'Enter answer here';
// answerBox.classList.add('box');
// answerBox.style.width = '300px';
// answerBox.style.height = '60px';
// answerBox.style.border = '2px solid black';
// answerBox.style.position = 'absolute';
// answerBox.style.left = '50%';
// answerBox.style.top = '7%';
// answerBox.style.transform = 'translate(-50%, -50%)';
// document.body.appendChild(answerBox);
// //Establish Input Response
// const input1 = document.createElement("input");
// input1.type = "number";
// input1.placeholder = "First number";
// const input2 = document.createElement("input");
// input2.type = "number";
// input2.placeholder = "Second number";
// const button = document.createElement("button");
// button.textContent = "Add";
// const result = document.createElement("input");
// result.type = "text";
// result.placeholder = "Result";
// result.readOnly = true;
// button.addEventListener("click", () => {
//     const a = Number(input1.value);
//     const b = Number(input2.value);
//     result.value = add(a, b);
//   });
// document.body.appendChild(answerBox);
// answerBox.appendChild(input1);
// answerBox.appendChild(input2);
// answerBox.appendChild(button);
// answerBox.appendChild(result);
