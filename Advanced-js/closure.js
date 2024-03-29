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

// another closure example
function makeHelloFunction() {
    var message = "Hello"
    function sayHello() {
        console.log(message)
    }
    return sayHello
}
const sayHello = makeHelloFunction()
console.log('typeof message:', typeof message)
console.log(sayHello.toString())

sayHello()

// closure application
function makeFunctionArray() {
    let arr = []
    for (let i=0; i<5; i++) {
        arr.push(function() {console.log(i);})
    }
    return arr
}
const functionsArr = makeFunctionArray();
functionsArr[1]()

// Another way of creating closures is  by using a self-invoking function 
 let greeting = (function() {
    let greet = "Hello, there!";
    function greeting() {
        console.log(greet);
    }
    return greeting;
 })();
console.log(greeting());

const counter = (function(){
    let count = 0
    return {
        inc: () => count++,
        get: () => console.log(count)
    }
})()
counter.get() // 0
counter.inc() // 1
counter.get() // 1

// applying an IIFE here would be;
function makeAnotherFunctionArray() {
    let arr = []
    for (let i=0; i<5; i++) {
        arr.push(function(x) {
            return function() {console.log(x);}
            }(i)
        )
    }
    return arr
}
const anotherfunctionsArr = makeAnotherFunctionArray();
functionsArr[0]()