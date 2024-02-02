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

let years = [1994, 1997, 1995, 1998, 1999];
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

 let ages = yearCalc(years, calculateAge);
 console.log(ages);