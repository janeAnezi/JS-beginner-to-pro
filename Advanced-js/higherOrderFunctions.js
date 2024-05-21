function numbers(arr, fn) {
    const newArr = []
    arr.forEach(function(val) {
        newArr.push(fn(val))
    })
    return newArr
}
function addOne(num) {return num + 1}
const x = [0,1,2,3,]
console.log(numbers(x,addOne)); // [1, 2, 3, 4]

// Array Methods
// - map() loops and returns an array
// - filter() loop and returns an array with matching conditions
// - reduce() sums all numbers in an array

let number = [1,2,3,4, 7, 8 ];
// number.map(number => console.log(number * 2))

let doubleMap = (arrNum) => {
    return arrNum.map(number => (number * 2));
};
 console.log(doubleMap([1,2,3]));

// console.log(number.filter(number => number > 3))
let filter = (arrNum, greaterthan) => {
    return arrNum.filter(number => number > greaterthan);
}
console.log(filter(number, 3));

const actors = [
    {name: 'johnny', netWorth: 2000},
    {name: 'amber', netWorth: 1000},
    {name: 'Ahnnie', netWorth: 2000},   
    {name: 'jane', netWorth: 5000},   
    {name: 'grace', netWorth: 12000}    

]
let result = (actors.filter(actor => actor.netWorth > 1000));
console.log(result);
let names = result.map(actor => actor.name).join(', ');
console.log(names);

const reduce = (number.reduce((prev, curr) => prev + curr));
console.log(reduce);

let totalNetWorth = actors.map(actor => actor.netWorth);
console.log(totalNetWorth.reduce((prev, curr) => prev + curr, 0));