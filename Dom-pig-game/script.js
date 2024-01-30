/****  Dom manipulation events ***/

// how to creat fundamental game variables
// how to generate a random Number
// how to manipulate the DOM
// how to read from the DOM
// how to change css styles

/** game rules
 * 
 * the game has 2 players, playing in rounds
 * In each turn, a player rols a dice as many times 
 *    as he wishes. Each result get added to his ROUND score
 * But, if the player rols a 1, all his ROUND score gets lost, After that, its the next player's turn
 * The player can chose to "Hold", which means thst his ROUND score gets added to his GLOBAL score. 
 *    After that, it's the next players turn.
 * The first player to reach 100 points wins the game
 *
 *  */ 
var scores, roundScore, activePlayer, dice, isGamePlaying;
var winningScore = document.querySelector('.winning-score').value;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isGamePlaying) {
        // 1. Random number
        dice = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDom = document.querySelectorAll('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //3. Update the round score if the rolled number was NOT a 1
        if (dice !== 1) {
            // add the roll to the round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else if (dice[0] === 1 || dice[1] === 1) {
        //     document.getElementById('current-0').textContent = '0';
        //     document.getElementById('current-1').textContent = '0';
        } else {
            // Next player
            nextPlayer();
        }
    } 
  
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (isGamePlaying) {
    // Add the current round score to the global score of the active player
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if the active player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = "winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        isGamePlaying = false;
    } else {
        //next player
        nextPlayer();
    }
}
});
 
 /* creating a game initialization function */

    function nextPlayer() {
        // switch between players
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        // reset roll button and dice display
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }

    document.querySelector('.btn-new').addEventListener('click', init);





    function init() {
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        isGamePlaying = true;

        document.querySelector('.dice').style.display = 'none';
        
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

    }



 /**
  * console.log(dice);
 document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>'; //setter value
 var x = document.querySelector('#current-0').textContent; // getter value
 console.log(x);
 **/