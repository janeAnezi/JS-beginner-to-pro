/**** Creating Objects: Function construstors ****/
// A function constructor is a type of javascript function used to create objects

// Regular object
var john = {
    name: 'john',
    yearOfBirth:  1980,
    job: 'teacher'
}
// the function constructor then is :
let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =  job;
}

let School = function(name,  location,  numberOfStudents) {
     this.name = name;
     this.location = location;
     this.numberOfStudents = numberOfStudents;
}

// How inheritance  works in Javascript,  using prototype property

School.prototype.noOfDepartments = 11;

let  myschool= new School('ABC school','New York',50);
console.log(myschool.noOfDepartments)
console.log(myschool);
Person.prototype.calculateAge = function() {
        console.log(2024 - this.yearOfBirth);
    }

var john = new  Person('John Doe', 1976, 'Engineer');
var jane = new Person ('Jane', 1994, 'Developer');
var mark = new Person('Mark', 1993, 'Teacher');
john.calculateAge();
jane.calculateAge();
mark.calculateAge(); 

/*****  Creating Objects: Object.create ******/
let personProto = {
    calculateAge: function(){
        console.log(2024-this.yearOfBirth);
    }
}

let  johnO = Object.create(personProto);
johnO.name = 'john';
johnO.yearOfBirth = 1990;
johnO.job = 'surveyor';

// or

let janeO = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1991},
    job: {value: 'developer'}
})

/******* primitives vs objects *****/
// primitives
var a = 23;
var b = a;
a = 46;
console.log(a);  // 46
console.log(b);  // 23 each variables hold their own copy of the data. they do not reference anything

// objects
var obj1 = {
    name: 'angela',
    age: 94
};
var obj2 = obj1;

obj1.initial = 'A';
console.log(obj1.initial);
console.log(obj2.initial);// both hold a reference that points to the exact same object in the memory. and its same with functions

// functions
var age = 27;
var obj = {
    name: 'Ahnnie',
    city: "FCT"
}
 function change(a, b) {
    a = 17;
    b.city = 'LA' 
 }

 change(age, obj);
 console.log(age); // 27
 console.log(obj.city); // 'LA'
 // we do not pass an object in a function, rather  we pass a reference to it (object is passed by value)

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

/******* closures *****/
 function retirement(retirementAge) {
    return function(yearOfBirth) {
      let age = 2024 - yearOfBirth;
      console.log(retirementAge - age + ' years left before retirement'); 
    }
 }
 retirement(65)(1994);
// so to summerise how a closure works,  when we call the outer function, it returns an inner function
//   and any variables that were declared in the scope of the outer 
//      function become accessible from inside the inner function even after the outer function has been called. 
// or simply:
// An inner function always has access to the variables and parameters of its outer
//      function, even after the outer function has returned/executed 

function interviewQuestions(job) {
    return function(name) {
        if(job ===  'designer') {
            console.log('what is UX design, ' + name);
        } else if (job === 'teacher') {
            console.log('what do you teach? ' + name);
        } else {
            console.log('what do you do? ' + name)
        }
    }
}

interviewQuestions('banker')('kc');

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

