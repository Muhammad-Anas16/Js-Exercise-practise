// Q no 01
console.log('**** Q no # 01 ****');

function time() {
    let currebtDate = new Date();
    console.log(currebtDate);
}
time();

// Q no 02
console.log('**** Q no # 02 ****');

function fullName() {
    let first = prompt('Enter Your First Name', 'Muhammad');
    let last = prompt('Enter Your Last Name', 'Anus');
    let theName = first + ' ' + last;
    console.log(theName);
}
// fullName();

// Q no 03
console.log('**** Q no # 03 ****');

let sum1 = 14;
let sum2 = 16;
function sum() {

    let sumNum = sum1 + sum2;

    console.log(sumNum);

}
sum();

// Q no 04
console.log('**** Q no # 04 ****');

let calculator = document.getElementById('screen');

function getValue(value) {
    if (value === '=') {
        let res = eval(calculator.innerText);
        calculator.innerText = res;
    } else if (value === ' ') {
        calculator.innerText = ' ';
    } else if (value === 'back') {
        calculator.innerText = calculator.innerText.slice(0, calculator.innerText.length - 1);
    }
    else {
        calculator.innerText += value;
    }
}

// Q no 05
console.log('**** Q no # 05 ****');

