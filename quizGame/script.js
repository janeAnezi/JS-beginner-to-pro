// let answer = prompt(`Please select the answer (just type the number), or type exit to quit.
// Prevent this page from creating additional dialogs`)

// function constructor called Question to describe a question.
// including: question itself
// the answers
//  correctAnswer

let Question = function(questionText,  possibleAnswers, correctAnswer) {
    this.questionText = questionText;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer
};

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
  Question.prototype.randomQuestion = function() {
    console.log(questionArr[Math.floor(Math.random() * questionArr.length)]);
  }

question1.randomQuestion();
// question2.randomQuestion();
// question3.randomQuestion();

let answer = prompt(`Please select the answer (just type the number), or type exit to quit.
 Prevent this page from creating additional dialogs`);   

























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