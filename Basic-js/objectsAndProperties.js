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

let person = {
    hisName:"leonardo",
    shirt: "white",
    hisAge: "27"
}
console.log(person.hisName); // dot notation
console.log(person.shirt);

console.log(person['hisAge']); // bracket notation

person.phone = '070-654-345-98';
console.log(person.phone);
console.log(person);

let person2 = {
    hisName: "Quazi",
    hisShirt: "black",
    single: false,
    inLove: true
}
console.log(person2['hisName']);
console.log(person2.hisShirt);
console.log(person2.inLove);
console.log(person2.single);
