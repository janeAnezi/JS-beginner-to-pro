/**** If/ else statement */
var firstName = "jane";
var civilStatus = "single";

if (civilStatus === 'single' ) {
    console.log(firstName,' is', civilStatus);
}else {
    console.log(firstName, ' is hopping to get married soon');
}

var isMarried = false;
if(isMarried) {
    console.log(firstName, ' is hopping to get married soon');
} else {
    console.log(firstName,' is', civilStatus);
}

// conditionalls
let weather =prompt('How is the weather today?');

if(weather == "rainny") {
    console.log("Bring an umbrella ☔");
} else {
    console.log("Wear your sun glasses 😎");
}

// Bank account condition 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -300;
var checkBalance = true;
var isActive = true;

// your code goes here
if(checkBalance === true) {
    if(isActive === true && balance > 0) {
        console.log(`Your balance is $${balance.toFixed(2)}.`);
    }else if(isActive === true && balance === 0) {
        console.log(`Your account is empty.`);    
    }else if(isActive === true && balance < 0) {
        console.log (`Your balance is negative, Please contact your bank.`)   
    }else if(isActive === false) {
        console.log(`Your account is no longer active.`);
    }
}else {
    console.log(`Thank you, Have a nice day!`)
}