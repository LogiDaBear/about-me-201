'use strict';


let scoreCount = 0;

function qOne() {
  let userName = prompt('What is your name?');

  alert(`Welcome to my site ${userName}! Lets play a guessing game. Answer yes or no and dont attempt to break my site, cool?`);


  let questionOne = prompt('Are my eyes blue?').toLowerCase();
  while (questionOne !== 'yes' || questionOne !== 'y') {
    questionOne = prompt('Nope, guess again').toLowerCase();
    if (questionOne === 'y' || questionOne === 'yes')
    scoreCount++;
    alert('Just like the sky and ocean! Seriously look it up!');
      break;
    
  }
}

qOne();

function qTwo() {
  let questionTwo = prompt('Do I have kids?').toLowerCase();
  while (questionTwo !== 'yes' || questionTwo !== 'y') {
    questionTwo = prompt('Nope, guess again').toLowerCase;
    if (questionTwo === 'y' || questionTwo === 'yes')
    scoreCount++
    alert('Yes 3!');
   break;
  
  }
}

qTwo();


function qThree() {
  let questionThree = prompt('Do I like most music EXCEPT pop country and dubstep?').toLowerCase();
  while (questionThree !== 'yes' || questionThree !== 'y') {
    prompt('Nope, guess again').toLowerCase;
    if (questionThree === 'y' || questionThree === 'yes') 
     alert('Does a king keep his armies in his sleevies? Yep!');
     scoreCount++;
     break;
  }
}


qThree();

function qFour() {
  let questionFour = prompt('Do I have a hairless cat?').toLowerCase();
  while (questionFour !== 'yes' || questionFour !== 'y') {
    prompt('Nope, guess again').toLowerCase;
    if (questionFour === 'yes' || questionFour === 'y') 
     alert('Sadly, you are correct. Buy me one?');
     scoreCount++;
     break;
  
  }
}

qFour();


function qFive() {
  let questionFive = prompt('Is my favorite band Gojira?').toLowerCase();
  while (questionFive !== 'yes' || questionFive !== 'y') {
    prompt('Nope, guess again').toLowerCase;
   if (questionFive === 'no' || questionFive === 'n') 
    alert('Yes! They are awesome!');
    scoreCount++;
    break;
  
  }
}

qFive();

function qSix() {
  let numOfGuess = 4;
  let myNum = 21;
  while (numOfGuess) {
    let questionSix = prompt('Guess my lucky number: 1 - 25, you have 4 attempts. I am the 3rd boy of 7 kids if that helps..');
    if (myNum === +questionSix) {
      alert('You guessed it!');
      break;
    } else {
      alert('Try again!');
    }

    numOfGuess--;

  }
}

qSix();


function qSeven() {
  let pizza = ['donatos', 'papa johns', 'flyers', 'hounddogs', 'hungry howies'];
  let attempts = 6;
  while (attempts) {
    let pizzaGuess = prompt('Guess my fav pizza place in Ohio, I grant you 6 attempts to get 1 correct').toLowerCase();
    attempts--;
    let guessCorrect = false;
    for (let i = 0; i < pizza.length; i++) {
      if (pizza[i] === pizzaGuess) {
        alert('Awww yeaaah! You know it! This is a correct answer out of 5 possible.');
        scoreCount++;
        guessCorrect = true;
        break;

      }
    }
    if (guessCorrect === true) {
      break;
    }
  }
  alert(`Thanks for playing my game ${userName} hope you like the site! You scored ${scoreCount} on those questions.`);
}