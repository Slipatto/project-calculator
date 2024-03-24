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
let calc = 0

// define the main function for the calculator
function operate(arg1, operation, arg2) {
    argument1 = parseFloat(arg1)
    argument2 = parseFloat(arg2)
    perform = operation
    answer = 0

    switch(perform) {
    case '+':
        answer = (argument1 + argument2);
        break;
    case '-':
        answer = (argument1 - argument2);
        break;
    case 'x':
        answer = (argument1 * argument2);
        break;
    case '÷':
        answer = (argument1 / argument2);
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

// Create display values
// Create Variables to reference html elements

let display = ''
let DISPLAY_VALUE = document.querySelector('#display-value')
// let displayTwo = ''
// let displayThree = ''

const ONE = document.querySelector('#one')
ONE.addEventListener("click", () => {
    if (!operator) {
    display = '1';
    number1 += display
    DISPLAY_VALUE.textContent = number1;
     } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
         display = '1';
         number2 += display;
         DISPLAY_VALUE.textContent = number2; 
     } else {
        display = 'ERROR';
        DISPLAY_VALUE.textContent = display;
     }
    });

const TWO = document.querySelector('#two')
TWO.addEventListener("click", () => {
    if (!operator) {
        display = '2';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '2';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const THREE = document.querySelector('#three')
THREE.addEventListener("click", () => {
    if (!operator) {
        display = '3';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '3';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const FOUR = document.querySelector('#four')
FOUR.addEventListener("click", () => {
    if (!operator) {
        display = '4';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '4';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const FIVE = document.querySelector('#five')
FIVE.addEventListener("click", () => {
    if (!operator) {
        display = '5';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '5';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const SIX = document.querySelector('#six')
SIX.addEventListener("click", () => {
    if (!operator) {
        display = '6';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '6';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const SEVEN = document.querySelector('#seven')
SEVEN.addEventListener("click", () => {
    if (!operator) {
        display = '7';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '7';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const EIGHT = document.querySelector('#eight')
EIGHT.addEventListener("click", () => {
    if (!operator) {
        display = '8';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '8';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const NINE = document.querySelector('#nine')
NINE.addEventListener("click", () => {
    if (!operator) {
        display = '9';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '9';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });
const ZERO = document.querySelector('#zero')
ZERO.addEventListener("click", () => {
    if (!operator) {
        display = '0';
        number1 += display
        DISPLAY_VALUE.textContent = number1;
         } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
             display = '0';
             number2 += display;
             DISPLAY_VALUE.textContent = number2; 
         } else {
            display = 'ERROR';
            DISPLAY_VALUE.textContent = display;
         }
        });

const ADD = document.querySelector('#add')
ADD.addEventListener("click", () => {
    display = '+';
    DISPLAY_VALUE.textContent = display;
    operator = '+';
});

const SUBTRACT = document.querySelector('#subtract')
SUBTRACT.addEventListener("click", () => {
    display = '-';
    DISPLAY_VALUE.textContent = display;
    operator = '-';
});

const MULTIPLY = document.querySelector('#multiply')
MULTIPLY.addEventListener("click", () => {
    display = 'x';
    DISPLAY_VALUE.textContent = display;
    operator = 'x';
});

const DIVIDE = document.querySelector('#divide')
DIVIDE.addEventListener("click", () => {
    display = '÷';
    DISPLAY_VALUE.textContent = display;
    operator = '÷';
});

const DECIMAL = document.querySelector('#decimal')
DECIMAL.addEventListener("click", () => {
    display = '.';
    DISPLAY_VALUE.textContent = display;
});

const CLEAR = document.querySelector('#clear-button')
CLEAR.addEventListener("click", () => {
    display = '';
    DISPLAY_VALUE.textContent = display;
    number1 = '';
    number2 = '';
    calc = '';

});

const EQUALS = document.querySelector('#equals')
EQUALS.addEventListener("click", () => {
    if (!display) {
        display = 'ERROR';
        DISPLAY_VALUE.textContent = display;
         } else if (display === '+' || display === '-' || display === 'x' || display === '÷') {
            display = 'ERROR'
            DISPLAY_VALUE.textContent = display
         } else {
            let calc = operate(number1, operator, number2);
            if (calc) {
            display = calc;
            DISPLAY_VALUE.textContent = calc;
            } else {
                display = 'ERROR'
                DISPLAY_VALUE.textContent = display;
            }
         }
         display = ''
         number1 = ''
         number2 = ''
         operator = ''
         calc = ''
        //  Make number 1 === calc after the equals button is pressed if you want continuous function
        });
