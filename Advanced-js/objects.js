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

 const Person2 = {
    theName: "presh Amobi",
    theShirt: "blue",
 }
 console.log(Person2);
 Person2.theAge = 26;
 console.log(Person2);

//  es6 template literals, creating an object, arrow function 
const intro = (name, age) => {
    const person = {
        name: name,
        age: age,
        asset: Number(50000),
        laibility: Number(20000),
        netWorth: function() { // methods
            return Number(this.asset - this.laibility);
        }
    }

    const personIntro = (`Hello, my name is ${person.name} and I am ${person.age} years old. My net worth is $${person.netWorth()} CAD `);
    return personIntro;
}

console.log(intro('Amina', 45));
// console.log(intro('leonado', 27));