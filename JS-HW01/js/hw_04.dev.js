"use strict";

// function nameDeclarationFunc (){}
// const nameExpressinFunc = function (){}
// const nameArrowFunc = () => {}
// function countArguments() {
//     const count = arguments.length;
//     return console.log(arguments);
//  }
// countArguments (a, b, c, d);
// 1 task------------------------
function countArguments() {
  var count = arguments.length;
  return console.log("\u0412 \u0444\u0443\u043D\u043A\u0446\u0456\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E  ".concat(count, " \u0430\u0440\u0433\u0443\u043C\u0435\u0442\u0456\u0432 "));
}

function countArgumentsAlert() {
  return countArguments("Винни", "Пятачок", 1, 4);
}

; // 2 task -----------------------

function checkNumbers(a, b) {
  var result;

  if (a > b) {
    result = 1;
  } else if (a < b) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
}

function checkNumbersAlert() {
  var num1 = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));

  if (!isNaN(num1) || !isNaN(num2)) {
    return console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F ".concat(num1, " \u0442\u0430 ").concat(num2, " \u0441\u043A\u043B\u0430\u0434\u0430\u0454:"), checkNumbers(num1, num2));
  } else {
    return alert('Введене значення не валідне');
  }
} // 3 task ---------------------------


function countFactorial(a) {
  var result = a;

  for (var i = a - 1; i >= 1; i--) {
    result = +(result * i).toFixed(0);
  }

  return result;
}

function countFactorialAlert() {
  var num1 = parseInt(prompt('Введіть число'));

  if (!isNaN(num1)) {
    return console.log("\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B ".concat(num1, " \u0441\u043A\u043B\u0430\u0434\u0430\u0454:"), countFactorial(num1));
  } else {
    return alert('Введене значення не валідне');
  }
} // 4 task -------------------------------


function concatNumbers(a, b, c) {
  return concat = a + '' + b + '' + c;
}

function concatNumbersAlert() {
  var num1 = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var num3 = parseInt(prompt('Введіть трете число'));

  if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
    return console.log('Result: ', concatNumbers(num1, num2, num3));
  } else {
    return alert('Введене значення не валідне');
  }
} // 5 task-------------------------------------


function getSquare(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  var result;
  console.log(a, b);
  return result = a * b;
}

function getSquareAlert() {
  var num1 = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var type = '';
  !isNaN(num2) ? type = "прямкутника" : type = "квадрата";

  if (!isNaN(num1) && !isNaN(num2)) {
    return console.log("\u041F\u043B\u043E\u0449\u0430 ".concat(type, " \u0441\u043A\u043B\u0430\u0434\u0430\u0454:"), getSquare(num1, num2));
  } else if (!isNaN(num1) && isNaN(num2)) {
    // return console.log(`Площа ${type} складає:`, getSquare(num1));
    return console.log('Площа', type, 'складає:', getSquare(num1));
  } else {
    return alert('Введене значення не валідне');
  }
} // 6 task ----------------------------------------


function purfectNumber(a) {
  var totalDeliminator = 0;

  for (var i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      totalDeliminator = totalDeliminator + i;
    }
  }

  return a === totalDeliminator;
}

function purfectNumberAlert() {
  var num1 = parseInt(prompt('Введіть число'));

  if (!isNaN(num1)) {
    return console.log(purfectNumber(num1) ? 'Число є досконалим' : 'Число не є досконалим');
  } else {
    return alert('Введене значення не валідне');
  }
} // 7 task ----------------------------------------------


function purfectNumbers(a, b) {
  var totalArray = '';

  for (var i = a; i <= b; i++) {
    if (purfectNumber(i)) {
      totalArray += ' ' + i;
    }
  }

  return totalArray;
}

function purfectNumbersAlert() {
  var num1 = parseInt(prompt('Введіть перше число діапазону'));
  var num2 = parseInt(prompt('Введіть друге число діапазону'));

  if (!isNaN(num1) && !isNaN(num2)) {
    return console.log(purfectNumbers(num1, num2));
  } else {
    return alert('Введені значення не валідні');
  }
}