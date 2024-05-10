/********* Basic operators */
var currentYear,johnYear,markYear;
 currentYear = 2023;
 ageJohn = 26;
 ageMark = 24;

 /** math operator */
 johnYear = currentYear - ageJohn;
 markYear = currentYear - ageMark;
console.log("John was born in ", johnYear, " and Mark, john's friend was born in", markYear);
 var isJohnOlder = ageJohn > ageMark;
 console.log(isJohnOlder);

 var isfullAge = currentYear - johnYear >= ageMark;
 console.log(isfullAge);

 var average = (ageJohn + ageMark) / 2
 console.log("Their ages added together divided by two is ",average);

 // Multiple assignments
 var x, y ,z;
 x= (3 + 3) - (2 * 3);
 y = 14;
 z = y * 2 - 8;
 console.log(x, y, z);

 x += 10;
 console.log(x);
 x *= 2;
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);

 // Tip Calculation
 let foodAmt = parseInt(prompt("How much was the food"));
 let tipPercent = parseInt(prompt('tip %')) / 100;
 alert(`your tip percent is ${tipPercent}`);
 let tipAmt = foodAmt * tipPercent;
 alert(`your tip amount is ${tipAmt}`)
 let totalCost = foodAmt + tipAmt;
 console.log(`Your total cost will be ${totalCost}`);

