//const content = document.getElementById('test').innerHTML = '<h1>Welcome To JavaScript Beginner to Pro</h1>'

/****  codding challenge 1 ******/
var markHeight, johnHeight, markBMIs,JohnBMIs, massMark, massJohn;
 massMark = 20;
 massJohn = 45
 markHeight = 15;
 johnHeight = 18;

markBMIs = massMark / (markHeight * markHeight);
JohnBMIs = massJohn / (johnHeight * johnHeight);
if (markBMIs > JohnBMIs) {
    console.log(markBMIs, JohnBMIs);
    console.log('mark\'s BMIs is higher than john\'s BMIs');
}else {
    console.log('john\'s BMIs is higher or equal to mark\'s BMIs');
    console.log(markBMIs, JohnBMIs);
}

var isMarkBMIsHigher = markBMIs > JohnBMIs;
console.log("Is Mark BMI higher than John's?, ", isMarkBMIsHigher);

/****** Truthy and Falsy values and equality operators */
// In JavaScript there are several “falsy” or “falsey” values that evaluate as
// false when treated like a boolean in a conditional expression (if, while, etc.). These include
// undefined, null, 0, "", false and NaN. Everything else is considered “truth
// y”. When comparing two values using the == operator, if one of them is falsy
// the other value will be converted to a boolean first before making the comparison.

var height;
//height = 11;
//height = 0;
height = '';
if(height || height === 0) {
    console.log('this variable is defined');
}else {
    console.log('This variable is Not defined');
}

// javascript does type coersion, which means it coverts string to a number and compares the number if they are the same.
// changing one type to a different type

// Explicit vs Implicit coercion
const x = 42;
const explicit = String(x);  // explicit === '42'
const implicit = x + '';    // implicit === '42'

// == vs === , == coerces types, while === requires the exact type. 

/**** coding challenge 2 ***/

totalScoreTeamJohn = 100 + 120 + 113;
totalScoreTeamMike = 100 + 120 + 113;
totalScoreTeamMarry = 100 + 120 + 113;
averageTeamJohn = totalScoreTeamJohn / 3;
averageTeamMike = totalScoreTeamMike / 3;
averageTeamMarry = totalScoreTeamMarry / 3;
// if (averageTeamJohn > averageTeamMike) {
//     console.log("Winner!!!. The team with the highest score is John's team");
//     console.log("Team John: ", averageTeamJohn, " and Team Mike: ", averageTeamMike);
// }else if (averageTeamJohn === averageTeamMike) {
//     console.log("It's a draw!!!, Both teams have the same score.");
// }else {
//     console.log("The winner is Mike's team!");
//     console.log("Team Mike: ", averageTeamMike, " and Team John: ", averageTeamJohn);
// }
switch(true) {
    case averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMarry:
        console.log("Winner!!!. The team with the highest score is John's team");
        break;
    case averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMarry:
        console.log("Winner!!!. The team with the highest score is Mike's team");
        break;
    case averageTeamMarry > averageTeamJohn && averageTeamMarry > averageTeamMike:
        console.log("Winner!!!. The team with the highest score is Marry's team");
        break;
    default:
        console.log("Its a Draw!!!!, We have no winner Yet.");
}

/**** coding challenge 3 ****/
var bills = [124, 48, 268]

function tipCalculator(bill) {
    if (bill < 50) {
        return bill * .2;
    }else if (bill >= 50 && bill <= 200) {
        return bill * .15;
    }else {
        return bill * .1;
    } 
}
// or it could be written as

function tipCal(bill) {
    let percentage;
    if(bill < 50) {
        percentage = .2;
    } else if(bill >= 50 && bill <= 200) {
        percentage = .15;
    }else {
        percentage = .1;
    }
    return bill * percentage;
}
console.log(`The amount of tip given  is ${tipCal(20)}`);
let tipArr = [];
tipArr.push(tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2]))
console.log(tipArr);
tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
totalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log('Tip Array: ', tips ,' & Final paid amount: ', totalBills);

// coding challenge 4

let markBmi = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        let heightSqr = this.height * this.height;
        this.bmi = this.mass / heightSqr;
        return this.bmi;
    }
};
let johnBmi = {
    fullName: 'John Doe',
    mass: 110, 
    height: 1.95,
    calcBMI: function() {
        let heightSqr = this.height * this.height;
        this.bmi = this.mass / heightSqr;
        return this.bmi;
    }
};

//console.log(markBmi.calcBMI()); this returns the bmi of mark
//johnBmi.calcBMI();
console.log(markBmi);
console.log(johnBmi);
if(johnBmi.calcBMI() > markBmi.calcBMI()) {
    console.log(`${johnBmi.fullName} has the highest BMI by, ${johnBmi.bmi}`);
}else if(markBmi.bmi > johnBmi.bmi) {
    console.log(`${markBmi.fullName} has the highest BMI by ${markBmi.bmi}`);
}else {
    console.log('We have equal BMIs');
}


/**** coding challenge 5 ***/
let johnObj = {
    name: "John",
    newJohnBill: [124, 48, 268, 180, 42],
    calcTip: function CalcTip() {
            this.tips = [];
            this.totalBills =[];
            
            for(let i = 0; i < this.newJohnBill.length; i++) {
               let percentage;
               let bill = this.newJohnBill[i];
                if(bill < 50) {
                    percentage = .2;
                } else if(bill >= 50 && bill <= 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
                this.tips[i] = bill * percentage;
                this.totalBills[i] = bill + this.tips[i];  
            } 
        }
}


//console.log("The tip is : ", johnObj.tips);
//console.log("The total bill with the tip is : ", johnObj.totalBills)

let markObj = { //create an object with an array for the bill values
    name: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTip: function MarkTip() { // add a method to calculate the tip
        this.tips = []; // to create a new array containing all tip and also as part of the object property
        this.finalPaidAmmounts = []; // to create a new array containing total amount paid and also as part of the object property
        for (var i=0; i<this.bills.length; i++) { // a loop to iterate over all the paid bills and do the tip calculations
            let bill = this.bills[i];
            let percentage;
            if(bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25
            }

            this.tips[i] = bill * percentage;
            this.finalPaidAmmounts[i] = bill + this.tips[i]
        }
    }
}



function CalcAverageTip(arr) {
    let sumOfTips = 0;
    for(let i = 0; i < arr.length; i++) {
        sumOfTips += arr[i] ;
    }
   return sumOfTips / arr.length;
  
}
johnObj.calcTip();
markObj.calcTip();
johnObj.averageTip = CalcAverageTip(johnObj.tips);
markObj.averageTip = CalcAverageTip(markObj.tips);

console.log(johnObj, markObj);

console.log((johnObj.averageTip) > (markObj.averageTip) ? johnObj.name +  "\'s family pays the highest tips, with an average of $" + johnObj.averageTip : markObj.name + "\'s family pays the highest tips, with an average of $" + markObj.averageTip);

// the object below display the statement that the 'this' key word is not assigned any value until the method of the object is called. and also the 'this key word in a regular function referes to the window object.
let grace = {
    name: 'Grace',
    age: 36,
    calcYear: function() {
        this.yearOfBirth = (2024 - this.age);
    }
}
grace.calcYear();
console.log(grace);


