// Q no # 1
console.log('**** Q no # 1 ****');

let number = 3.4572;

let round = Math.round(number);
let floor = Math.floor(number);
let ceil = Math.ceil(number);

console.log('Number Value : ', number);
console.log('Rouond of Value : ', round);
console.log('floor Value : ', floor);
console.log('Ceil Value : ', ceil);

// Q no # 2
console.log('**** Q no # 2 ****');

let negativeNumber = 3.4572;

let negativeRound = Math.round(number);
let negativeFloor = Math.floor(number);
let neagtiveCeil = Math.ceil(number);

console.log('Number Value : ', negativeNumber);
console.log('Rouond of Value : ', negativeRound);
console.log('floor Value : ', negativeFloor);
console.log('Ceil Value : ', neagtiveCeil);


// Q no # 3
console.log('**** Q no # 3 ****');

let value = -4;
let updateValue = -value;

if (value <= 0) {
    console.log(`The Value of : ${value} is : ${updateValue}`);
}
else {
    console.log(`The Value of : ${value} is : ${value}`);
}

// Q no # 4
console.log('**** Q no # 4 ****');

let numberRandom1 = Math.random()
let dice1 = Math.floor(((numberRandom1) * 6) + 1);
let numberRandom2 = Math.random()
let dice2 = Math.floor(((numberRandom2) * 6) + 1);

console.log('Dice no 1 Value : ', dice1);
console.log('Dice no 2 Value : ', dice2);

// Q no # 5
console.log('**** Q no # 5 ****');

// var userInput = prompt('Enter Head or tail', 'Head').toLowerCase();
// let spn1 = document.getElementById("pName");
// let text1 = document.getElementById("text1");
// let newRendom = ((Math.random()*2) + 1)
// let rendom = Math.floor(newRendom)


// if(userInput === 'head' && rendom === 2){
//     spn1.innerText = 'The value is : ' + userInput;
//     text1.innerText = 'Player 1 Win the Toss';
// }
// else if(userInput === 'tail' && rendom === 1){
//     spn1.innerText = 'The value is : ' + userInput;
//     text1.innerText = 'Player 2 Win the Toss';
// }
// else if(userInput === 'head' && rendom === 1){
//     spn1.innerText = 'The value is : ' + 'Tail';
//     text1.innerText = 'Player 2 Win the Toss';
// }
// else if(userInput === 'tail' && rendom === 2){
//     spn1.innerText = 'The value is : ' + 'Head';
//     text1.innerText = 'Player 1 Win the Toss';
// }
// else{
//     alert('Invalid input')
// }


// Q no # 6
console.log('**** Q no # 6 ****');

let renNum6 = Math.floor((Math.random() * 100))

console.log('The Random Number between 1 to 100 :', renNum6);

// Q no # 7
console.log('**** Q no # 7 ****');

// let weight = prompt('Enter your Weight in Kilogram');

// console.log(`the User Weight is ${parseInt(weight)} kilogram`);

// Q no # 8
console.log('**** Q no # 8 ****');

function go() {

    let getQno8 = document.getElementById('userNum').value;
    let update = Number(getQno8);
    let random = ((Math.floor(Math.random() * 10)) + 1);

    // console.log(update);
    console.log('Number For Win', random);
    if (update === 5) {
        alert('Congradulation');
    }
    else if (update !== random) {
        alert('You Lose');
    }

}