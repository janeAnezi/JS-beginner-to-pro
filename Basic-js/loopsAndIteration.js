/**** Loops and Iteration ****/ 

//for loop
for(let i=0; i<=10; i++){ //to get values from 0 to 10
    console.log(i); // to log the values of 0 to 10
}

var weekDays = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
for( let i=0; i< weekDays.length; i++) {
    console.log(`position ${i} is ${weekDays[i]}`);
}

// while loop
var i = 0;
while(i < weekDays.length) {
    console.log(weekDays[i]);
    i++
}

// continue and break ststement
let sara = ['Tall', 23, 'Smart', 'Dark', true]
for(let i = 0; i< sara.length; i++) {
    if(typeof sara[i] !== 'string') continue; // meaning, if there is a value in the sara array that is not a string, it should be skipped or ignored.
    console.log(sara[i]);
}

for(let i = 0; i< sara.length; i++) {
    if(typeof sara[i] !== 'string') break; // meaning, when it encounters a value that it not a string, it breaks out of the loop and stops running.
    console.log(sara[i]);
}

// to loop backwards
for(let i = weekDays.length-1; i >= 0; i--) {
    console.log(weekDays[i]);
}

// forEach loop
const x = [0,1,2,3,]
x.forEach(num => {
    console.log(num + 1)
});

let array = [1, 2, 3, 4, 5];

array.forEach(function(element, index, array) {
  console.log(`Element ${element} at index ${index}`);
});

// Output:
// Element 1 at index 0
// Element 2 at index 1
// Element 3 at index 2
// Element 4 at index 3
// Element 5 at index 4

// looping over array of objects
let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  people.forEach(function(person, index) {
    console.log(`Person ${index + 1}: ${person.name} is ${person.age} years old`);
  });
  
  // Output:
  // Person 1: John is 30 years old
  // Person 2: Alice is 25 years old
  // Person 3: Bob is 35 years old

  // for loops
  const fruits = ['orange', 'lemon', 'grape', 'mango', 'pear'];
  for( let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
  } // best written ass .....
  console.log('better way to write for loop of the above is......');
  for (let fruit of fruits) {
    console.log(fruit);
  }

  const numbers = [1,2,3,4, 5, 6];
  let newNum = [];
  for (let number of numbers) {
    //console.log(number);
    //console.log(number+= 1);
    newNum.push( number*2); // to obtain a new array of numbers
  }
 console.log(newNum);

 // writing a function for the above
const double = (numbers) => {
    let newNumbers = [];
    for (let number of numbers) {
        newNumbers.push(number * 2);
    }
    return newNumbers;
};

console.log(double([1,2,3,4,5]));

// to display the square of the numbers in the array
const square = (numbers) => {
    let newSquNum = [];
    for (let num of numbers) {
        newSquNum.push(num ** 2);
    }
    return newSquNum;
}

console.log(square([3,6,2,4]));