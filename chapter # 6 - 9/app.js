// Q no 1
console.log("****** Q no : 1 ******")

// let a = 10;

// console.log("The value of a is : " + a);

// a = ++a;

// console.log("The value of ++a is : " + a);

// a = a ++;

// console.log("The value of a++ is : " + a);

// a = --a ;

// console.log("The value of --a is : " + a);

// //  Q no 2

// var c = 2, b = 1; 
// var result = --c - --b + ++b + b--;

// console.log(result);

// Q no 2
console.log("****** Q no : 2 ******")

// var userName = prompt("Enter Your Name");

// var value = userName;

// if(value === userName){
//     document.write("hello :" + userName);
// }

// Q no 3
console.log("****** Q no : 3 ******")

// var num = prompt("Enter a Number");

// console.log("The value of {var num} :" + num);

// var multi = num * 5;

// console.log("The Value of {var mullti} by multiply by 5 : " + multi);

// Q no 4
console.log("****** Q no : 4 ******")

// ********************** Subject Name ********************** 

var Subject1 = prompt("Enter Subject Name", "Computer");
console.log("Console of subject-1 : ",Subject1);
document.getElementById("subject-1").innerText = Subject1;

var Subject2 = prompt("Enter Subject Name", "Mathametics");
console.log("Console of subject-2 : ",Subject1);
document.getElementById("subject-2").innerText = Subject2;

var Subject3 = prompt("Enter Subject Name", "Geography");
console.log("Console of subject-3 : ",Subject1);
document.getElementById("subject-3").innerText = Subject3;

// ********************** Marks Obtained *********************

var markObtain1 = + prompt("Enter Obtained Marks");
document.getElementById("marks-obt-1").innerText = markObtain1;

var markObtain2 = + prompt("Enter Obtained Marks");
document.getElementById("marks-obt-2").innerText = markObtain2;

var markObtain3 = + prompt("Enter Obtained Marks");
document.getElementById("marks-obt-3").innerText = markObtain3;


// ********************** Total Marks ********************** 

var total = markObtain1 + markObtain2 + markObtain3;
console.log(total)
document.getElementById("total-marks").innerText = total;

// ********************** Percentage ***********************

var countPercentage = total / 300 *100;
console.log(countPercentage);
document.getElementById("percentage").innerText = countPercentage;