//  1 task ---------------------------------
const carInfo = {
    manufacturer: 'Ferrari',
    model: '812 GTS',
    year: 2022,
    averageSpeed: 200,
    fuelConsumption: 15.8,
    fuelTankCapacity: 92,
    drivers: ["Michael Schumacher"],
    getcarInfo() {
        for (key in carInfo)
            if (typeof carInfo[key] !== 'function') {
                console.log(`Значення властивості ${key}: ${carInfo[key]}`);
            }
    },
    getDrivers() {
        console.log(`Водії: ${this.drivers}`);
    },
    addDriver(name) {
        this.drivers.push(name);
    },
    checkDrivers(name) {
        if (this.drivers.includes(name)) {
            console.log(`Водій ${name} є у списку`);
        } else {
            console.log(`Водій ${name} відсутній у списку`);
        }
    },
    removeDriver(name) {
        const driverIndex = this.drivers.indexOf(name);
        this.drivers.splice(driverIndex, 1);
    },

    calculateTrip(distance) {
        const totalDrivingTime = distance / this.averageSpeed;
        const breaksCount = Math.floor(totalDrivingTime / 4);
        const totalBreakTime = breaksCount;
        const totalTravelTime = totalDrivingTime + totalBreakTime;
        const fuelNeeded = (distance / 100) * this.fuelConsumption;

        console.log(`Для подолання відстані ${distance} км  за ${totalTravelTime} годин знадобиться ${fuelNeeded} літрів пального. Кількість перерв: ${breaksCount}`)

    },

};

function carInfoAlert() {
    carInfo.getcarInfo();
    carInfo.addDriver("Fernando Alonso");
    carInfo.addDriver("Mika Hakkinen");
    // carInfo.getcarInfo();
    carInfo.getDrivers();
    carInfo.removeDriver("Fernando Alonso");
    // carInfo.getcarInfo();
    carInfo.getDrivers();
    carInfo.checkDrivers("Michael Schumacher");
    carInfo.checkDrivers("Nike Victor");
    carInfo.calculateTrip(5000);
}

// 2 task------------------------------

const timeObject = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    normalizeTime() {
        if (this.seconds >= 60) {
            const extraMinutes = Math.floor(this.seconds / 60);
            this.minutes += extraMinutes;
            this.seconds %= 60;
        }
        if (this.minutes >= 60) {
            const extraHours = Math.floor(this.minutes / 60);
            this.hours += extraHours;
            this.minutes %= 60;
        }
        if (this.hours >= 24) {
            this.hours %= 24;
        }
    },
    displayTime() {
        const {
            hours,
            minutes,
            seconds
        } = this;
        const formattedHours = hours < 10 ? "0" + hours : hours;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        console.log(`${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`);
    },
    addSeconds(secondsToAdd) {
        this.seconds += secondsToAdd;
        this.normalizeTime();;
    },
    addMinutes(minutesToAdd) {
        this.minutes += minutesToAdd;
        this.normalizeTime();
    },
    addHours(hoursToAdd) {
        this.hours += hoursToAdd;
        this.normalizeTime();
    },
}

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
}

// 3 task -----------------------------------
function createFraction(numerator, denominator) {
    const fraction = {
        numerator: numerator,
        denominator: denominator,
        reduce() {
            const gcd = findGCD(this.numerator, this.denominator);
            this.numerator /= gcd;
            this.denominator /= gcd;
            return this;
        },
        add(inputFraction) {
            const newNumerator = this.numerator * inputFraction.denominator + inputFraction.numerator * this.denominator;
            const newDenominator = this.denominator * inputFraction.denominator;
            const result = createFraction(newNumerator, newDenominator);
            return result.reduce();
        },
        subtract(inputFraction) {
            const newNumerator = this.numerator * inputFraction.denominator - inputFraction.numerator * this.denominator;
            const newDenominator = this.denominator * inputFraction.denominator;
            const result = createFraction(newNumerator, newDenominator);
            return result.reduce();
        },
        multiply(inputFraction) {
            const newNumerator = this.numerator * inputFraction.numerator;
            const newDenominator = this.denominator * inputFraction.denominator;
            const result = createFraction(newNumerator, newDenominator);
            return result.reduce();
        },
        divide(inputFraction) {
            const newNumerator = this.numerator * inputFraction.denominator;
            const newDenominator = this.denominator * inputFraction.numerator;
            const result = createFraction(newNumerator, newDenominator);
            return result.reduce();
        },
        toString() {
            return `${this.numerator}/${this.denominator}`;
        },
    };
    return fraction;
};

function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
};

function fractionAlert() {
    const fraction1 = createFraction(1, 2);
    const fraction2 = createFraction(3, 4);

    console.log("Сума:", fraction1.add(fraction2).toString());
    console.log("Різниця:", fraction1.subtract(fraction2).toString());
    console.log("Добуток:", fraction1.multiply(fraction2).toString());
    console.log("Частка:", fraction1.divide(fraction2).toString());
}