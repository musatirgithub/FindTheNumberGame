let guess = document.getElementById('number');
const button = document.querySelector('button');
const feedback = document.querySelector('.feedback p');
const magic = document.querySelector('.magic p span');
let randomNum = Math.floor(Math.random()*100+1);
let lives = 8;


button.addEventListener('click', guessTheNumber);
guess.addEventListener('keydown',(event)=>{
    if (event.key == 'Enter'){
        guessTheNumber();
    }
})

function guessTheNumber(){
    if (button.innerText == 'Restart'){
        randomNum = Math.floor(Math.random()*100+1);
        guess.min = '1';
        guess.max = '100';
        intervalUpdate();
        lives = 8;
        magic.innerText = lives;
        guess.value = '';
        button.innerText = 'CHECK';
        feedback.innerText = '';
    } else{
            if (guess.value == ''){
                feedback.innerText = 'Enter a valid number!';
            } else if (Number(guess.value) > Number(guess.max) || Number(guess.value) < Number(guess.min)) {
                feedback.innerText = `${guess.value} is not within valid interval!`;
                guess.value = '';
            }else if (randomNum > guess.value){
                feedback.innerText = 'Try a higher number!';
                lives--;
                guess.min = guess.value;
                intervalUpdate();
                zeroCheck();
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum < guess.value){
                feedback.innerText = 'Try a lower number!';
                lives--;
                guess.max = guess.value;
                zeroCheck();
                intervalUpdate();
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum == guess.value){
                feedback.innerText = 'Congratulations!';
                button.innerText = 'Restart';
            }
    }
}

function zeroCheck(){
    if (lives == 0){
        feedback.innerText = `Sorry you lost! The number was ${randomNum}.`
    }
}

function intervalUpdate(){
    document.querySelector('h1').innerText = `Guess The Number (${guess.min} - ${guess.max})`;
}