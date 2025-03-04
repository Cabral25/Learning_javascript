// NUMBER GUESSING GAME


const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert('Please enter a  valid number')
    }
    else if(guess < minNum || guess > maxNum){
        window.alert('Please enter a valid number');
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert('Too low! try again')
        }
        else if(guess > answer){
            window.alert('Too high! try again')
        }
        else{
            window.alert(`Correct! the answer was ${answer}. It took you ${attemps} attempts`);
            running = false;
        }
    }
    
}