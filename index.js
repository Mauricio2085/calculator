function addOperator (number1, number2) {
    return number1 + number2;
}

function subOperator (number1, number2) {
    return number1 - number2;
}

function pluOperator (number1, number2) {
    return number1 * number2;
}

function divOperator (number1, number2) {
    return number1 / number2;
}


function calculator (number1, number2) {
    let x = 4;
    if (x == 1) {
        return addOperator(number1, number2);
    }
    if (x == 2) {
        return subOperator(number1, number2);
    }
    if (x == 3) {
        return pluOperator(number1, number2);
    }
    if (x == 4) {
        return divOperator(number1, number2);
    }
    
} 
console.log(calculator(4, 2));