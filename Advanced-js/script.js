
/******** first class functions: passing functions as an argument ******/

let years = [1994, 2010, 1995, 1998, 1999];
 function yearCalc(arr, func) {
    let ageArr = [];
    for(let i=0; i<arr.length; i++) {
        ageArr.push(func(arr[i]));
    }
    return ageArr;
 }
 function calculateAge(year) {
    return(2024 - year);
 }

 function isFullAge(age) {
    return age >= 18;
 }

 // to calculate person heart rate base on the person's age
 function maxHeartRate(age) {
    if(age >= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
 }

 let ages = yearCalc(years, calculateAge);
 let fullAges = yearCalc(ages, isFullAge);
 let heartRates = yearCalc(ages, maxHeartRate);
 console.log(ages);
 console.log(fullAges);
 console.log(heartRates);

// first class functions: returning functions
// functions are always first class functions in javascript because they are effectively objects

function interviewQuestions(job) {
    if(job ===  'designer') {
        return function(name) {
            console.log('what is UX design, ' + name);
        };              
    }else if (job === 'teacher') {
        return function(name) {
            console.log('what do you teach? ' + name);
        }
    }else {
        return function(name) {
            console.log('what do you do? ' + name)
        }
    }
}

let teacherQuestion = interviewQuestions('teacher');
let designerQuestion = interviewQuestions('designer');
teacherQuestion('john');
designerQuestion('james');
// it can also be written as 
interviewQuestions('teacher')('Anezi');

function ageGradder(age) {
    if( age < 5) {
        return function(name) {
            console.log(name + " is a young one!");
        }
    } else if(age >=  5 && age <=13 ) {
        return function(name){
           console.log(name + " is a child");
        }
    } else {
        return function(name) {
            console.log('How old are you, ' + name);
        }
    }
}

ageGradder(2)('mercy');

// immediately invoked function expression (IIFE)

(function() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();
// the function is wrapped in parenthesis to trick the parser to think it is a function expression instead of function decleration/statement.
//    creating data privacy



/******* Bind, Call and Apply ******/
let jerry = {
    name: 'Jerry',
    age: 28,
    job: 'Designer',
    presentation: function(style, timeOfDay) {
        if(style ===  'formal') {
            console.log(`Good ${timeOfDay} ladies and gentlemen, My name is ${this.name}, I am a ${this.age} years old ${this.job}`);
        }else if (style === 'casual'){
            console.log(`Good ${timeOfDay} everyone, I am ${this.name} and  I'm a ${this.job}`);
        } else {
            console.log(`Hello everyone`);
        }
    }
}
jerry.presentation('formal','morning'); // Good morning ladies and gentlemen,  I am Jerry and I’m a Designer
let emilly = {
    name: 'Emily',
    age: 29,
    job: 'singer'
}
// Call
jerry.presentation.call(emilly, 'casual', 'afternoon'); // this is what is called  a call method or method borrowing

// Apply
jerry.presentation.apply(emilly,['casual','evening']); // the apply method recieves the argument as an array, and this only works when the argument is an array
// so the apply  method takes an object as its first argument which becomes the this keyword inside of the function and the arguments in array format.
// the function in line 237 will not work bcs the arguments in the function originally is not an array

// Bind: it doesnt immediately call the function, but instead it generates a copy of the function, which will enable setting predefined arguments
//just like Currying, is a technique in which we create a function based on another function but with some preset parameters or a function that returns another function with some of the original functions parameters pre-filled.
let jerryFriendly = jerry.presentation.bind(jerry, 'casual');
jerryFriendly('morning');
jerryFriendly('afternoon');

let emillyFriendly = jerry.presentation.bind(emilly, 'formal');
emillyFriendly('morning');
emillyFriendly('afternoon');

let yearS = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, func) {
    let arrResult = [];
    for(let i=0; i< arr.length; i++) {
        arrResult.push(func(arr[i]));
    }
    return arrResult;
}
function calculateAge(year){
    return 2024 - year;
}
function isFullAge(limit, age) {
    return  age >= limit;
}

let agesArr = arrayCalc(yearS, calculateAge);
console.log(agesArr);

let fullAgeJapan = arrayCalc(agesArr, isFullAge.bind(this, 20));
let fullAgeNiger = arrayCalc(agesArr, isFullAge.bind(this, 30));
console.log(fullAgeJapan);
console.log(fullAgeNiger);

/********* Coding challenge *****/
