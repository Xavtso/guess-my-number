'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0 

// Main function
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess = Number(document.querySelector('.guess').value);
       
             // When not a number
        if (!guess){
            document.querySelector('.message').textContent = '⛔Not a Number';
       
            // When player win
        }else if ( guess === secretNumber){
            document.querySelector('.message').textContent = '🎉 Correct Number';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.lastScore').textContent = score;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        
        
            // When number is lower
        }else if(guess < secretNumber){
           if(score > 1) { 
                document.querySelector('.message').textContent = '📉 Too Low';
                score --;
                document.querySelector('.score').textContent = score;}
        
                // When player lost the game 
            else{
                document.querySelector('.message').textContent = 'You Are Loser🤢';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#DC143C';
            }
        
            // When number is higher
        }else if ( guess > secretNumber){
            if(score > 1) {
                document.querySelector('.message').textContent = '📈 Too High';
                score --;
                document.querySelector('.score').textContent = score;}
        
                // When player lost the game         
            else{
                document.querySelector('.message').textContent = 'You Are Loser🤢';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#DC143C';
            }
        }    
    }
    );
    document.querySelector('.again').addEventListener('click',function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        
        document.querySelector('.message').textContent = 'Start guessing...';
        // displayMessage('Start guessing...');
        document.querySelector('.number').textContent = "?";
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = '' ;
        
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
    })
    // Coding Challenge #1
    
    /* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
