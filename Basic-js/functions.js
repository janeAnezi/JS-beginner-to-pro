
/****** Functions ****/
function calculateAge(yearOfBirth) {
    return 2024 - yearOfBirth;
}

var ahnnieAge = calculateAge(1998);
var sammyAge = calculateAge(1999);
console.log(ahnnieAge, sammyAge);

// function decleration
function yearsUntillRetirement(name, year) {
    var age = calculateAge(year);
    var retirementYear = 65 - age;
    if(retirementYear > 0) {
        console.log(name + ' will turn ' + age + ', so he has ' + retirementYear, ' more years to retire.');
    } else {
        console.log(name, ' is already retired.');
    }
}
yearsUntillRetirement("sameer", 1992);
yearsUntillRetirement("ebune", 1940);
yearsUntillRetirement("alpha", 1995);

/***** function expressions */
var whatDoYouDo = function(firstName, job) {
    switch (job) {
        case 'teacher':
            return firstName,' teaches kids how to code';
        case 'driver':
            return firstName,' drives a cab in awka';
        case 'designer':
            return firstName,' designs beautiful websites';
        default:
            return firstName, ' does something else';
    }
}

console.log(whatDoYouDo('john', 'driver'));
console.log(whatDoYouDo('mark', 'teacher'));
console.log(whatDoYouDo('mary', 'cook'));

// about function statement/decleration and function expression
//function statement or decleration does not produce immediate result while 
//function expression produces immediate result because it gets executed immediately

function GreetMe(name) {
    let greetMsg = `hi ${name}, nice to meet you`;
    console.log(greetMsg);
}

GreetMe('Anezi');

function Sum(a, b) {
    let numadd = a + b;
    return numadd;
}
Sum(5,6);

// Es6 version of JS
let SumNew = (a,b) => a+b; // implicit return. (explicit return is with the curley brackets)

function calcFoodTotal (foodAmt, tip) {
    let tipPercentage, tipAmt, total;
    tipPercentage = tip/100;
    tipAmt = foodAmt * tipPercentage;
    total = SumNew(foodAmt, tipAmt);
    return total;
}

calcFoodTotal(350,10)