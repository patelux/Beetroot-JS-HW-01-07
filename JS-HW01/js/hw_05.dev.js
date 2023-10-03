"use strict";

//  1 task ---------------------------------
var carInfo = {
  manufacturer: 'Ferrari',
  model: '812 GTS',
  year: 2022,
  averageSpeed: 200,
  fuelConsumption: 15.8,
  fuelTankCapacity: 92,
  drivers: ["Michael Schumacher"],
  getcarInfo: function getcarInfo() {
    for (key in carInfo) {
      if (typeof carInfo[key] !== 'function') {
        console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456 ".concat(key, ": ").concat(carInfo[key]));
      }
    }
  },
  getDrivers: function getDrivers() {
    console.log("\u0412\u043E\u0434\u0456\u0457: ".concat(this.drivers));
  },
  addDriver: function addDriver(name) {
    this.drivers.push(name);
  },
  checkDrivers: function checkDrivers(name) {
    if (this.drivers.includes(name)) {
      console.log("\u0412\u043E\u0434\u0456\u0439 ".concat(name, " \u0454 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443"));
    } else {
      console.log("\u0412\u043E\u0434\u0456\u0439 ".concat(name, " \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443"));
    }
  },
  removeDriver: function removeDriver(name) {
    var driverIndex = this.drivers.indexOf(name);
    this.drivers.splice(driverIndex, 1);
  },
  calculateTrip: function calculateTrip(distance) {
    var totalDrivingTime = distance / this.averageSpeed;
    var breaksCount = Math.floor(totalDrivingTime / 4);
    var totalBreakTime = breaksCount;
    var totalTravelTime = totalDrivingTime + totalBreakTime;
    var fuelNeeded = distance / 100 * this.fuelConsumption;
    console.log("\u0414\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 ".concat(distance, " \u043A\u043C  \u0437\u0430 ").concat(totalTravelTime, " \u0433\u043E\u0434\u0438\u043D \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F ").concat(fuelNeeded, " \u043B\u0456\u0442\u0440\u0456\u0432 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E. \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0432: ").concat(breaksCount));
  }
};

function carInfoAlert() {
  carInfo.getcarInfo();
  carInfo.addDriver("Fernando Alonso");
  carInfo.addDriver("Mika Hakkinen"); // carInfo.getcarInfo();

  carInfo.getDrivers();
  carInfo.removeDriver("Fernando Alonso"); // carInfo.getcarInfo();

  carInfo.getDrivers();
  carInfo.checkDrivers("Michael Schumacher");
  carInfo.checkDrivers("Nike Victor");
  carInfo.calculateTrip(5000);
} // 2 task------------------------------


var timeObject = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  normalizeTime: function normalizeTime() {
    if (this.seconds >= 60) {
      var extraMinutes = Math.floor(this.seconds / 60);
      this.minutes += extraMinutes;
      this.seconds %= 60;
    }

    if (this.minutes >= 60) {
      var extraHours = Math.floor(this.minutes / 60);
      this.hours += extraHours;
      this.minutes %= 60;
    }

    if (this.hours >= 24) {
      this.hours %= 24;
    }
  },
  displayTime: function displayTime() {
    var hours = this.hours,
        minutes = this.minutes,
        seconds = this.seconds;
    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    console.log("".concat(formattedHours, " : ").concat(formattedMinutes, " : ").concat(formattedSeconds));
  },
  addSeconds: function addSeconds(secondsToAdd) {
    this.seconds += secondsToAdd;
    this.normalizeTime();
    ;
  },
  addMinutes: function addMinutes(minutesToAdd) {
    this.minutes += minutesToAdd;
    this.normalizeTime();
  },
  addHours: function addHours(hoursToAdd) {
    this.hours += hoursToAdd;
    this.normalizeTime();
  }
};

function timeObjectAlert() {
  timeObject.hours = 20;
  timeObject.minutes = 59;
  timeObject.seconds = 45;
  timeObject.displayTime(); // Виведе "20:59:45"

  timeObject.addSeconds(30);
  timeObject.displayTime(); // Виведе "21:00:15"

  timeObject.addMinutes(75);
  timeObject.displayTime(); // Виведе "22:15:15"

  timeObject.addHours(3);
  timeObject.displayTime(); // Виведе "01:15:15"
} // 3 task -----------------------------------


function createFraction(numerator, denominator) {
  var fraction = {
    numerator: numerator,
    denominator: denominator,
    reduce: function reduce() {
      var gcd = findGCD(this.numerator, this.denominator);
      this.numerator /= gcd;
      this.denominator /= gcd;
      return this;
    },
    add: function add(inputFraction) {
      var newNumerator = this.numerator * inputFraction.denominator + inputFraction.numerator * this.denominator;
      var newDenominator = this.denominator * inputFraction.denominator;
      var result = createFraction(newNumerator, newDenominator);
      return result.reduce();
    },
    subtract: function subtract(inputFraction) {
      var newNumerator = this.numerator * inputFraction.denominator - inputFraction.numerator * this.denominator;
      var newDenominator = this.denominator * inputFraction.denominator;
      var result = createFraction(newNumerator, newDenominator);
      return result.reduce();
    },
    multiply: function multiply(inputFraction) {
      var newNumerator = this.numerator * inputFraction.numerator;
      var newDenominator = this.denominator * inputFraction.denominator;
      var result = createFraction(newNumerator, newDenominator);
      return result.reduce();
    },
    divide: function divide(inputFraction) {
      var newNumerator = this.numerator * inputFraction.denominator;
      var newDenominator = this.denominator * inputFraction.numerator;
      var result = createFraction(newNumerator, newDenominator);
      return result.reduce();
    },
    toString: function toString() {
      return "".concat(this.numerator, "/").concat(this.denominator);
    }
  };
  return fraction;
}

;

function findGCD(a, b) {
  return b === 0 ? a : findGCD(b, a % b);
}

;

function fractionAlert() {
  var fraction1 = createFraction(1, 2);
  var fraction2 = createFraction(3, 4);
  console.log("Сума:", fraction1.add(fraction2).toString());
  console.log("Різниця:", fraction1.subtract(fraction2).toString());
  console.log("Добуток:", fraction1.multiply(fraction2).toString());
  console.log("Частка:", fraction1.divide(fraction2).toString());
}