let buttons = document.getElementsByClassName('button');
let calculateLine = {
    firstSign: true,
    secondSign: true,
    firstNumb: '',
    secondNumb: '',
    sign: '',
    result: '',
    equality: false,
    empty: true,
    clear() {
        this.firstSign = true;
        this.secondSign = true;
        this.firstNumb = '';
        this.secondNumb = '';
        this.sign = '';
        this.result = '';
        this.empty = true;
        this.equality = false;
    }
};
// Вычисление результата
let getResult = (str1, str2, sign) => {
    switch (sign) {
        case '+': { return (parseFloat(str1) + parseFloat(str2)).toString() }
    }
}

// Функция к-я на основе имени класса меняет объект Строки расчета
let pasteCalculLine = (clickButton) => {
    if (((calculateLine.firstNumb.length === 12) || (calculateLine.secondNumb.length === 12)) & (clickButton != 'clear')) return;
    let status = document.getElementById('status');
    if ((calculateLine.empty === true) & (calculateLine.sign === '')) status.textContent = '';
    calculateLine.empty = false;
    switch (clickButton) {
        case 'clear': { calculateLine.clear(); status.textContent = ''; break }
        case 'one': {
            status.textContent += '1';
            if (calculateLine.sign === '') calculateLine.firstNumb += '1';
            else calculateLine.secondNumb += '1'; break
        }
        case 'two': {
            status.textContent += '2';
            if (calculateLine.sign === '') calculateLine.firstNumb += '2';
            else calculateLine.secondNumb += '2'; break
        }
        case 'three': {
            status.textContent += '3';
            if (calculateLine.sign === '') calculateLine.firstNumb += '3';
            else calculateLine.secondNumb += '3'; break
        }
        case 'four': {
            status.textContent += '4';
            if (calculateLine.sign === '') calculateLine.firstNumb += '4';
            else calculateLine.secondNumb += '4'; break
        }
        case 'five': {
            status.textContent += '5';
            if (calculateLine.sign === '') calculateLine.firstNumb += '5';
            else calculateLine.secondNumb += '5'; break
        }
        case 'six': {
            status.textContent += '6';
            if (calculateLine.sign === '') calculateLine.firstNumb += '6';
            else calculateLine.secondNumb += '6'; break
        }
        case 'seven': {
            status.textContent += '7';
            if (calculateLine.sign === '') calculateLine.firstNumb += '7';
            else calculateLine.secondNumb += '7'; break
        }
        case 'eight': {
            calculateLine.firstNumb += '8';
            if (calculateLine.sign === '') calculateLine.firstNumb += '8';
            else calculateLine.secondNumb += '8'; break
        }
        case 'nine': {
            status.textContent += '9';
            if (calculateLine.sign === '') calculateLine.firstNumb += '9';
            else calculateLine.secondNumb += '9'; break
        }
        case 'zero': {
            status.textContent += '0';
            if ((calculateLine.sign === '') & (calculateLine.firstNumb != '')) { calculateLine.firstNumb += '0'; }
            else if (calculateLine.secondNumb != '') calculateLine.secondNumb += '0';
            break;
        }
        case 'double-zero': {
            status.textContent += '00';
            if ((calculateLine.sign === '') & (calculateLine.firstNumb != '')) { calculateLine.firstNumb += '00'; }
            else if (calculateLine.secondNumb != '') calculateLine.secondNumb += '00';
            break;
        }
        case 'plus':
            {
                if (calculateLine.sign === '') {
                    status.textContent += '+';
                    calculateLine.sign = '+';
                    calculateLine.empty = true;
                }
                break;
            }
        case 'equally':
            {
                if ((calculateLine.sign != '') & (calculateLine.firstNumb != '') & (calculateLine.secondNumb != '') & (calculateLine.equality === false)) {
                    calculateLine.equality = true;
                    calculateLine.empty = true;
                    calculateLine.result = getResult(calculateLine.firstNumb, calculateLine.secondNumb, calculateLine.sign)
                    status.textContent += '=';
                    status.textContent += calculateLine.result;
                }
                break;
            }

        default: break;
    }
};
// Отрисовка по строке чисел
let renderCalculLine = (lineOfNumber) => {
    let numerals = Array.from(document.getElementsByClassName('numeral'));

    if (lineOfNumber.empty) {
        for (let num of numerals) {
            if (num.classList.contains('backTrue')) {
                num.lastElementChild.firstElementChild.textContent = '';
                num.lastElementChild.style.transform = 'rotateY(360deg)';
                num.firstElementChild.style.transform = 'rotateY(180deg)';
                num.classList.remove('backTrue');
            }
            else {
                num.firstElementChild.firstElementChild.textContent = '';
                num.lastElementChild.style.transform = 'rotateY(180deg)';
                num.firstElementChild.style.transform = 'rotateY(360deg)';
                num.classList.add('backTrue');
            }
        }
        if (lineOfNumber.equality===false )return;
    }
    let dataStr = '';
    if (lineOfNumber.sign === '') dataStr = lineOfNumber.firstNumb;
    else if ((lineOfNumber.sign != '')&(lineOfNumber.equality===false)) dataStr = lineOfNumber.secondNumb;
    else if (lineOfNumber.equality===true) dataStr = lineOfNumber.result;
    for (let i = 0; i < dataStr.length; i++) {
        if (numerals[i].classList.contains('backTrue')) {
            numerals[i].lastElementChild.firstElementChild.textContent = dataStr[dataStr.length - i - 1];
            numerals[i].lastElementChild.style.transform = 'rotateY(360deg)';
            numerals[i].firstElementChild.style.transform = 'rotateY(180deg)';
            numerals[i].classList.remove('backTrue');
        }
        else {
            numerals[i].firstElementChild.firstElementChild.textContent = dataStr[dataStr.length - i - 1];
            numerals[i].lastElementChild.style.transform = 'rotateY(180deg)';
            numerals[i].firstElementChild.style.transform = 'rotateY(360deg)';
            numerals[i].classList.add('backTrue');
        }
    }
}
// Основная программа
for (let i of buttons) {
    i.onclick = function (event) {
        pasteCalculLine(i.classList[0]);
        renderCalculLine(calculateLine);
        event.preventDefault();
        if ((this.classList.contains('plus')) || (this.classList.contains('clear'))) this.classList.add('rotateY');
        this.classList.add('rotateX');
        setTimeout(() => {
            if ((this.classList.contains('plus')) || (this.classList.contains('clear'))) this.classList.remove('rotateY');
            this.classList.remove('rotateX');
        }, 300);
    }
}