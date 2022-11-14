let screen = document.querySelector('.screen');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eihgt = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const equal = document.querySelector('#equal');
const coma = document.querySelector('#coma');
const clear = document.querySelector('#ac');
const addition = document.querySelector('#addition');
const substract = document.querySelector('#substract');
const plus = document.querySelector('#plus');
const division = document.querySelector('#division');
const operationName = ["addition", "substract", "plus", "division"];
let key;
let operator1;
let operator2;
let result;
let screenActive;
let operationActive;
let operation;

function main () {

one.addEventListener('click', addOne);
//key.addEventListener('keypress', touch);
two.addEventListener('click',addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eihgt.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
zero.addEventListener('click', addZero);
coma.addEventListener('click', addComa);
clear.addEventListener('click', clearScreen);
addition.addEventListener('click', addOperation);
substract.addEventListener('click', substractOperation);
plus.addEventListener('click', plusOperation);
division.addEventListener('click', divisionOparation);
equal.addEventListener('click', equalFunction );

document.addEventListener('keypress', tecladoEvent);

function tecladoEvent (e) {
   if (e.key == '1') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '1';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '1';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '2') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '2';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '2';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '3') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '3';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '3';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '4') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '4';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '4';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '5') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '5';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '5';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '6') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '6';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '6';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '7') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '7';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '7';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '8') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '8';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '8';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
   if (e.key == '9') {
      if (!operationActive) {
      screen.textContent = screen.textContent + '9';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '9';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         } 
   }
}

function addOne () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '1';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '1';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
}

function addTwo () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '2';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '2';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addThree () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '3';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '3';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addFour () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '4';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '4';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addFive () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '5';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '5';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addSix () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '6';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '6';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addSeven () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '7';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '7';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addEight () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '8';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '8';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addNine () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '9';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '9';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addZero () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '0';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '0';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function addComa () {
   if (!operationActive) {
      screen.textContent = screen.textContent + ',';
      screenActive = true;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + ',';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
   }
 }

 function clearScreen () {
    screen.textContent = '';
    operator1 = '';
    operator2 = '';
    screenActive = false;
    operationActive = false;
    addition.classList.remove('active');
    substract.classList.remove('active');
    plus.classList.remove('active');
    division.classList.remove('active');

 }

 function equalFunction () {
   setTimeout(() => {
      equal.classList.remove('active');
   }, 100); 
   operator2 = screen.textContent;
   equal.classList.add('active');
   calculator ();
 }

 function addOperation () {
   operator1 = screen.textContent;
   operation = operationName[0];
   operationActive = true;
   addition.classList.add('active');
   substract.classList.remove('active');
   plus.classList.remove('active');
   division.classList.remove('active');
   console.log(operation)
      
}

function substractOperation () {
   operator1 = screen.textContent;
   operation = operationName[1];
   operationActive = true;
   substract.classList.add('active')
   addition.classList.remove('active');
   plus.classList.remove('active');
   division.classList.remove('active');
   console.log(operation)
}

function plusOperation () {
   operator1 = screen.textContent;
   operation = operationName[2];
   operationActive = true;
   substract.classList.remove('active')
   addition.classList.remove('active');
   plus.classList.add('active');
   division.classList.remove('active');
   console.log(operation)
}

function divisionOparation (number1, number2) {
   operator1 = screen.textContent;
   operation = operationName[3];
   operationActive = true;
   substract.classList.remove('active')
   addition.classList.remove('active');
   plus.classList.remove('active');
   division.classList.add('active');
   console.log(operation)
}


function calculator () {

   if (operation == 'addition') {
         let operatorNumber1 = parseInt(operator1, '10');
         let operatorNumber2 = parseInt(operator2, '10');
         result = operatorNumber1 + operatorNumber2;
         screen.textContent = result;
         screenActive = false;
         operator1 = 0;
      return console.log(result);
    } if (operation == 'substract') {
         let operatorNumber1 = parseInt(operator1, '10');
         let operatorNumber2 = parseInt(operator2, '10');
         result = operatorNumber1 - operatorNumber2;
         screen.textContent = result;
         screenActive = false;
         operator1 = 0;
         return console.log(result);
    } if (operation == 'plus') {
      let operatorNumber1 = parseInt(operator1, '10');
      let operatorNumber2 = parseInt(operator2, '10');
      result = operatorNumber1 * operatorNumber2;
      screen.textContent = result;
      screenActive = false;
      operator1 = 0;
      return console.log(result);
    } if (operation == 'division') {
      let operatorNumber1 = parseInt(operator1, '10');
      let operatorNumber2 = parseInt(operator2, '10');
      result = operatorNumber1 / operatorNumber2;
      screen.textContent = result;
      screenActive = false;
      operator1 = 0;
      return console.log(result);
    }
   }
}

main ();
