
// function constructor called Question to describe a question.
// including: question itself
// the answers
//  correctAnswer

// (function() {
//         let Question = function (questionText,  possibleAnswers, correctAnswer) {
//         this.questionText = questionText;
//         this.possibleAnswers = possibleAnswers;
//         this.correctAnswer = correctAnswer
//     };

//     Question.prototype.displayQuestion = function () { 
//         console.log(this.questionText);

//         for(let i=1; i< this.possibleAnswers.length; i++){
//             console.log(`${i}:  ${this.possibleAnswers[i]}`);
//         }
//     };
//     Question.prototype.checkAnswer = function(ans) {
//         if(ans === this.correctAnswer) {
//             console.log('The answer is correct!');
//         }else {
//             console.log('Wrong answer!, Try Again');
//         }
//     }
//     let question1 = new Question (
//         "What is the capital of France?", 
//         ["London","Paris","Berlin","Rome"], 
//         1
//         );
//     let question2 = new Question (
//         "Which planet is known as the Red Planet?",
//         ["Earth", "Mars", "Venus", "Jupiter"],
//         1 
//     );
//     let question3 = new Question (
//         "Who painted the Mona Lisa?", 
//         ["Leonardo da Vinci", "Michaelangelo", "Donatello",  "Vincent van Gogh"], 
//         1
//     );
//     let questionArr =  [question1, question2, question3]; // array holding all questions
    
//     let numRandom = Math.floor(Math.random() * questionArr.length);
//     questionArr[numRandom].displayQuestion();

//     let answer = parseInt(prompt("Please select the correct answer"));

//     questionArr[numRandom].checkAnswer(answer);
//     })();

    // to display the next random question so that the game never ends

    (function() {
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
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correctAnswer) {
            console.log('The answer is correct!');
            sc = callback(true)
        }else {
            console.log('Wrong answer!, Try Again');
            sc = callback(false)
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
        ["Michaelangelo", "Donatello",  "Vincent van Gogh", "Leonardo-da-Vinci"], 
        3
    );
    let questionArr =  [question1, question2, question3]; // array holding all questions
    function score() {
        sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return score;
        }
    }
    var keepScore = score();


        function nextQuestion() {
            let numRandom = Math.floor(Math.random() * questionArr.length);
            questionArr[numRandom].displayQuestion();

            let answer = prompt("Please select the correct answer");

            if(answer !== 'exit') {
               questionArr[numRandom].checkAnswer(parseInt(answer), keepScore);
           
                nextQuestion();
            }
        }
   nextQuestion();
})();
