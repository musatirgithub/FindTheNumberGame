let guess = document.getElementById('number');
const button = document.querySelector('button');
const feedback = document.querySelector('.feedback p');
const magic = document.querySelector('.magic p span');
const randomNum = Math.floor(Math.random()*100+1);
let lives = 8;
let end = false;

button.addEventListener('click', () =>{
    if (button.innerText == 'Restart'){
        lives = 8;
        magic.innerText = lives;
        guess.value = '';
        button.innerText = 'CHECK';
        feedback.innerText = '';
    } else{
            if (guess.value == ''){
                feedback.innerText = 'Click check button after entering a number!';
            } else if (randomNum > guess.value){
                feedback.innerText = 'Try a higher number!';
                lives--;
                zeroCheck();
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum < guess.value){
                feedback.innerText = 'Try a lower number!';
                lives--;
                zeroCheck();
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum == guess.value){
                feedback.innerText = 'Congratulations!';
                button.innerText = 'Restart';
            }
    }
})

function zeroCheck(){
    if (lives == 0){
        feedback.innerText = `Sorry you lost! The number was ${randomNum}.`
    }
}