// ==UserScript==
// @name         Disable Console Auto-Clear
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Prevent console from auto-clearing
    var intervalId = setInterval(function() {
        var devtools = /./;
        devtools.toString = function() {
            this.opened = true;
        };
        console.log('%c', devtools);
        if (devtools.opened) {
            console.log('Console was cleared!');
            clearInterval(intervalId);
        }
    }, 1000);
})();




// * Build a function constructor called Question to describe a question.
// including: question itself, the answers and correctAnswer
// * create a couple of questions using the constructor
// * store them all inside an array 
// * select one random question and log it in the console, together with the possible answers
//  ....(hint: write a method for the question objects)
// * use the prompt function to ask the user for the correct answer, the user should input the number of the correct answer.
// * check if the answer is correct and print to the console whether the answer is correct or not (hint: write another method)
// * Make sure that all code  is private and doesn't interfere with the other programmers code.
// * Display the next random question so the the game never ends and also include the option to quit game
// * Keep the scores of the users


(   function() {
        function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer
        }

        // a method for the question object
        Question.prototype.showQuestion = function() {
            console.log(this.question);
            for(let i = 0; i < this.answers.length; i++) {
                console.log(i + ':' + this.answers[i]);
            }
        }

        // a method to check answer 
        Question.prototype.chechAnswer = function(ans, callback) {
            var sc;
            if(ans === this.correctAnswer) {
                console.log('Correct Answer!');
                sc = callback(true);
            } else {
                console.log('Incorrect!, Try again');
                sc = callback(false);
            }

            this.displayScore(sc);
        }

        // a method to display the score in the conwole
        Question.prototype.displayScore = function(score) {
            console.log(`Your current score is: ${score}`);
            console.log(`----------------------`);
        }

        // to update the scores of the user
        function updateScore() {
            let score = 0;
            return function(correct) {
                if(correct) {
                    score++;
                }
                return score;  
            }
        }
        let keepScore = updateScore();

        // to create a couple of questions
        let question1 = new Question (' Which keyword is used to define a function in JavaScript?', ['func', 'define', 'function'], 2);
        let question2 = new Question (' What is the output of typeof [] in JavaScript', ['object','array', 'array-like'], 0);
        let question3 = new Question ('Which method is used to add a new element to the end of an array in JavaScript?', ['append()', 'add()', 'push()'], 2);
        let question4 = new Question('Who created JavaScript?',['Bill Gates','Steve Jobs','Mark Zuckerberg'], 1);
        // to store them inside an array
        let questions = [question1, question2, question3, question4];

        function nextQuestion() {                    // to display the next random question
            let randomQue = Math.floor(Math.random() * questions.length);

            // select one random question and log it in the console
            questions[randomQue].showQuestion();

            let answer = prompt('Please select the correct answer (just type the number) or type exit to quit');
            if(answer !== 'exit') {
                questions[randomQue].chechAnswer(parseInt(answer), keepScore);

                nextQuestion();                    // this will repeatedly call the function
            } 

        }
        nextQuestion();
       
    }
)();  // an immediately invoked function expression 
