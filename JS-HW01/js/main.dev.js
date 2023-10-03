"use strict";

// let current Date;
// let @amountDollars;
// let function;
// let while;
// let if;

/*  CamelCase
    kebab-case
    snake_case
*/
// USER NAME + USER AGE------------------------------------
function getUserName() {
  var userName = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0432\u043E\u0454 \u0456\u043C'\u044F");

  if (userName && userName.length && userName.length >= 3) {
    console.log("\u041F\u0440\u0438\u0432\u0456\u0442 ".concat(userName, "!"));
  } else {
    return alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0456\u043C'\u044F");
  }
}

function getUserAge() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var maxYearsOld = 100;
  var userBirthdayYear = parseInt(prompt('Введіть Ваш рік народження'));

  if (!isNaN(userBirthdayYear)) {
    if (userBirthdayYear <= currentYear) {
      var userAge = currentYear - userBirthdayYear;

      if (userAge > maxYearsOld) {
        alert("\u041A\u043D\u0438\u0433\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u0456\u0432 \u0447\u0435\u043A\u0430\u0454 \u043D\u0430 \u0412\u0430\u0441....");
      } else {
        console.log("\u0412\u0430\u043C \u0432\u0438\u043F\u043E\u0432\u043D\u0438\u043B\u043E\u0441\u044C ".concat(userAge, " \u0440\u043E\u043A\u0456\u0432"));
      }
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0439 \u0440\u0456\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F");
    }
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");

    if (confirm('Продовжити?')) {
      getUserAge();
    } else {
      return false;
    }
  }
} // SQUARE PERIMETR + DIAMETR------------------------------------


function getSquarePerimetr() {
  var sideSquare = parseFloat(prompt('Введіть сторону квадрата'));

  if (!isNaN(sideSquare)) {
    if (sideSquare > 0) {
      var perimeter = (sideSquare * 4).toFixed(2);
      console.log("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0437\u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u044E ".concat(sideSquare, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(perimeter, "!"));
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    }
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");

    if (confirm('Продовжити?')) {
      getSquarePerimetr();
    } else {
      return false;
    }

    ;
  }
}

function getCircleArea() {
  var radius = parseFloat(prompt('Введіть радіус кола'));

  if (!isNaN(radius)) {
    if (radius > 0) {
      var circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
      console.log("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0456\u0437 \u0440\u0430\u0434\u0456\u0443\u0441\u043E\u043C ".concat(radius, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(circleArea));
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    }
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");

    if (confirm('Продовжити?')) {
      getCircleArea();
    } else {
      return false;
    }

    ;
  }
} // SPEED AND DISTANCE------------------------------------


function getTravelSpeed() {
  var distance = parseInt(prompt('Введіть відстань між городами у км'));
  var travelTime = parseInt(prompt('Введіть бажаний час перебування у дорозі у годинах'));

  if (!isNaN(distance) && !isNaN(travelTime)) {
    if (distance > 0 && travelTime > 0) {
      var speed = (distance / travelTime).toFixed(2);
      console.log("\u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044C \u0456\u0437 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
    } else if (distance > 0) {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443 \u043F\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u0443 \u0434\u043E\u0440\u043E\u0437\u0456");
    } else if (travelTime > 0) {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 \u043C\u0456\u0436 \u0433\u043E\u0440\u043E\u0434\u0430\u043C\u0438");
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u0432\u0441\u0456 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    }
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");

    if (confirm('Продовжити?')) {
      getTravelSpeed();
    } else {
      return false;
    }

    ;
  }
} // CURRENCY EXCHANGE------------------------------------


function getCurrencyAmount() {
  var exchangeRate = 0.93427;
  var amountDollars = parseInt(prompt('Введить суму у доларах'));

  if (!isNaN(amountDollars)) {
    if (amountDollars > 0) {
      var amountEuro = (amountDollars * exchangeRate).toFixed(2);
      console.log("\u0417\u0433\u0456\u0434\u043D\u043E \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043A\u0443\u0440\u0441\u0430 \u0432\u0430\u043B\u044E\u0442 ".concat(amountDollars, "USD \u2192 ").concat(amountEuro, "EURO"));
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0441\u0443\u043C\u0438");
    }
  } else {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");

    if (confirm('Продовжити?')) {
      getCurrencyAmount();
    } else {
      return false;
    }

    ;
  }
} // Math methods---------------------------------------------


function augmentFloat() {
  var a = 0.1;
  var b = 0.2;
  console.log((a + b).toFixed(2));
  var c = '1';
  var d = 2;
  console.log((+c + d).toFixed(0));
}

function flashDriveAmount() {
  var fleshCapacity = parseInt(prompt('Введіть обсяг флешки в Гб'));

  if (!isNaN(fleshCapacity) && fleshCapacity > 0) {
    var amount = (fleshCapacity / 0.82).toFixed(0);
    console.log("\u043D\u0430 \u0412\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u0438 ".concat(amount, " \u0444\u0430\u0439\u043B\u0456\u0432"));
  } else {
    console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }
} // Chocolate ------------


function chocolateAmount() {
  var sum = parseInt(prompt('Введить суму грошей в гаманці'));
  var price = parseInt(prompt('Введить ціну однієї шоколадки'));

  if (!isNaN(sum) && sum > 0) {
    if (!isNaN(price) && price > 0) {
      if (sum > price) {
        var amount = Math.floor(sum / price);
        var change = (sum % price).toFixed(2);
        console.log('sum:', sum, 'price:', price, 'amount:', amount, 'change:', change);
      } else {
        console.log("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043A\u043E\u0448\u0442\u0456\u0432 \u0434\u043B\u044F \u043A\u0443\u043F\u0456\u0432\u043B\u0456 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438");
      }
    } else {
      console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0443 \u0446\u0456\u043D\u0443 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438");
    }
  } else {
    console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
  }
} // Reverse--------------------------


function reverseNumber() {
  var inputNumber = parseInt(prompt('Введить тризначне число'));

  if (!isNaN(inputNumber) && inputNumber >= 111 && inputNumber <= 999) {
    var first = parseInt(inputNumber / 100);
    var second = parseInt(inputNumber % 100 / 10);
    var third = parseInt(inputNumber % 100 % 10);
    var reverse = +"".concat(third).concat(second).concat(first);
    console.log(inputNumber, reverse);
  } else {
    console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    return false;
  }
} // Bank---------------------------------


function loanInterest() {
  var deposit = parseInt(prompt('Введіть суму вкладу в банк на 2 місяці'));

  if (!isNaN(deposit) && deposit > 0) {
    var interstAmount = +(deposit * 5 * 60 / (100 * 365)).toFixed(2);
    console.log('deposit: ', deposit, 'interestAmount: ', interstAmount);
  } else {
    console.log("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0430\u043B\u0456\u0434\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    return false;
  }
}
/*  
2 && 0 && 3 → 0

2 || 0 || 3 → 2

2 && 0 || 3 → 3
*/