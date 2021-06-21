//Pig game

// global variables
var total_score, active_player,round_score;
total_score = [0,0];
active_player = 0
round_score = 0;

//Call new game function
newgame()

// Add event listeners to the buttons
document.querySelector('.btn--roll').addEventListener('click',rollDice);
document.querySelector('.btn--hold').addEventListener('click',hold);
document.querySelector('.btn--new').addEventListener('click',newgame)


// funtion to roll Dice
function rollDice(){
    //roll the dice and add the value gotten to the round score

    var dice = Math.floor(Math.random()*6)+1;
    //Change the dice image
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-'+dice+'.png';
    diceDOM.style.display='block';
    // while the value of the die is not 1 add the die value to round score 
    if(dice!==1){
        round_score+=dice;
          // Update the UI for the round score
    document.querySelector('#current--'+active_player).textContent = round_score;
    }
    else{
        round_score = 0;
        document.querySelector('#current--'+active_player).textContent ='0'
        // Switch the players
        switchPlayer()

    }
    
  

}
function hold(){
    //1. add round score to the player's total score
    total_score[active_player]+=round_score
    // Reset the round score
    round_score=0
    //1.5 Update the total score in the UI
    document.querySelector('#score--'+active_player).textContent = total_score[active_player]
    //2. switch player
    if(total_score[active_player]>=100){
        displayWinner();
        endgame()
    }
    switchPlayer()
}
function displayWinner(){
    document.querySelector('#name--'+active_player).textContent="Winner!"
}
function endgame(){
    document.querySelector('.btn--roll').disabled = 'true'
    document.querySelector('.btn--hold').disabled = 'true'
}
function newgame(){
    document.querySelector('#score--0').textContent='0';
document.querySelector('#score--1').textContent='0';
document.querySelector('#current--0').textContent='0';
document.querySelector('#current--1').textContent='0';

// Hide the Dice
document.querySelector('.dice').style.display = 'none'
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')
}
function switchPlayer(){
    active_player = active_player==0?active_player=1:active_player=0
        // Show active player
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
        document.querySelector('.dice').style.display='none'

}