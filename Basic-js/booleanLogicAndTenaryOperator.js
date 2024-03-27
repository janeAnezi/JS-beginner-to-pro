/**** Boolean logic */
var age = 15;
if(age < 18) {
    console.log('you are not old enough to vote');
}else if (age >= 18 && age <= 20) {
    console.log('you can vote but you are still a teenager');
}else {
    console.log('you can vote and are an adult!');
}

/***** Tenary operator */
var herName = "Aisha";
var herAge = 20;

herAge <= 18 ? console.log(herName, 'drinks wine') : console.log(herName, 'takes coke');
var drinks = herAge > 18 ? "wine" : "Malt";
console.log(drinks);
