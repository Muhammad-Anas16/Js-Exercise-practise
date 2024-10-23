// Q no 1

console.log("***** Q no 1 *****");

// var firstName = prompt("Enter your first name", "Mohammad");
// var lastName = prompt("Enter your last name", "Anas");

// var fullName = firstName + " " + lastName;

// console.log(fullName);

// Q no 2

console.log("***** Q no 2 *****");

// var user = prompt("Enter your favorite mobile phone model", "tecno");

// console.log("My favorite mobile is :" + user + " : and it's lenght of string is :" + user.length);;

// Q no 3

console.log("***** Q no 3 *****");

var h1Span = document.getElementById("h1-span");
var str = "Pakistan"
h1Span.innerText = str;

var strIndex = document.getElementById("h3-span");

strIndex.innerText = " " + str.indexOf("n");

// Q no 4

console.log("***** Q no 4 *****");

var getLast = document.getElementById("h1-span.2");
var word = "Hello World";
getLast.innerText = word;

var wordLast = document.getElementById("h3-span.2");

wordLast.innerText = word.lastIndexOf("l");

// Q no 5

console.log("***** Q no 5 *****");

var getThrd = document.getElementById("h3-span3");
var theWord = "Pakistani";
var count = [];

for (var i = 0; i < theWord.length; i++) {
    count++
    if (count === 2) {
        var result = theWord.indexOf("i");
    }
}

getThrd.innerText = result;

console.log(result);

// Q no 6

console.log("***** Q no 6 *****");

let name = 'mark';
let age = 20;

console.log(name.concat(age), "Just concradinate");

// Q no 7

console.log("***** Q no 7 *****");

var rpsCity = document.getElementById("rps-city");
var cityName = 'Hyderabad'
var newCity = cityName.replace('Hyder', 'Islam')

rpsCity.innerText = newCity;

console.log(newCity);

// Q no 8

console.log("***** Q no 8 *****");

var message = document.getElementById("Qno-8-span");
var text = 'Ali and Sami are best friends. They play cricket and football together.';
var newText = text.replace(/and/g, '&')

message.innerText = newText;

// Q no 9

console.log("***** Q no 9 *****");

let str1 = "472";

console.log(str1);
console.log(typeof (str1));

let conNum = Number(str1);

console.log(conNum);
console.log(typeof (conNum));

// Q no 10

console.log("***** Q no 10 *****");

// let userInput1 = prompt("Input any Name");
// let userInput1value = document.getElementById("user-input");
// userInput1value.innerText = userInput1.toLowerCase();

// let theValue = userInput1;
// let userInput2 = document.getElementById("converted-user-input");
// userInput2.innerText = theValue.toUpperCase();

// Q no 11

console.log("***** Q no 11 *****");

// let input01 = prompt("Type any input");
// let first = input01.slice(0, 1).toUpperCase();
// let second = input01.slice(1).toLowerCase();
// let fullInput = first + second;

// console.log("User Input : ", input01);
// console.log("Title Case : ", fullInput);

// Q no 12

console.log("***** Q no 12 *****");

let num = 35.36;
let numTostr = String(num);

console.log(num);
console.log(typeof (num));
console.log(numTostr);
console.log(typeof (numTostr));

// Q no 13

console.log("***** Q no 13 *****");



// Q no 14

console.log("***** Q no 14 *****");

// let A = ['cake', 'apple', 'cookie', 'chips', 'patties'];

// let inputA = prompt('Enter any product from :', 'cake, apple, cookie, chips, patties');

// for (var i = 0; i < A.length; i++) {

//     if (A[i] === inputA) {
//         alert(inputA, "is Available");
//     }
//     else {
//         alert('Invalid Input');
//     }

//     break
// }

// console.log(A);

// Q no 15

console.log("***** Q no 15 *****");



// Q no 16

console.log("***** Q no 16 *****");

var university = "University of Karachi";
console.log(university);

var updateUnivercity = university.split()

console.log(updateUnivercity);

// Q no 17

console.log("***** Q no 17 *****");

let Qno17 = 'pakistan';

console.log('User Input : ', Qno17);

console.log('LAst Charactor of User Input is : ', Qno17.lastIndexOf('n'))

// Q no 18

console.log("***** Q no 18 *****");

let Qno18 = 'The quick brown fox jumps over the lazy dog';

console.log(Qno18);

let updateNo18 = Qno18.toLowerCase();



// for(var i = 0; i < updateNo18.length; i += i+3){
//     console.log(updateNo18[i]);
// }



console.log('Q no # 13 & Q no # 15 Left *************');