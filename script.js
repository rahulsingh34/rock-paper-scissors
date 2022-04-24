let textArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}