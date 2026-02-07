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
var resultAdd = divide(8, 8);
console.log(resultAdd);
//Answer Box -> Playing around 
var answerBox = document.createElement('div');
answerBox.classList.add('box');
answerBox.placeholder = 'Enter answer here';
answerBox.classList.add('box');
answerBox.style.width = '300px';
answerBox.style.height = '60px';
answerBox.style.border = '2px solid black';
answerBox.style.position = 'absolute';
answerBox.style.left = '50%';
answerBox.style.top = '7%';
answerBox.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(answerBox);
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
