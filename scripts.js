/* const prompt = require("prompt-sync")(); */

// First we make a calculator function
function calc(num1, num2, operation){
    // 
    num1 = +num1;
    num2 = +num2;
    if(operation == '+'){
        return num1 + num2;
    }else if(operation == '-'){
        return num1 - num2;
    }else if(operation == '*'){
        return num1 * num2;
    }else if(operation == '/'){
        if(num2 != 0){
            return num1 / num2;
        }
        else{
            return "MATH ERROR";
        }
    }

    return;
}

let userNum1 = 0;
let userNum2 = 0;
let finishedFirstNum = false;
let userOp = "";

// DOM code
// Set up number buttons
const numDiv = document.querySelector(".numbers-container");
for(let i=9;i>=0;i--){
    const numButton = document.createElement("button");
    numButton.classList.add("num-button");
    let id = +i
    numButton.setAttribute("id", "num-button-" + id);
    numButton.textContent = i;

    numDiv.appendChild(numButton);
}

// Set buttons functionality
const displayText = document.querySelector("#display-text");

// Add numbers to display
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        if(displayText.textContent == '+'
            || displayText.textContent == '-'
            || displayText.textContent == '*'
            || displayText.textContent == '/'
        ){
            displayText.textContent = "";
            finishedFirstNum = true;
        }
        displayText.textContent += button.textContent;
        
        if(!finishedFirstNum){
            userNum1 = +displayText.textContent;
        }else{
            userNum2 = +displayText.textContent;
        }

        console.log("first num: " + userNum1);
        console.log("second num: " + userNum2);
        console.log("Operation: " + userOp);
    })
})

// Operator buttons
const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        if(button.classList.contains("special-button")){
            return;
        }
        displayText.textContent = button.textContent;
        userOp = displayText.textContent;
    })
})

// Clear button
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener(("click"), (e) => {
    displayText.textContent = "";
    userNum1 = 0;
    userNum2 = 0;
    userOp = '';
})

// Equal button
const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener(("click"), (e) => {
    displayText.textContent = calc(userNum1, userNum2, userOp);
    console.log(calc(userNum1, userNum2, userOp));
    userNum1 = 0;
    userNum2 = 0;
    userOp = '';
})