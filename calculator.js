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
var resultShown = false;
// NEW: Tracks if a result was just displayed
// true = result just shown, next number click starts fresh
// false = normal typing mode
//Display
var display = document.querySelector("#display");
// Number buttons
var numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonNumber = button.textContent || '';
        if (resultShown) {
            // NEW: Result was just shown, start fresh!
            // Clear display and start new number
            display.value = buttonNumber;
            firstNumber = '';
            operator = '';
            resultShown = false;
            // Example: Result was "8", user clicks "5" → display shows "5"
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
        // NEW: If result was just shown, continue with that result!
        // Example: Result was "8", user clicks "+" → continue with "8 +"
        if (resultShown) {
            resultShown = false;
            // Don't reset firstNumber - keep the result as firstNumber
            // Don't reset display - keep showing the result
            // Just add the operator and continue!
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
    // NEW: Reset resultShown when cleared
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
            // NEW: Tell the calculator a result was just shown!
        }
    }
});
