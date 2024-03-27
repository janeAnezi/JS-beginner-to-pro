/****** switch statement */
var job = "cook";
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log("teaches kids how to code");
        break;
    case 'farmer': 
        console.log('brings fresh vegetables');
        break;
    case 'driver': 
        console.log('takes kids to school');
        break;
    default:
        console.log('does something else');
}

var age = 25;
switch(true) {
    case age < 13:
        console.log('child');
        break;
    case age >= 13 && age <= 20: 
        console.log('you are not old enough to vote');
        break;
    default:
    console.log('you can vote and are an adult!');        
}
