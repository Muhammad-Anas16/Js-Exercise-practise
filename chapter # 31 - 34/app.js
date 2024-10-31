// Q no # 1
console.log('**** Q no # 1 ****');

let currentDate = new Date();
console.log(currentDate)

// Q no # 2
console.log('**** Q no # 2 ****');

let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = currentDate.getMonth();

console.log('The Corrent Month :', monthArr[month]);

// Q no # 3
console.log('**** Q no # 3 ****');

let dayArr = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
let days = currentDate.getDay()

console.log('The Corrent Day :', dayArr[days]);

// Q no # 4
console.log('**** Q no # 4 ****');

// let ask = prompt('Enter 0 or 1');
// let usr = ['saturday', 'sunday'];

// if (usr[ask] == 'saturday' || usr[ask] == 'sunday') {
//     console.log(`${usr[ask]} is Fun Day`);
// }
// else if(usr[ask] == undefined){
//     console.log('Enter 0 or 1');
// }

// Q no # 5
console.log('**** Q no # 5 ****');

// let qno5 = prompt('Enter Number Under 30');

// if(qno5 < 16){
//     console.log('First fifteen days of the month');
// }
// else if(qno5 < 31 ){
//     console.log('Last fifteen days of the month');
// }

// Q no # 6
console.log('**** Q no # 6 ****');

console.log(' Q np 6 Not Done *********************');

let min

// Q no # 7
console.log('**** Q no # 7 ****');

let weather = currentDate.getHours();

console.log('Hours : ', weather);

if (weather < 12) {
    console.log(`It's AM`);
}
else if(weather > 12){
    console.log(`It's PM`);
}

// Q no # 8
console.log('**** Q no # 8 ****');

let laterDate = new Date(12, 31, 2020);

console.log(laterDate);

// Q no # 9
console.log('**** Q no # 9 ****');

let ramadan = new Date(3, 10, 2024);

let sinceRamadan = ((currentDate - ramadan));

console.log(sinceRamadan);
console.log('ASK');

// Q no # 10
console.log('**** Q no # 10 ****');

