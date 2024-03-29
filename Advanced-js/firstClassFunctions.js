// This means,Functions are treated the same way as any other value
// in JavaScript. They can be assigned to variables, array values, object values
// and even passed as arguments to other functions.
// and can be returned from a function

// Allows the creation of higher-order functions
// Either takes  one or more functions as an argument  and returns a new function,
// map(), filter(), reduce()

// Map() : It will iterate over each element of given
let x = [1, 2, 3, 4, 5]
function addOne(num) {return num + 1}
x.map(addOne)

// Filter()  : It filters all elements that pass the test implemented by the provided filtering function.
function isGreaterThanTwo(num) {return num  > 2}
x.filter(isGreaterThanTwo)

// Reduce() : what it does is it takes two arguments and return the acumulated value
// after iterating through the list of values.
function add(x, y) {return x + y}
x.reduce(add)