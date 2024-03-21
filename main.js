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