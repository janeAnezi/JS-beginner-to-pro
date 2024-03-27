/****** Arrays *******/

//initialize new array
var arr = [1, 3, 7];
var names = ['Amina', 'Sara', 'mufasa'];
var weekDays = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat'];

console.log(names, names[2]);
console.log(weekDays, weekDays.length);

// mutate array data
arr[1] = 8;
names[5] = 'cindy';
weekDays[weekDays.length] = 'noDay';
console.log(weekDays);
console.log(names);
console.log(arr);

// Different data types
var jane = ['jane', 'Doe', '1999', true, 'happy', 'Developer'];

// array methods/functions
jane.push('white'); // adds to the end of the array
jane.unshift('Miss'); //adds at beginning of array;
console.log(jane); 
jane.pop(); // removes from the end of array;
console.log(jane);
jane.shift(); // removes from the begining of array;
console.log(jane);

console.log(jane.indexOf(true));
var janeMood = jane.indexOf('happy') === -1 ? 'she is a jolly little fellow' : 'she just dey';
console.log(janeMood);
