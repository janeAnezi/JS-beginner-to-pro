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

var isMarried = false;
if(isMarried) {
    console.log(firstName, ' is hopping to get married soon');
} else {
    console.log(firstName,' is', civilStatus);
}

/**** Boolean logic */
var age = 15;
if(age < 18) {
    console.log('you are not old enough to vote');
}else if (age >= 18 && age <= 20) {
    console.log('you can vote but you are still a teenager');
}else {
    console.log('you can vote and are an adult!');
}

/***** Tenary operator */
var herName = "Aisha";
var herAge = 20;

herAge <= 18 ? console.log(herName, 'drinks wine') : console.log(herName, 'takes coke');
var drinks = herAge > 18 ? "wine" : "Malt";
console.log(drinks);

/****** switch statement */
var job = "cook";
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log("teaches kids how to code");
        break;
    case 'farmer': 
        console.log('brings fresh vegetables');
        break;
    case 'driver': 
        console.log('takes kids to school');
        break;
    default:
        console.log('does something else');
}

var age = 25;
switch(true) {
    case age < 13:
        console.log('child');
        break;
    case age >= 13 && age <= 20: 
        console.log('you are not old enough to vote');
        break;
    default:
    console.log('you can vote and are an adult!');        
}

/****** Truthy and Falsy values and equality operators */
// In JavaScript there are several “falsy” or “falsey” values that evaluate as
// false when treated like a boolean in a conditional expression (if, while, etc.). These include
// undefined, null, 0, "", false and NaN. Everything else is considered “truth
// y”. When comparing two values using the == operator, if one of them is falsy
// the other value will be converted to a boolean first before making the comparison.

var height;
//height = 11;
//height = 0;
height = '';
if(height || height === 0) {
    console.log('this variable is defined');
}else {
    console.log('This variable is Not defined');
}

// javascript does type coersion, which means it coverts string to a number and compares the number if they are the same.

/**** coding challenge 2 ***/

totalScoreTeamJohn = 100 + 120 + 113;
totalScoreTeamMike = 100 + 120 + 113;
totalScoreTeamMarry = 100 + 120 + 113;
averageTeamJohn = totalScoreTeamJohn / 3;
averageTeamMike = totalScoreTeamMike / 3;
averageTeamMarry = totalScoreTeamMarry / 3;
// if (averageTeamJohn > averageTeamMike) {
//     console.log("Winner!!!. The team with the highest score is John's team");
//     console.log("Team John: ", averageTeamJohn, " and Team Mike: ", averageTeamMike);
// }else if (averageTeamJohn === averageTeamMike) {
//     console.log("It's a draw!!!, Both teams have the same score.");
// }else {
//     console.log("The winner is Mike's team!");
//     console.log("Team Mike: ", averageTeamMike, " and Team John: ", averageTeamJohn);
// }
switch(true) {
    case averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMarry:
        console.log("Winner!!!. The team with the highest score is John's team");
        break;
    case averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMarry:
        console.log("Winner!!!. The team with the highest score is Mike's team");
        break;
    case averageTeamMarry > averageTeamJohn && averageTeamMarry > averageTeamMike:
        console.log("Winner!!!. The team with the highest score is Marry's team");
        break;
    default:
        console.log("Its a Draw!!!!, We have no winner Yet.");
}
