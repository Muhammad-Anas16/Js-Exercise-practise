// Q no 1 *********************************************************************************

var student = [];

// Q no 2 *********************************************************************************

var studentName = ["Ali", "Ahmed", "Zain"];

console.log(studentName);

// Q no 3 *********************************************************************************

var num = [1, 2, 3];

console.log(num);

// Q no 4 *********************************************************************************

var boolean = [true, false];

console.log(boolean);

// Q no 5 *********************************************************************************

var mixArr = ["Ball", 23, false];

console.log(mixArr);

// Q no 6 *********************************************************************************

var qualifications = ["ssc", "hsc", "bcs", "bs", "b-com", "ms", "ph-d"];

console.log(qualifications);

// Q no 7 *********************************************************************************

var score = [400, 380, 200];

var totalMarks = 500;

//               Ali

var aliScore = score[0];

// console.log(aliScore)

var aliPercentage = ((aliScore / totalMarks) * 100);

// console.log(aliPercentage);

console.log(studentName[0] + "'s Score is :" + aliScore + " and Persentage is :" + aliPercentage + "%");

//              Ahmed

var ahmedScore = score[1];

var ahmedPercentage = ((ahmedScore / totalMarks) * 100);

console.log(studentName[1] + "'s Score is :" + ahmedScore + " and Persentage is :" + ahmedPercentage + "%");


//              Zain

var zainScore = score[2];
var zainPercentage = ((zainScore / totalMarks) * 100);

console.log(studentName[2] + "'s Score is :" + zainScore + " and Persentage is :" + zainPercentage + "%");

// Q no 8

let colorName = ["red", "yellow", "blue", "green"];

console.log(colorName);

document.getElementById("colors").innerText = "First Array" + colorName;

// Q no 8 // // a

// var addColor = prompt(" add Color to the beginning");

// colorName.unshift(addColor);

// document.getElementById("colors").innerText = "after  add : " + " " + colorName;

// Q no 8 // // b

// var addColorAtEnd = prompt(" add Color at End");
// colorName.push(addColorAtEnd);

// document.getElementById("colors").innerText = "after add at End : " + " " + colorName;

// Q no 8 // // c adding 2 or more color

colorName.unshift("purple", "gray");

console.log(colorName);

// Q no 8 // // d :: Remove from the beginning

colorName.shift() 

console.log(colorName);

// Q no 8 // // e :: Remove from the End

colorName.pop()

console.log(colorName);

// Q no 8 // // f :: add color on any index

