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
// #for of (loop)
const square = (numbers) => {
    let newSquNum = [];
    for (let num of numbers) {
        newSquNum.push(num ** 2);
    }
    return newSquNum;
}

console.log(square([3,6,2,4]));

// to display nomber of letters....
// #for in (loop)
console.log('the number of the letters below....');
const howManyLetters = () => {
    let phrase = 'Let go play';
    for (let letter in phrase) {
        console.log(Number(letter)+ 1);
    }
}

howManyLetters();

// the howManyLetters function is better written as....

let numOfLetters = (letters) => {
    let totalNum = 0;
    for(let letter in letters) {
        totalNum = Number(letter) + 1;
    }
    return {totalNum};
}
 let phrase = 'call me';
 console.log(numOfLetters(phrase));
 console.log(phrase.length); // also writen ass

 // summ all the numbers
let arr = [1,2,3,4,5,6,7,8,9,10];
 let sumArr = () => {
   
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return { sum };
 }

 console.log(sumArr());

 let sumNum = (num) => {
    let total = 0;
    for (let val of num) {
        total += val;
    }
    return { total };
 }
  let values = [1,2,3,4,5];
  console.log(sumNum(values));

  // find the max number

  let maxNum = (numbers) => {
    let max = numbers[0];
    for(let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return { max };
  }

  console.log(maxNum(arr));

  let maxVal = (vals) => {
    let highVal = vals[0];
    for (let val of vals) {
        if (val > highVal) {
            highVal = val;
        }
    }
    return { highVal };
  }
 let vals = [23, 45,78,10, 9, 190, 443,27,15]
  console.log(maxVal(vals));

  // finding number of occurance (frequency)

const letterFreq = (phrase) => {
    console.log(phrase);
    let frequency = {};
    for (let letter of phrase) {
        if (letter in frequency) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    } 
    return frequency;
}

console.log(letterFreq('armmy!!!!'));

// word frequency
const wordFreq = (sentence) => {
    let frequency = {};
    let arrSentence = sentence.split(' '); // saperates the sentence by empty spaces into array of words
    for (let word of arrSentence) {
        // console.log(word);
        if (word in frequency) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    return frequency;
}

console.log(wordFreq('oh my oh my i get it now'));