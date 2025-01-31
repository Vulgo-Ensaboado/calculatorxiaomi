let currentNumber = '';
let previousNumber = '';
let operator = null;

function acrescenteNum(number) {
  currentNumber += number;
  updateDisplay();
}

function operation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
}

function calculate() {
  if (operator === null || currentNumber === '' || previousNumber === '') return;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = null;
  previousNumber = '';
  updateDisplay();
}

function Factorial() {
  const num = parseInt(currentNumber);
  if (isNaN(num) || num < 0) {
    currentNumber = 'Error';
  } else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    currentNumber = factorial.toString();
  }
  updateDisplay();
}

function Percent(){
  const num = parseFloat(currentNumber);
  if (isNaN(num) || num < 0){
    currentNumber = 'Error';
  }else {
    currentNumber = (num / 100).toString();
  }

  updateDisplay();
}

function delCaracter() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

function limpaTela() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay();
}
function updateDisplay() {
  const display = document.getElementById('tela');
  display.value = currentNumber || '0';
}