// CURRENCY EXCHANGE------------------------------------
function checkAgeRate() {

    const userAge = parseInt(prompt('Введить Ваш вік'));
    if (isNaN(userAge)) {
        return console.log(`Ви ввели невалідне значення`);
    }

    if (userAge > 0 && userAge <= 11) {
        console.log('Ви дитина');
    } else
    if (userAge > 11 && userAge <= 17) {
        console.log('Ви підліток');
    } else
    if (userAge > 17 && userAge <= 59) {
        console.log('Ви дорослий');
    } else
    if (userAge > 59) {
        console.log('Ви пенсіонер');
    } else {
        console.log(`Ви ввели невалідне значення`);
    }
}

function specSymbols() {
    const consoleNumber = parseInt(prompt('Введить одну цифру з клавіатури'));

    if (isNaN(consoleNumber) || (consoleNumber.toString().length !== 1)) {
        return console.log(`Ви ввели невалідне значення`);
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
    const firstNumber = parseInt(prompt('Введить перше значення діапазону обрахунку'));
    const secondNumber = parseInt(prompt('Введить друге значення діапазону обрахунку'));
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return console.log(`Ви ввели невалідне значення`);
    }
    let sum = 0;
    let start = 0;
    let finish = 0;

    if (firstNumber < secondNumber) {
        start = firstNumber;
        finish = secondNumber;

    } else if (firstNumber > secondNumber) {
        start = secondNumber;
        finish = firstNumber;

    } else {
        sum = firstNumber;
        return console.log(`sum: ${sum}`)
    }

    for (let i = start; i <= finish; i++) {
        sum = sum + i;
        console.log(`sum: ${sum}, i: ${i}, start: ${start}, finish: ${finish}`);
    }
}

function denominatorInRange() {
    const firstNumber = parseInt(prompt('Введить перше значення діапазону обрахунку'));
    const secondNumber = parseInt(prompt('Введить друге значення діапазону обрахунку'));
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return console.log(`Ви ввели невалідне значення`);
    }

    let gcd = 1;
    let start;
    let finish;

    if (firstNumber !== secondNumber) {
        start = Math.min(firstNumber, secondNumber);
        finish = Math.max(firstNumber, secondNumber);
    } else {
        gcd = firstNumber;
        return console.log(`Найбільший загальний дільник часел ${start} та ${finish} : ${gcd}`);
    }

    for (let i = start; i > 1; i--) {
        console.log('i: ', i, 'gcd', gcd)
        if (start % i === 0 && finish % i === 0) {
            gcd = i;
            return console.log(`Найбільший загальний дільник чисел ${start} та ${finish} : ${gcd}`)
        }
    }
}


function denominatorsOfNumber() {
    const getNumber = parseInt(prompt('Введить число для визначення всіх дільників'));

    if (isNaN(getNumber)) {
        return console.log(`Ви ввели невалідне значення`);
    }

    let deliminators = "";

    for (let i = 1; i <= getNumber; i++) {
        if (getNumber % i === 0) {
            deliminators = deliminators + " " + i;
        }
    }
    return console.log(`Дільники числа ${getNumber} : ${deliminators}`);
}

function palindrom() {
    const getNumber = (prompt(`Введіть п'ятизначне число для визначення чи є воно паліндромом`));

    if (isNaN(getNumber) || getNumber.length !== 5) {
        return console.log(`Ви ввели невалідне значення`);
    }
    for (let i = 0; i <= getNumber.length; i++) {
        if (getNumber[i] !== getNumber[getNumber.length - 1 - i]) {
            console.log(`Введене число є паліндромом!`);
            return false;
        } else {
            console.log(`Нажаль введене число не є паліндромом!`);
        }
    }
}

function sumWithOutDiscont() {
    const getSum = parseInt(prompt(`Введіть суму покупки`));
    let discount = 0;
    if (isNaN(getSum) || (getSum <= 0)) {
        return console.log(`Ви ввели невалідне значення`);
    }

    if (getSum >= 200 && getSum < 300) {
        discount = 0.03;
    } else if (getSum >= 300 && getSum < 500) {
        discount = 0.05;
    } else if (getSum >= 500) {
        discount = 0.07;
    }
    const total = +(getSum / (1 - discount)).toFixed(0);
    return console.log(`Сума до оплати зі знижкою складає ${total}, сплачена сума ${getSum}`)
}


function statisticsCount() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= 10; i++) {
        const getNum = parseInt(prompt(`Введіть ${i} е число`));
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
    let total = positiveCount + negativeCount + zeroCount + evenCount + oddCount;
    total !== 0 ? console.log('positiveCount: ', positiveCount, 'negativeCount: ', negativeCount, 'zeroCount: ', zeroCount, 'evenCount: ', evenCount, 'oddCount: ', oddCount) : console.log(`Ви не ввели жодного числа`);
}

function dayOfWeek() {
    let i = 0;
    let day = '';
    let n = 10;
    for (let j = 0; i <= n; j++) {
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
                    day = `П'ятниця`;
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
            if (!confirm(`${day}. Хочеш побачити наступний день?`)) {
                return console.log(`Ви перервали просмотр`)
            } else {
                continue;
            }
        }
    }
}

function guessNumber() {
    let min = 0;
    let max = 100;
    if (confirm(`Загадайте число від ${min} до ${max}`)) {
        for (let i = 0; i <= 100; i++) {
            let mid = Math.floor(((max - min) / 2) + min);
            let answer = prompt(`Ваше число > ${mid}, <${mid} або == ${mid}? `)
            switch (answer) {
                case ">":
                    min = mid + 1;
                    break;
                case "<":
                    max = mid - 1;
                    break;
                case "==":
                    return alert(`Ваше число дорівнює ${mid}!`);
                case null:
                    return alert(`Ви примусово завершили гру......`);
                default:
                    alert('Ви не ввели відповідь. Будь ласка, введіть >, < або ==')
                    break;
            }
            if (min === mid || max === mid) {
                return alert(`Ваше число дорівнює ${mid}!`);
            }
        }
    } else {
        return console.log(`Ви примусово завершили гру......`);
    }
}

function multiplicationTable() {
    let result;
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            result = i * j;
            console.log(`Результат множення ${i} на ${j} складає ${result}`)
        }
    }
}

function dayTomorrow() {
    let day = parseInt(prompt(`Введіть дату: день місяця`));
    if (isNaN(day) || day <= 0 || day > 31) {
        if (confirm(`Ви ввели невалідне значення, спробуєте ще раз?`)) {
            day = prompt(`Введіть дату: день місяця`)
        } else {
            return console.log(`Ви примусово перервали роботу програми....`);
        }
    }

    let month = parseInt(prompt(`Введіть дату: місяць`));
    if (isNaN(month) || month <= 0 || month > 12) {
        if (confirm(`Ви ввели невалідне значення, спробуєте ще раз?`)) {
            month = prompt(`Введіть дату: місяць`)
        } else {
            return console.log(`Ви примусово перервали роботу програми....`);
        }
    }

    let year = parseInt(prompt(`Введіть дату: рік`));
    if (isNaN(year) || year <= 1111 || year > 9999) {
        if (confirm(`Ви ввели невалідне значення, спробуєте ще раз?`)) {
            year = prompt(`Введіть дату: рік`)
        } else {
            return console.log(`Ви примусово перервали роботу програми....`);
        }
    }
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

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
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
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
    };
    if (nextMonth < 10) {
        nextMonth = "0" + nextMonth;
    };

    return alert(`Наступна за введеною датою: ${nextDay}.${nextMonth}.${nextYear}`);
}