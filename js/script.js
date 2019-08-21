let buttons = document.getElementsByClassName('button');
let calculateLine = {
    firstSign: true,
    secondSign: true,
    firstNumb: '',
    secondNumb: '',
    sign: '',
    result: '',
    empty: true,
    clear(){
        this.firstSign = true;
        this.secondSign = true;
        this.firstNumb = '';
        this.secondNumb = '';
        this.sign = '';
        this.result = '';
        this.empty = true;
    }
};
// Функция к-я на основе имени класса меняет объект Строки расчета
let pasteCalculLine = (clickButton) => {
    calculateLine.empty = false;
    switch (clickButton) {
        case 'clear': { calculateLine.clear(); break }
        case 'one': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '1';
            else calculateLine.secondtNumb += '1'; break
        }
        case 'two': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '2';
            else calculateLine.secondtNumb += '2'; break
        }
        case 'three': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '3';
            else calculateLine.secondtNumb += '3'; break
        }
        case 'four': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '4';
            else calculateLine.secondtNumb += '4'; break
        }
        case 'five': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '5';
            else calculateLine.secondtNumb += '5'; break
        }
        case 'six': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '6';
            else calculateLine.secondtNumb += '6'; break
        }
        case 'seven': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '7';
            else calculateLine.secondtNumb += '7'; break
        }
        case 'eight': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '8';
            else calculateLine.secondtNumb += '8'; break
        }
        case 'nine': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '9';
            else calculateLine.secondtNumb += '9'; break
        }
        case 'zero': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '0';
            else calculateLine.secondtNumb += '0'; break
        }
        case 'double-zero': {
            if (calculateLine.sign === '') calculateLine.firstNumb += '00';
            else calculateLine.secondtNumb += '00'; break
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
        return;
    }
    let dataStr = '';
    if (lineOfNumber.sign === '') dataStr = lineOfNumber.firstNumb;
    else dataStr = lineOfNumber.secondNumb;
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
let count = true;
let k = 1;
for (let i of buttons) {
    i.onclick = function (event) {
        pasteCalculLine(i.classList[0]);
        renderCalculLine(calculateLine);

        // setTimeout(() => {
        //     numerals[0].lastElementChild.classList.remove('backface-full');
        // }, 300);
        event.preventDefault();
        if ((this.classList.contains('plus')) || (this.classList.contains('clear'))) this.classList.add('rotateY');
        this.classList.add('rotateX');
        setTimeout(() => {
            if ((this.classList.contains('plus')) || (this.classList.contains('clear'))) this.classList.remove('rotateY');
            this.classList.remove('rotateX');
        }, 300);
    }
}