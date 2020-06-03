/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// variable declarations
var scores, roundScore, activePlayer, dice;

// variable assignments, without using yet
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

newGame = () => {
  document.querySelector(".dice").style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
}

// document.querySelector(".dice").style.display = 'none';
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
// adding event listeners
  // on clicking the button
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random number is generated
    var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
  // 3. Update the round score, if the rolled number was not 1
  if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    // Next Player
    nextPlayer();
  }
});

// anonymous functions
// a function that doesn't have a name, and can be reused

document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add current score to Global Score
  scores[activePlayer] += roundScore;
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if Player won the game
  var total = scores[activePlayer];
  
  if (total > 100) {
    alert('Victory!');
    newGame();
  }
  // Next Player
  

});

// changing image in html img element

nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

// State Variables

