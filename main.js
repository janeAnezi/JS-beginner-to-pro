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
// changing one type to a different type

// Explicit vs Implicit coercion
const x = 42;
const explicit = String(x);  // explicit === '42'
const implicit = x + '';    // implicit === '42'

// == vs === , == coerces types, while === requires the exact type. 

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

/****** Functions ****/
function calculateAge(yearOfBirth) {
    return 2024 - yearOfBirth;
}

var ahnnieAge = calculateAge(1998);
var sammyAge = calculateAge(1999);
console.log(ahnnieAge, sammyAge);

// function decleration
function yearsUntillRetirement(name, year) {
    var age = calculateAge(year);
    var retirementYear = 65 - age;
    if(retirementYear > 0) {
        console.log(name + ' will turn ' + age + ', so he has ' + retirementYear, ' more years to retire.');
    } else {
        console.log(name, ' is already retired.');
    }
}
yearsUntillRetirement("sameer", 1992);
yearsUntillRetirement("ebune", 1940);
yearsUntillRetirement("alpha", 1995);

/***** function expressions */
var whatDoYouDo = function(firstName, job) {
    switch (job) {
        case 'teacher':
            return firstName,' teaches kids how to code';
        case 'driver':
            return firstName,' drives a cab in awka';
        case 'designer':
            return firstName,' designs beautiful websites';
        default:
            return firstName, ' does something else';
    }
}

console.log(whatDoYouDo('john', 'driver'));
console.log(whatDoYouDo('mark', 'teacher'));
console.log(whatDoYouDo('mary', 'cook'));

// about function statement/decleration and function expression
//function statement or decleration does not produce immediate result while 
//function expression produces immediate result because it gets executed immediately

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

/**** coding challenge 3 ****/
var bills = [124, 48, 268]

function tipCalculator(bill) {
    if (bill < 50) {
        return bill * .2;
    }else if (bill >= 50 && bill <= 200) {
        return bill * .15;
    }else {
        return bill * .1;
    } 
}
// or it could be written as

function tipCal(bill) {
    let percentage;
    if(bill < 50) {
        percentage = .2;
    } else if(bill >= 50 && bill <= 200) {
        percentage = .15;
    }else {
        percentage = .1;
    }
    return bill * percentage;
}
console.log(`The amount of tip given  is ${tipCal(20)}`);
let tipArr = [];
tipArr.push(tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2]))
console.log(tipArr);
tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
totalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log('Tip Array: ', tips ,' & Final paid amount: ', totalBills);


/****Objects and properties ***/
var julet = {
    firstName: 'julet',
    lastName: 'okonkwo',
    age: 32,
    hobbies: ['reading', 'hiking', 'cooking', 'seeing movies'],
    isMarried: false
}
fun = 'hobbies',
console.log( julet['lastName'], julet.age, julet[fun]);

console.log(julet.lastName= 'okeke');
console.log(fun = 'age');
console.log(julet.isMarried);

const arrTest = [
    'jane',
    11,
    function() {console.log('hi');}
]

// to execute the function in the arrTest array
arrTest[2] ()

for (let i = 0; i < arrTest.length; i++) {
    console.log(`Value at ${i}: ${arrTest[i]}`)
}

// primitives vs Objects, primitives are immutable(unchanging or unable to be changed)
// objects are mutable and stored by reference

// creating objects
const ob = new Object(); // new object synthax
ob.firstName = "John";
ob.lastName = "Doe";
ob.age = 25;
ob.isLearning = true;
ob.greeting = function() {console.log('hi');}

//another way of creating object by object literal
const oblit = {}
oblit.name = "Jane"
oblit.age = 30
oblit['city'] = "New York"
const key = 'town'
oblit[key] = "Los Angeles" 

// another way of declaring objects is writing the objects inline.
const objs = {
    name: "Jack",
    age: 40,
    town: "Chicago",
    greeting: function(){console.log("Hello")},
    hasCar : false,
    hobbies : ["Reading","Writing"],
    address : {
        street:"123 Main St.",
        city : "San Francisco",
    }
}
console.log(ob, oblit, objs);

// object mutation
ob.age = 35;
console.log(ob);

const o1 = {
    a: 'a',
    b: 'b',
    d: {
        key: 'key',
    }
}
const o2 = Object.assign({}, o1) //creates new object with same
// properties as o1 but not linked to it

//const o2 = o1; // but this is linked together
o1.d.key = 'enter';
o2.c='c'; 
o1.a= 'new value'

console.log(o2);

// objects and methods

var nonye = {
    firstName: 'nonye',
    lastName: 'eminent',
    birthYear: 1999,
    family: ['dimma', 'ada', 'ebuka'],
    job: 'engineer',
    isMarried: true,
    calAge: function() {
        let currentYear = 2024;
        this.age = currentYear - this.birthYear;
    }
}

//nonye.age = nonye.calAge(); 
nonye.calAge()
console.log(nonye);
nonye.family.push('amara');
console.log(nonye.family);

// coding challenge 4

let markBmi = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        let heightSqr = this.height * this.height;
        this.bmi = this.mass / heightSqr;
        return this.bmi;
    }
};
let johnBmi = {
    fullName: 'John Doe',
    mass: 110, 
    height: 1.95,
    calcBMI: function() {
        let heightSqr = this.height * this.height;
        this.bmi = this.mass / heightSqr;
        return this.bmi;
    }
};

//console.log(markBmi.calcBMI()); this returns the bmi of mark
//johnBmi.calcBMI();
console.log(markBmi);
console.log(johnBmi);
if(johnBmi.calcBMI() > markBmi.calcBMI()) {
    console.log(`${johnBmi.fullName} has the highest BMI by, ${johnBmi.bmi}`);
}else if(markBmi.bmi > johnBmi.bmi) {
    console.log(`${markBmi.fullName} has the highest BMI by ${markBmi.bmi}`);
}else {
    console.log('We have equal BMIs');
}

/**** Loops and Iteration ****/ 
//for loop

for(let i=0; i<=10; i++){ //to get values from 0 to 10
    console.log(i); // to log the values of 0 to 10
}

var weekDays = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
for( let i=0; i< weekDays.length; i++) {
    console.log(`position ${i} is ${weekDays[i]}`);
}
