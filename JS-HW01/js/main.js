
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
    const userName = prompt(`Введіть своє ім'я`);
    if (userName && userName.length && userName.length >= 3) {
        console.log(`Привіт ${userName}!`);
    } else {
        return alert(`Ви ввели невалідне ім'я`);
    }
}


function getUserAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const maxYearsOld = 100;
    const userBirthdayYear = parseInt(prompt('Введіть Ваш рік народження'));

    if (!isNaN(userBirthdayYear)) {
        if (userBirthdayYear <= currentYear) {
            let userAge = currentYear - userBirthdayYear;
            if (userAge > maxYearsOld) {
                alert(`Книга рекордів чекає на Вас....`);
            } else {
                console.log(`Вам виповнилось ${userAge} років`);
            }
        } else {
            alert(`Ви ввели невалідний рік народження`);
        }
    } else {
        alert(`Ви ввели неваліде значення`);
        if (confirm('Продовжити?')) {getUserAge()} else {return false}
    }
}


// SQUARE PERIMETR + DIAMETR------------------------------------
function getSquarePerimetr() {
    const sideSquare = parseFloat(prompt('Введіть сторону квадрата'));
    if (!isNaN(sideSquare)) {
        if (sideSquare > 0) {
            let perimeter = (sideSquare * 4).toFixed(2);
            console.log(`Периметр квадрата зі стороню ${sideSquare} дорівнює ${perimeter}!`);
        } else {
            alert(`Ви ввели невалідне значення`);
        }
    } else {
        alert(`Ви ввели невалідне значення`);
        if (confirm('Продовжити?')) {getSquarePerimetr()} else {return false};
    }
}

function getCircleArea() {
    const radius = parseFloat(prompt('Введіть радіус кола'));
    if (!isNaN(radius)) {
        if (radius > 0) {
            let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
            console.log(`Площа окружності із радіусом ${radius} дорівнює ${circleArea}`);
        } else {
            alert(`Ви ввели невалідне значення`);
        }
    } else {
        alert(`Ви ввели невалідне значення`);
        if (confirm('Продовжити?')) {getCircleArea()} else {return false};
    }
}


// SPEED AND DISTANCE------------------------------------
function getTravelSpeed() {
    const distance = parseInt(prompt('Введіть відстань між городами у км'));
    const travelTime = parseInt(prompt('Введіть бажаний час перебування у дорозі у годинах'));

    if (!isNaN(distance) && !isNaN(travelTime)) {
        if (distance > 0 && travelTime > 0) {
            let speed = (distance / travelTime).toFixed(2);
            console.log(`Ви повинні рухатись із швидкістю ${speed} км на годину`);
        } else if (distance > 0) {
            alert(`Ви ввели невалідне значення часу перебування у дорозі`);
        } else if (travelTime > 0) {
            alert(`Ви ввели невалідне значення відстані між городами`);
        } else {
            alert(`Ви ввели всі невалідні значення`);
        }
    } else {
        alert(`Ви ввели невалідні значення`);
        if (confirm('Продовжити?')) {getTravelSpeed()} else {return false};
    }
}


// CURRENCY EXCHANGE------------------------------------
function getCurrencyAmount() {
    const exchangeRate = 0.93427;
    const amountDollars = parseInt(prompt('Введить суму у доларах'));
    if (!isNaN(amountDollars)) {
        if (amountDollars > 0) {
            let amountEuro = (amountDollars * exchangeRate).toFixed(2);
            console.log(`Згідно поточного курса валют ${amountDollars}USD → ${amountEuro}EURO`);
        } else {
            alert(`Ви ввели невалідне значення суми`);
        }
    } else {
        alert(`Ви ввели невалідне значення`);
        if (confirm('Продовжити?')) {getCurrencyAmount()} else {return false};
    }
}

// Math methods---------------------------------------------

function augmentFloat() {
    const a = 0.1;
    const b = 0.2;
    console.log((a + b).toFixed(2));

    const c = '1';
    const d = 2;
    console.log((+c + d).toFixed(0));
}

function flashDriveAmount() {
    const fleshCapacity = parseInt(prompt('Введіть обсяг флешки в Гб'));
    if (!isNaN(fleshCapacity) && fleshCapacity > 0) {
        let amount = (fleshCapacity / 0.82).toFixed(0);
        console.log(`на Вашу флешку можно записати ${amount} файлів`);
    } else {
        console.log(`Ви ввели невалідне значення`);
    }
}

// Chocolate ------------
function chocolateAmount() {
    const sum = parseInt(prompt('Введить суму грошей в гаманці'));
    const price = parseInt(prompt('Введить ціну однієї шоколадки'));
    if (!isNaN(sum) && sum > 0) {
        if (!isNaN(price) && price > 0) {

            if (sum > price) {
                const amount = Math.floor(sum / price);
                const change = (sum % price).toFixed(2);
                console.log('sum:', sum, 'price:', price, 'amount:', amount, 'change:', change);
            } else {
                console.log(`Недостатньо коштів для купівлі шоколадки`);
            }

        } else {
            console.log(`Ви ввели невалідну ціну шоколадки`);
        }
    } else {
        console.log(`Ви ввели невалідне значення`);
    }
}

// Reverse--------------------------
function reverseNumber() {
    const inputNumber = parseInt(prompt('Введить тризначне число'));
    if (!isNaN(inputNumber) && (inputNumber >= 111) && (inputNumber <= 999)) {
        const first = parseInt(inputNumber / 100);
        const second = parseInt(inputNumber % 100 / 10);
        const third = parseInt(inputNumber % 100 % 10);
        const reverse = +(`${third}${second}${first}`);
        console.log(inputNumber, reverse);
    } else {
        console.log(`Ви ввели невалідне значення`);
        return false;
    }
}

// Bank---------------------------------

function loanInterest() {
    const deposit = parseInt(prompt('Введіть суму вкладу в банк на 2 місяці'));
    if (!isNaN(deposit) && deposit > 0) {
        const interstAmount = +((deposit * 5 * 60 )/(100 * 365)).toFixed(2);
        console.log('deposit: ', deposit, 'interestAmount: ', interstAmount);

    } else {
        console.log(`Ви ввели невалідне значення`);
        return false;
    }
}

/*  
2 && 0 && 3 → 0

2 || 0 || 3 → 2

2 && 0 || 3 → 3
*/