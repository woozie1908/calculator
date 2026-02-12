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
console.log(operate('+', 3, 1));
//Establish functions to update number and symbol varibles with buttons clicked
var display = document.querySelector("#display");
;
var numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var currentValue = display.value;
        var buttonNumber = button.textContent;
        display.value = currentValue + buttonNumber;
        display.readOnly = true;
    });
});
var symbolButtons = document.querySelectorAll(".symbol");
symbolButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var currentValue = display.value;
        var buttonSymbol = button.textContent;
        display.value = currentValue + buttonSymbol;
        display.readOnly = true;
    });
});
//Reset button
var clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    display.value = '';
});
// //Call operate and find result of numbers
var equals = document.querySelector(".result");
equals.addEventListener("click", function () {
    var expression = display.value;
    var operator = "";
    if (expression.includes("+"))
        operator = "+";
    else if (expression.includes("-"))
        operator = "-";
    else if (expression.includes("x"))
        operator = "x";
    else if (expression.includes("÷"))
        operator = "÷";
    var parts = expression.split(operator);
    var a = Number(parts[0]);
    var b = Number(parts[1]);
    var result = operate(operator, a, b);
    display.value = String(result);
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
