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
var resultShown = false; // true = result just shown, next number click starts fresh
// false = normal typing mode
//Display
var display = document.querySelector("#display");
// Number buttons
var numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonNumber = button.textContent || '';
        if (resultShown) {
            // Clear display and start new number
            display.value = buttonNumber;
            firstNumber = '';
            operator = '';
            resultShown = false; // Example: Result was "8", user clicks "5" → display shows "5"
        }
        else {
            // Normal typing - just add number
            display.value = display.value + buttonNumber;
        }
    });
});
// Decimal button
var decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", function () {
    // If result was just shown, start fresh with "0."
    if (resultShown) {
        display.value = '0.';
        firstNumber = '';
        operator = '';
        resultShown = false;
        return;
    }
    var currentNumber = '';
    if (operator) {
        var parts = display.value.split(operator);
        currentNumber = parts[parts.length - 1].trim();
    }
    else {
        currentNumber = display.value;
    }
    if (!currentNumber.includes('.')) {
        display.value = display.value + '.';
    }
});
// Symbol buttons
var symbolButtons = document.querySelectorAll(".symbol");
symbolButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var clickedOperator = button.textContent || '';
        // Example: Result was "8", user clicks "+" → continue with "8 +"
        if (resultShown) {
            resultShown = false;
            firstNumber = display.value;
            display.value = display.value + ' ' + clickedOperator + ' ';
            operator = clickedOperator;
            return;
        }
        if (firstNumber && operator) {
            var parts = display.value.split(operator);
            var secondNumber = parts[1].trim();
            if (!secondNumber) {
                operator = clickedOperator;
                display.value = firstNumber + ' ' + clickedOperator + ' ';
                return;
            }
            var result = operate(operator, Number(firstNumber), Number(secondNumber));
            firstNumber = String(parseFloat(Number(result).toFixed(4)));
            display.value = firstNumber + ' ' + clickedOperator + ' ';
        }
        else {
            firstNumber = display.value;
            display.value = display.value + ' ' + clickedOperator + ' ';
        }
        operator = clickedOperator;
    });
});
// Reset button
var clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    display.value = '';
    firstNumber = '';
    operator = '';
    resultShown = false;
});
// Equals button
var equals = document.querySelector(".equals");
equals.addEventListener("click", function () {
    if (firstNumber && operator) {
        var parts = display.value.split(operator);
        var secondNumber = parts[1].trim();
        if (secondNumber) {
            var result = operate(operator, Number(firstNumber), Number(secondNumber));
            display.value = String(parseFloat(Number(result).toFixed(4)));
            firstNumber = '';
            operator = '';
            resultShown = true;
        }
    }
});
var backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
    if (display.value.length > 0) {
        var currentDisplay = display.value;
        // Check if last 3 characters are " [operator] " (space-operator-space)
        var lastThree = currentDisplay.slice(-3);
        var operatorWithSpaces = [' + ', ' - ', ' x ', ' ÷ '];
        if (operatorWithSpaces.includes(lastThree)) {
            // Delete all 3 characters (space-operator-space)
            display.value = currentDisplay.slice(0, -3);
            operator = '';
            firstNumber = '';
        }
        else {
            // Just delete last character
            display.value = currentDisplay.slice(0, -1);
        }
    }
});
