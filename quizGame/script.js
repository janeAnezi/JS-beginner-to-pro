
// function constructor called Question to describe a question.
// including: question itself
// the answers
//  correctAnswer

let Question = function (questionText,  possibleAnswers, correctAnswer) {
    this.questionText = questionText;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer
};

Question.prototype.displayQuestion = function () { 
    console.log(this.questionText);

    for(let i=1; i< this.possibleAnswers.length; i++){
        console.log(`${i}:  ${this.possibleAnswers[i]}`);
    }
};
Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correctAnswer) {
        console.log('The answer is correct!');
    }else {
        console.log('Wrong answer!, Try Again');
    }
}
let question1 = new Question (
    "What is the capital of France?", 
    ["London","Paris","Berlin","Rome"], 
    1
    );
let question2 = new Question (
    "Which planet is known as the Red Planet?",
    ["Earth", "Mars", "Venus", "Jupiter"],
    1 
);
let question3 = new Question (
    "Who painted the Mona Lisa?", 
    ["Leonardo da Vinci", "Michaelangelo", "Donatello",  "Vincent van Gogh"], 
    0
);
let questionArr =  [question1, question2, question3]; // array holding all questions
 
let numRandom = Math.floor(Math.random() * questionArr.length);
 questionArr[numRandom].displayQuestion();

 let answer = parseInt(prompt("Please select the correct answer"));

questionArr[numRandom].checkAnswer(answer);







    // if(answer == "exit"){
    //     alert("Goodbye!");
    // }else if(isNaN(parseInt(answer))){
    //     console.log("That is not a valid input.");
    // }

// let correctAns;
// function Question(questn, arr) {
//     return function() {
//         console.log('Question: ' + questn);
//         for (let i = 0; i < arr.length; i++) {
//             console.log((i+1) + ') ' + arr[i]);
//         }
//     }

// }