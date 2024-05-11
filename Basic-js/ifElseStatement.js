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