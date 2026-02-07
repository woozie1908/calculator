//Addition function
var add = function (a, b) {
    return a + b;
};
var resultAdd = add(8, 8);
console.log(resultAdd);
// the following items and testing them in your browser’s console:
// add
// subtract
// multiply
// divide
//Answer Box
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
//Establish Input Response
var input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "First number";
var input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Second number";
var button = document.createElement("button");
button.textContent = "Add";
var result = document.createElement("input");
result.type = "text";
result.placeholder = "Result";
result.readOnly = true;
button.addEventListener("click", function () {
    var a = Number(input1.value);
    var b = Number(input2.value);
    result.value = add(a, b);
});
document.body.appendChild(answerBox);
answerBox.appendChild(input1);
answerBox.appendChild(input2);
answerBox.appendChild(button);
answerBox.appendChild(result);
