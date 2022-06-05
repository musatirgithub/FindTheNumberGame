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
    } else{
        if (lives == 0){
            feedback.innerText = `Sorry you lost! The number was ${randomNum}.`
        }else {
            if (guess.value == ''){
                feedback.innerText = 'Click after entering a number!';
            } else if (randomNum > guess.value){
                feedback.innerText = 'Try a higher number!';
                lives--;
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum < guess.value){
                feedback.innerText = 'Try a lower number!';
                lives--;
                guess.value = '';
                magic.innerText = lives;
                lives || (button.innerText = 'Restart');
            } else if (randomNum == guess.value){
                feedback.innerText = 'Congratulations!';
                button.innerText = 'Restart';
            }
        }
    }
})