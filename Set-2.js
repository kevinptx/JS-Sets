// String, number, and logic drills

// #1 Jedi name
/* Write a function called jediName which takes two arguments:

firstName - a person's first name
lastName - a person's last name
The function should return the person's Jedi name.
A Jedi name is formed from the first three letters of the
last name, and the first two letters of the first name.
For example, jediName('Beyonce', 'Knowles') should return 'KnoBe'.

*/

function jediName(firstName, lastName) {

  firstName = firstName.slice(0, 3);
  lastName = lastName.slice(0, 2);
  return firstName + lastName;
}

jediName("Kevin", "Peery");

// #2 To infinity...
/*

Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

If num is infinite (either positive or negative) it should log out 'And beyond'.
If num is finite and positive it should log out 'To infinity'.
If num is finite and negative it should log out 'To negative infinity'.
If num is zero it should log out 'Staying home'.

*/

function beyond(num) {

  if (!Number.isFinite(num)) {
    console.log("And beyond");
  } else if (num > 0) {
    console.log("To infinity");
  } else if (num < 0) {
    console.log("To negavtive infinity")
  } else if (num === 0) {
    console.log("Staying home");
  } else {
    console.log("That isn't a number - that is a", typeof num);
  }
}
beyond([10, 40, 60, 80]);

//#3
/*Cracking the code

A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

First letter	Character number
a	2
b	3
c	4
d	5
So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.
*/

function decode(word) {
  word = word.toLowerCase();
  let firstLetter = word.charAt(0);
  let results;
  if (firstLetter === 'a') {
    results = word.charAt(1);
  } else if (firstLetter === 'b') {
    results = word.charAt(2);
  } else if (firstLetter === 'c') {
    results = word.charAt(3);
  } else if (firstLetter === 'd') {
    results = word.charAt(4);
  } else {
    results = " ";
  }
  return results;
}
let message = 'craft block argon meter bells brown croon droop';
console.log(message.split(' ').map(w => decode(w)).join(''));

/*
function decode(word){
  console.log("Incoming word", word);
  word = word.toLowerCase();
  console.log("toLowerCase", word);
  const wordArray = word.split(" ");
  for (i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let firstLetter = str.charAt(0);
    if (firstLetter === 'a') {
      return str.charAt(3);
    }
    else if (firstLetter === 'b') {
      return str.charAt(4);
    }
    else if (firstLetter === 'c') {
      return str.charAt(5);
    }
    else if (firstLetter === 'd') {
      return str.charAt(6);
    }
    else {
      return " ";
    }
  }
}
decode("Chicken Soup");
*/

//#4
/*
How many days in a month
Write a function that takes the name of a month as an argument and use a switch statement to determine how many days are there in that month. For example if the parameter to the function is January, the function should display "January has 31 days".
*/

//if can put console log outside, you only need to figure out if it's 28, 30 or 31. You only need 3 pieces of code to accomplish this.
function dayInMonth(month) {
  let numberOfDays;
  switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      numberOfDays = 31;
      break;
    case "february":
      numberOfDays = 28;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      numberOfDays = 30;
      break;
    default:
      console.log("ERROR");
      break;
  }
  return`${month} has ${numberOfDays} days.`;
}
console.log(dayInMonth("March"));

/* #5 Rock Paper Scissors
In the game Rock Paper Scissors, two players simultaneously choose one of the three options: rock, paper,
or scissors. If both player choose the same option, the result is a tie. Otherwise the winner is
determined as follows:
Rock beats scissors - a rock can break a pair of scissors
Scissors beats paper, because scissors can cut paper
Paper beats rock, because a piece of paper can cover a rock
Create a game in which you are playing agaist the computer. The computer randomly chooses rock,
paper, or scissors. Your function should take as an argument, 1, 2, or 3 to represent rock, paper,
or scissors and determine the winner. The code for the computer to generate a random number between
1 and 3 is -
function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));

}
RockPaperScissors(2);
rock = 1
paper = 2
scissors = 3
*/

//think about modulo arithmetic again. recommend const ROCK = 1, const PAPER = 2, const SCISSORS = 3. Paper beats rock. Paper higher number than rock and paper beats rock, etc..comparing each one. handle wrap that you loop things and modulo arithmetic can help you here because it gives you looping effect. The higher number wins. Problem of algorithm. Do the computation before the else if. The modulo arithmetic can be solved at the top.

function RockPaperScissors(userChoice) {
  var computer = 1 + Math.floor((Math.random() * 3));
  if (computer === 1 && userChoice === 2) {
    console.log("Paper beats rock - a piece of paper can cover a rock. User Wins!");
  } else if (computer === 1 && userChoice === 3) {
    console.log("Rock beats scissors - a rock can break a pair of scissors. Computer Wins!");
  } else if (computer === 2 && userChoice === 1) {
    console.log("Paper beats rock - a piece of paper can cover a rock. Computer Wins!")
  } else if (computer === 2 && userChoice === 3) {
    console.log("Scissors beat paper - scissors can cut paper. User Wins!");
  } else if (computer === 3 && userChoice === 1) {
    console.log("Rock beats scissors - a rock can break a pair of scissors. User Wins!");
  } else if (computer === 3 && userChoice === 2) {
    console.log("Scissor beats paper - scissors can cut paper. Computer Wins!");
  } else if (computer === userChoice) {
    console.log("It's a tie!")
  }
}

RockPaperScissors(2);
RockPaperScissors(3);
RockPaperScissors(1);
