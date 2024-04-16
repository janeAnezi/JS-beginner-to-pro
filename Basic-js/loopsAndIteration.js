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