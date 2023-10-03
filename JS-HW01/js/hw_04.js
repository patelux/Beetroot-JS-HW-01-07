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
    const count = arguments.length;
    return console.log(`В функцію передано  ${count} аргуметів `);
}
function countArgumentsAlert() {return countArguments("Винни", "Пятачок", 1, 4)};


// 2 task -----------------------

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
    const num1 = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    if (!isNaN(num1) || !isNaN(num2)) {
        return console.log(`Результат порівняння ${num1} та ${num2} складає:`, checkNumbers(num1, num2));
    } else {
        return alert('Введене значення не валідне');
    }
}

// 3 task ---------------------------
function countFactorial(a) {
    let result = a;
    for (let i = (a - 1); i >= 1; i--) {
        result = +(result * i).toFixed(0);
    }
    return result;
}

function countFactorialAlert() {
    const num1 = parseInt(prompt('Введіть число'));
    if (!isNaN(num1)) {
        return console.log(`Факторіал ${num1} складає:`, countFactorial(num1));
    } else {
        return alert('Введене значення не валідне');
    }
}

// 4 task -------------------------------
function concatNumbers(a, b, c) {
    return concat = a + '' + b + '' + c;
}

function concatNumbersAlert() {
    const num1 = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    const num3 = parseInt(prompt('Введіть трете число'));
    if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
        return console.log('Result: ', concatNumbers(num1, num2, num3));
    } else {
        return alert('Введене значення не валідне');
    }
}

// 5 task-------------------------------------

function getSquare(a, b = a) {
    let result;
    console.log(a, b)
    return result = a * b;
}

function getSquareAlert() {
    const num1 = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    let type = '';
    (!isNaN(num2)) ? type = "прямкутника": type = "квадрата";
    if (!isNaN(num1) && !isNaN(num2)) {
        return console.log(`Площа ${type} складає:`, getSquare(num1, num2));
    } else if (!isNaN(num1) && isNaN(num2)) {
        // return console.log(`Площа ${type} складає:`, getSquare(num1));
        return console.log('Площа', type, 'складає:', getSquare(num1));
    } else {
        return alert('Введене значення не валідне');
    }
}

// 6 task ----------------------------------------
function purfectNumber(a) {
    let totalDeliminator = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            totalDeliminator = totalDeliminator + i;
        }
    }
    return a === totalDeliminator;
}

function purfectNumberAlert() {
    const num1 = parseInt(prompt('Введіть число'));
    if (!isNaN(num1)) {
        return console.log(purfectNumber(num1) ? 'Число є досконалим' : 'Число не є досконалим');
    } else {
        return alert('Введене значення не валідне');
    }
}

// 7 task ----------------------------------------------
function purfectNumbers(a, b) {
    let totalArray = '';
    for (let i = a; i <= b; i++) {
        if(purfectNumber(i)) {
            totalArray += ' ' + i ;
        }
    }
    return totalArray;
}
 
function purfectNumbersAlert() {
    const num1 = parseInt(prompt('Введіть перше число діапазону'));
    const num2 = parseInt(prompt('Введіть друге число діапазону'));
    if (!isNaN(num1) && !isNaN(num2)) {
        return console.log(purfectNumbers(num1, num2));
    } else {
        return alert('Введені значення не валідні');
    }
}