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
var currentYear,johnYear,markYear;
 currentYear = 2023;
 ageJohn = 26;
 ageMark = 24;

 /** math operator */
 johnYear = currentYear - ageJohn;
 markYear = currentYear - ageMark;
console.log("John was born in ", johnYear, " and Mark, john's friend was born in", markYear);
 var isJohnOlder = ageJohn > ageMark;
 console.log(isJohnOlder);

 var isfullAge = currentYear - johnYear >= ageMark;
 console.log(isfullAge);