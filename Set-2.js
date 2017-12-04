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





