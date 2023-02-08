'use strict';


let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Lets play a guessing game. Answer yes or no and dont attempt to break my site, cool?`);



let questionOne = prompt('Are my eyes blue?').toLowerCase();
if(questionOne === 'yes' || questionOne === 'y'){
  alert('Yes they are!');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('Nope, guess again');
}


let questionTwo = prompt('Do I have kids?').toLowerCase();
if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Yes 3!');
  //console.log("yes! 3");
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert('Nope, guess again');
}


let questionThree = prompt('Do I like chocolate?').toLowerCase();
if(questionThree === 'yes' || questionThree === 'y'){
  //console.log("sure does!");
  alert('Does a religious bear poop in a church in the woods? Yep!');
} else if(questionThree === 'no' || questionThree === 'n'){
  alert('Nope, guess again');
}


let questionFour = prompt('Do I have a hairless cat?').toLowerCase();
if(questionFour === 'no' || questionFour === 'n'){
  alert('Sadly, you are correct.');
} else if(questionFour === 'yes' || questionFour === 'y'){
  alert('Nope, guess again');
}


let questionFive = prompt('Is my favorite band Gojira?').toLowerCase();
if(questionFive === 'yes' || questionFive === 'y'){
  alert('Yes! They are awesome!');
} else if(questionFive === 'no' || questionFive === 'n'){
  alert('Nope, guess again');
}



alert(`Thanks for playing my game ${userName}.. hope you like the site!`);

