/**** Creating Objects: Function construstors ****/
// A function constructor is a type of javascript function used to create objects

var john = {
    name: 'john',
    yearOfBirth:  1980,
    job: 'teacher'
}
// the function constructor then is :
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =  job
}