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
