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

let operator1;
let operator2;
let result;
let screenActive;
let operationActive;
let operation;
debugger;

async function main () {

one.addEventListener('mouseup', addOne);
two.addEventListener('mouseup',addTwo);
three.addEventListener('mouseup', addThree);
four.addEventListener('mouseup', addFour);
five.addEventListener('mouseup', addFive);
six.addEventListener('mouseup', addSix);
seven.addEventListener('mouseup', addSeven);
eihgt.addEventListener('mouseup', addEight);
nine.addEventListener('mouseup', addNine);
zero.addEventListener('mouseup', addZero);
coma.addEventListener('mouseup', addComa);
clear.addEventListener('mouseup', clearScreen);
addition.addEventListener('mouseup', addOperation);
substract.addEventListener('mouseup', substractOperation);
plus.addEventListener('mouseup', plusOperation);
division.addEventListener('mouseup', divisionOparation);
equal.addEventListener('mouseup', equalFunction );

window.addEventListener('keypress', tecladoEvent);

function tecladoEvent (e) {
   if (e.key == '1') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '1';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '1';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '2') {
      if (!operationActive) {
         return screen.textContent = screen.textContent + '2';
      
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '2';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '3') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '3';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '3';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '4') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '4';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '4';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '5') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '5';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '5';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '6') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '6';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '6';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '7') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '7';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '7';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '8') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '8';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '8';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '9') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '9';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '9';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '0') {
      if (!operationActive) {
      return screen.textContent = screen.textContent + '0';
      }else {
         screen.textContent = '';
         screen.textContent = screen.textContent + '0';
         operationActive = false;
         addition.classList.remove('active');
         substract.classList.remove('active');
         plus.classList.remove('active');
         division.classList.remove('active');
         return;
         } 
   }
   if (e.key == '+') {
      if (!operationActive) {
      return addOperation();
      }else {
         return
         } 
   }
   if (e.key == '-') {
      if (!operationActive) {
         return substractOperation();
      }else {
         return
         } 
   }
   if (e.key == '*') {
      if (!operationActive) {
         return plusOperation();
      }else {
         return
         } 
   }
   if (e.key == '/') {
      if (!operationActive) {
         return divisionOparation();
      }else {
         return
         } 
   }
   if (e.key == '=' || e.key === 'Enter') {
      if (!operationActive) {
         return equalFunction();
      } else {
         return
      }
   }
   if (e.key == 'Backspace' || e.key === 'Delete') {
      if (!operationActive) {
         return clearScreen();
      } else {
         return
      }
   }  
}

function addOne () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '1';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '1';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
}

function addTwo () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '2';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '2';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addThree () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '3';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '3';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addFour () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '4';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '4';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addFive () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '5';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '5';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addSix () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '6';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '6';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addSeven () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '7';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '7';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addEight () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '8';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '8';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addNine () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '9';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '9';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addZero () {
   if (!operationActive) {
      screen.textContent = screen.textContent + '0';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + '0';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
   }
 }

 function addComa () {
   if (!operationActive) {
      screen.textContent = screen.textContent + ',';
      screenActive = true;
      return;
   } else {
      screen.textContent = '';
      screen.textContent = screen.textContent + ',';
      operationActive = false;
      addition.classList.remove('active');
      substract.classList.remove('active');
      plus.classList.remove('active');
      division.classList.remove('active');
      return;
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
    equal.classList.remove('active');
    return;
 }

 function equalFunction () {
   setTimeout(() => {
      equal.classList.remove('active');
   }, 100); 
   operator2 = screen.textContent;
   equal.classList.add('active');
   operationActive = false;
   return calculator ();
   console.log(screen)
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

function divisionOparation () {
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
         console.log(screen)
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
