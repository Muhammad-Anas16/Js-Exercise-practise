// Q no 1

function checkCharacterType() {
    // get input
    let input = document.getElementById("inputChar").value;

    // in single input
    if (input.lenght !== 1) {
        document.getElementById("text").innerText = "Enter a Single Number";
    }

    if (input >= 1 && input <= 100) {
        document.getElementById("text").innerText = "Your Input is a Number";
    }

    if (input >= "A" && input <= "Z") {
        document.getElementById("text").innerText = "Your Input is a Uppercase Letter";
    }

    if (input >= "a" && input <= "z") {
        document.getElementById("text").innerText = "Your Input is a Lowercase Letter";
    }
}

// Q no 2


// let num1 = prompt("Enter Any Number");
// let num2 = prompt("Enter Any Number");

// if(num1 > num1){
//     console.log("The Larger Integer is " + num1);
// }
// else if(num2 > num1) {
//     console.log("The Larger Integer is " + num2);
// }
// else {
//     console.log("Both Integers Are Equal");
// }


// Q no 3

// let num3 = prompt("Enter a Number");

// if(num3 >= 0){
//     console.log(num3 + " is a positive Number");
// }
// else if(num3 < 0){
//     console.log( num3 + " is a Negative Number");
// }
// else{
//     console.log("The Number is 0");
// }

// Q no 4



// let num4 = prompt("Enter a vovel word");


// if(num4 === "a" || num4 === "e" || num4 === "i" || num4 === "o" || num4 === "u" ){
//     console.log(true + " the word " + num4 + " is Vovel");
// }
// else{
//     console.log(false + " the word " + num4 + " is not Vovel");
// }

// Q no 5

// var password = "112233";

// var user = prompt("Enter your Password");

// if(user === password){
//     alert("Welcome User")
// }
// else{
//     alert("You Enter a Incorrect Password");
// }

// Q no 6

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// fixed statment
console.log("**** Q no # 6 ****")

var greeting;
var hour = 13;

if (hour <= 13) {
    greeting = "Good day";
    console.log(greeting);
}
else {
    greeting = "Good evening";
    console.log(greeting);
}

// Q no 7