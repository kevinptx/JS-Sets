/* eslint spaces 0 */

// #1 Write a statement which logs 'Hi, my name is Chris and I'm 29 years old' to the console (you can lie about your age).


console.log("'Hi my name is Chris and I'm 29 years old'");

// #2 Wrap the statement in a function called whoAmI and call that function

function whoAmI(){

    console.log("'Hi my name is Chris and I'm 29 years old'");

}

whoAmI();

// #3 Change the hard coded string into a parameters, name and age

function whoAmI(name, age){

    console.log(`Hi my ${name} and I'm ${age} years old`);

}
whoAmI();

// #4 Create a variable named yearOfBirth and calculate the year based on age (ex 2016 - age). Then add another console.log statement that outputs I was born in [insert yearOfBirth].

function whoAmI(name, age){
  var yearOfBirth = 2017 - age;
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yearOfBirth}`);
}
whoAmI();


// #5 Move the year of birth calculation into a new function.

function yearOfBirthCalc(age){
    var yearOfBirth = 2017 - age;
    return yearOfBirth;
}

function whoAmI(name, age){
    var yob = yearOfBirthCalc(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);
}


whoAmI("Bill", 23);



// #6 What happens if you enter a negative age? Add a try/catch


function yearOfBirthCalc(age){
    var yearOfBirth = 2017 - age;
    return yearOfBirth;
}

function whoAmI(name, age){
    try {
        if(age < 0) {
           throw new Error('Age negative error')
              }
          }
          catch(e){
          console.error(e.message);
          }
    var yob = yearOfBirthCalc(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);


}
whoAmI("Bill", -23);



// #7 Check if name and age have been entered. Create a conditional which outputs console.error("Arguments not valid").
//Hint: How do you check if a parameter or variable has not been "defined"?

function yearOfBirthCalc(age){
    var yearOfBirth = 2017 - age;
    return yearOfBirth;
}
function whoAmI(name, age){
  try {
    if(!name || !age) {
      throw new Error('Argument not valid');
    }
  }
          catch(e){
          console.error(e.message);
          }
    var yob = yearOfBirthCalc(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);

}
whoAmI();


// #8
//What happens if you pass "29" as the age? What about "twenty nine"? Implement a check to ensure the name is a string and the age is a number.
//Hint: typeof age Investigate: What is NaN?

function yearOfBirthCalc(age){
    var yearOfBirth = 2017 - age;
    return yearOfBirth;
}
function whoAmI(name, age){
  try {
    if(isNaN(age) || !age) {
      throw new Error('Argument not valid');
    }
    if(typeof name !== 'string' || !name){
      throw new Error('Name is invalid');
    }
  }
          catch(e){
          console.error(e.message);
          }
    var yob = yearOfBirthCalc(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);

}
whoAmI(null, 29);
