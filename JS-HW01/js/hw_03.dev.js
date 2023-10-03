"use strict";

// CURRENCY EXCHANGE------------------------------------
function checkAgeRate() {
  var userAge = parseInt(prompt('Введить Ваш вік'));

  if (isNaN(userAge)) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  if (userAge > 0 && userAge <= 11) {
    console.log('Ви дитина');
  } else if (userAge > 11 && userAge <= 17) {
    console.log('Ви підліток');
  } else if (userAge > 17 && userAge <= 59) {
    console.log('Ви дорослий');
  } else if (userAge > 59) {
    console.log('Ви пенсіонер');
  } else {
    console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }
}

function specSymbols() {
  var consoleNumber = parseInt(prompt('Введить одну цифру з клавіатури'));

  if (isNaN(consoleNumber) || consoleNumber.toString().length !== 1) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  switch (consoleNumber) {
    case 0:
      console.log(')');
      break;

    case 1:
      console.log('!');
      break;

    case 2:
      console.log('@');
      break;

    case 3:
      console.log('#');
      break;

    case 4:
      console.log('$');
      break;

    case 5:
      console.log('%');
      break;

    case 6:
      console.log('^');
      break;

    case 7:
      console.log('&');
      break;

    case 8:
      console.log('*');
      break;

    case 9:
      console.log('(');
      break;

    default:
      console.log('невідомий символ');
      break;
  }
}

function amountOfRange() {
  var firstNumber = parseInt(prompt('Введить перше значення діапазону обрахунку'));
  var secondNumber = parseInt(prompt('Введить друге значення діапазону обрахунку'));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  var sum = 0;
  var start = 0;
  var finish = 0;

  if (firstNumber < secondNumber) {
    start = firstNumber;
    finish = secondNumber;
  } else if (firstNumber > secondNumber) {
    start = secondNumber;
    finish = firstNumber;
  } else {
    sum = firstNumber;
    return console.log("sum: ".concat(sum));
  }

  for (var i = start; i <= finish; i++) {
    sum = sum + i;
    console.log("sum: ".concat(sum, ", i: ").concat(i, ", start: ").concat(start, ", finish: ").concat(finish));
  }
}

function denominatorInRange() {
  var firstNumber = parseInt(prompt('Введить перше значення діапазону обрахунку'));
  var secondNumber = parseInt(prompt('Введить друге значення діапазону обрахунку'));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  var gcd = 1;
  var start;
  var finish;

  if (firstNumber !== secondNumber) {
    start = Math.min(firstNumber, secondNumber);
    finish = Math.max(firstNumber, secondNumber);
  } else {
    gcd = firstNumber;
    return console.log("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0430\u0441\u0435\u043B ".concat(start, " \u0442\u0430 ").concat(finish, " : ").concat(gcd));
  }

  for (var i = start; i > 1; i--) {
    console.log('i: ', i, 'gcd', gcd);

    if (start % i === 0 && finish % i === 0) {
      gcd = i;
      return console.log("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u0435\u043B ".concat(start, " \u0442\u0430 ").concat(finish, " : ").concat(gcd));
    }
  }
}

function denominatorsOfNumber() {
  var getNumber = parseInt(prompt('Введить число для визначення всіх дільників'));

  if (isNaN(getNumber)) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  var deliminators = "";

  for (var i = 1; i <= getNumber; i++) {
    if (getNumber % i === 0) {
      deliminators = deliminators + " " + i;
    }
  }

  return console.log("\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(getNumber, " : ").concat(deliminators));
}

function palindrom() {
  var getNumber = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F'\u044F\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043B\u044F \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0447\u0438 \u0454 \u0432\u043E\u043D\u043E \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C");

  if (isNaN(getNumber) || getNumber.length !== 5) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  for (var i = 0; i <= getNumber.length; i++) {
    if (getNumber[i] !== getNumber[getNumber.length - 1 - i]) {
      console.log("\u0412\u0432\u0435\u0434\u0435\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C!");
      return false;
    } else {
      console.log("\u041D\u0430\u0436\u0430\u043B\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0435 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C!");
    }
  }
}

function sumWithOutDiscont() {
  var getSum = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"));
  var discount = 0;

  if (isNaN(getSum) || getSum <= 0) {
    return console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }

  if (getSum >= 200 && getSum < 300) {
    discount = 0.03;
  } else if (getSum >= 300 && getSum < 500) {
    discount = 0.05;
  } else if (getSum >= 500) {
    discount = 0.07;
  }

  var total = +(getSum / (1 - discount)).toFixed(0);
  return console.log("\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ".concat(total, ", \u0441\u043F\u043B\u0430\u0447\u0435\u043D\u0430 \u0441\u0443\u043C\u0430 ").concat(getSum));
}

function statisticsCount() {
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 1; i <= 10; i++) {
    var getNum = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C ".concat(i, " \u0435 \u0447\u0438\u0441\u043B\u043E")));

    if (!isNaN(getNum)) {
      if (getNum > 0) {
        positiveCount++;
      } else if (getNum < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }

      if (getNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  var total = positiveCount + negativeCount + zeroCount + evenCount + oddCount;
  total !== 0 ? console.log('positiveCount: ', positiveCount, 'negativeCount: ', negativeCount, 'zeroCount: ', zeroCount, 'evenCount: ', evenCount, 'oddCount: ', oddCount) : console.log("\u0412\u0438 \u043D\u0435 \u0432\u0432\u0435\u043B\u0438 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430");
}

function dayOfWeek() {
  var i = 0;
  var day = '';
  var n = 10;

  for (var j = 0; i <= n; j++) {
    for (i = 1; i <= 7; i++) {
      switch (i) {
        case 1:
          day = 'Понеділок';
          break;

        case 2:
          day = 'Віторок';
          break;

        case 3:
          day = 'Середа';
          break;

        case 4:
          day = 'Четвер';
          break;

        case 5:
          day = "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F";
          break;

        case 6:
          day = 'Субота';
          break;

        case 7:
          day = 'Неділя';
          break;

        default:
          day = 'Не визначений';
      }

      if (!confirm("".concat(day, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
        return console.log("\u0412\u0438 \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043B\u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440");
      } else {
        continue;
      }
    }
  }
}

function guessNumber() {
  var min = 0;
  var max = 100;

  if (confirm("\u0417\u0430\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 ".concat(min, " \u0434\u043E ").concat(max))) {
    for (var i = 0; i <= 100; i++) {
      var mid = Math.floor((max - min) / 2 + min);
      var answer = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(mid, ", <").concat(mid, " \u0430\u0431\u043E == ").concat(mid, "? "));

      switch (answer) {
        case ">":
          min = mid + 1;
          break;

        case "<":
          max = mid - 1;
          break;

        case "==":
          return alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(mid, "!"));

        case null:
          return alert("\u0412\u0438 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u0433\u0440\u0443......");

        default:
          alert('Ви не ввели відповідь. Будь ласка, введіть >, < або ==');
          break;
      }

      if (min === mid || max === mid) {
        return alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(mid, "!"));
      }
    }
  } else {
    return console.log("\u0412\u0438 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u0433\u0440\u0443......");
  }
}

function multiplicationTable() {
  var result;

  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
      result = i * j;
      console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044F ".concat(i, " \u043D\u0430 ").concat(j, " \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ").concat(result));
    }
  }
}

function dayTomorrow() {
  var day = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u0434\u0435\u043D\u044C \u043C\u0456\u0441\u044F\u0446\u044F"));

  if (isNaN(day) || day <= 0 || day > 31) {
    if (confirm("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F, \u0441\u043F\u0440\u043E\u0431\u0443\u0454\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437?")) {
      day = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u0434\u0435\u043D\u044C \u043C\u0456\u0441\u044F\u0446\u044F");
    } else {
      return console.log("\u0412\u0438 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043B\u0438 \u0440\u043E\u0431\u043E\u0442\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438....");
    }
  }

  var month = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u043C\u0456\u0441\u044F\u0446\u044C"));

  if (isNaN(month) || month <= 0 || month > 12) {
    if (confirm("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F, \u0441\u043F\u0440\u043E\u0431\u0443\u0454\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437?")) {
      month = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u043C\u0456\u0441\u044F\u0446\u044C");
    } else {
      return console.log("\u0412\u0438 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043B\u0438 \u0440\u043E\u0431\u043E\u0442\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438....");
    }
  }

  var year = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u0440\u0456\u043A"));

  if (isNaN(year) || year <= 1111 || year > 9999) {
    if (confirm("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F, \u0441\u043F\u0440\u043E\u0431\u0443\u0454\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437?")) {
      year = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u0442\u0443: \u0440\u0456\u043A");
    } else {
      return console.log("\u0412\u0438 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043B\u0438 \u0440\u043E\u0431\u043E\u0442\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438....");
    }
  }

  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day === 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day === 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;
  }

  if (nextMonth > 12) {
    nextMonth = 1;
    nextDay = 1;
    nextYear++;
  }

  if (nextDay < 10) {
    nextDay = "0" + nextDay;
  }

  ;

  if (nextMonth < 10) {
    nextMonth = "0" + nextMonth;
  }

  ;
  return alert("\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0437\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u043E\u044E \u0434\u0430\u0442\u043E\u044E: ".concat(nextDay, ".").concat(nextMonth, ".").concat(nextYear));
}