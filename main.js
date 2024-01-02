//const content = document.getElementById('test').innerHTML = '<h1>Welcome To JavaScript Beginner to Pro</h1>'

/*************** variables and data types */
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Doe';
// var age = 26;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);
// job = 'teacher';
// console.log(job);

/******* Variable mutation and type coercion */
/*var firstName = "john";
var age = 26;*/
// Type coercion
/*console.log(firstName + ' ' + age);

var job, isMarried;
job = 'driver';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job +'.' + 'Is he married? ' + isMarried + '.' )
*/
// Variable mutation
/*age = 'twenty six';
job = 'teacher';
console.log('This should work: ', firstName + ' is a ' + age + ' year old ' + job + '.');
var lastName = prompt('what is his last name?');
alert(firstName +' '+ lastName);*/

/********* Basic operators */
// var currentYear,johnYear,markYear;
//  currentYear = 2023;
//  ageJohn = 26;
//  ageMark = 24;

 /** math operator */
//  johnYear = currentYear - ageJohn;
//  markYear = currentYear - ageMark;
// console.log("John was born in ", johnYear, " and Mark, john's friend was born in", markYear);
//  var isJohnOlder = ageJohn > ageMark;
//  console.log(isJohnOlder);

//  var isfullAge = currentYear - johnYear >= ageMark;
//  console.log(isfullAge);

//  var average = (ageJohn + ageMark) / 2
//  console.log("Their ages added together divided by two is ",average);

 // Multiple assignments
//  var x, y ,z;
//  x= (3 + 3) - (2 * 3);
//  y = 14;
//  z = y * 2 - 8;
//  console.log(x, y, z);

//  x += 10;
//  console.log(x);
//  x *= 2;
//  console.log(x);
//  x++;
//  console.log(x);
//  x--;
//  console.log(x);

/****  codding challenge 1 ******/
var markHeight, johnHeight, markBMIs,JohnBMIs, massMark, massJohn;
 massMark = 20;
 massJohn = 45
 markHeight = 15;
 johnHeight = 18;

markBMIs = massMark / (markHeight * markHeight);
JohnBMIs = massJohn / (johnHeight * johnHeight);
if (markBMIs > JohnBMIs) {
    console.log(markBMIs, JohnBMIs);
    console.log('mark\'s BMIs is higher than john\'s BMIs');
}else {
    console.log('john\'s BMIs is higher or equal to mark\'s BMIs');
    console.log(markBMIs, JohnBMIs);
}

var isMarkBMIsHigher = markBMIs > JohnBMIs;
console.log("Is Mark BMI higher than John's?, ", isMarkBMIsHigher);

/**** If/ else statement */
var firstName = "jane";
var civilStatus = "single";

if (civilStatus === 'single' ) {
    console.log(firstName,' is', civilStatus);
}else {
    console.log(firstName, ' is hopping to get married soon');
}

var isMarried = falseS;
if(isMarried) {
    console.log(firstName, ' is hopping to get married soon');
} else {
    console.log(firstName,' is', civilStatus);
}

/**** Boolean logic */
