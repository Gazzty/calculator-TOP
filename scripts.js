const prompt = require("prompt-sync")();

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

let userNum1 = prompt("Please insert the first number: ");
let userNum2 = prompt("Enter second numer: ");
let userOp = prompt("Enter the operation");

console.log(calc(userNum1, userNum2, userOp));