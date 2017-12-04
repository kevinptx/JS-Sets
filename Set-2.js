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

function jediName(firstName, lastName){

    firstName = firstName.slice(0,3);
    lastName = lastName.slice(0,2);
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

function beyond(num){

    if (num >= 1.7976931348623157E+10309){
        console.log("And beyond");
    }
    else if (num < 1.7976931348623157E+10309 && num > 0){
        console.log("To infinity");
    }
    else if (num > -1.7976931348623157E+10309 && num < 0){
        console.log("To negavtive infinity")
    }
    else if (num === 0){
        console.log("Staying home");
    }
}
beyond(10);

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

function decode(word){
  word = word.toLowerCase;
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
