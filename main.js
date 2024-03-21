// Project Calculator

// Basic Operation Functions

function add(num1, num2) {
    answer = num1 + num2
    return answer
}

function subtract(num1, num2) {
    answer = num1 - num2
    return answer
}

function multiply(num1, num2) {
    answer = num1 * num2
    return answer
}

function divide(num1, num2) {
    if (num1 && num2 != 0) {
    answer = num1 / num2
    return answer
    } else {
        return "Error, cannot divide by 0"
    }
}

// Function tests - all working
// x = add(1,2);
// y = subtract(2,1);
// z = multiply(3,2);
// a = divide(0,1);
// b = divide(4,2);

// declare universal variables
let number1 = ''
let number2 = ''
let operator = ''

// define the main function for the calculator
function operate(arg1, operation, arg2) {
    argument1 = parseFloat(arg1)
    argument2 = parseFloat(arg2)
    perform = operation
    answer = ''

    switch(perform) {
    case '+':
        answer = (arg1 + arg2);
        break;
    case '-':
        answer = (arg1 - arg2);
        break;
    case '*':
        answer = (arg1 * arg2);
        break;
    case '/':
        answer = (arg1 / arg2);
        break;
    }
    return answer
}

// Test operate function - Working as intended
// x = operate(3, '*', 3)
// y = operate(2, '+', 5.5)
// z = operate(100.1, '/', 2)
// a = operate(5000.962, '-', 8000)
// b = operate(199999, '-', 5)
