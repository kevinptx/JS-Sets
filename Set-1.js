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
  const yearOfBirth = 2017 - age;
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yearOfBirth}`);
}
whoAmI();


// #5 Move the year of birth calculation into a new function.

function yearOfBirthCalc(age){
    const yearOfBirth = 2017 - age;
    return yearOfBirth;
}

function whoAmI(name, age){
    const yob = yearOfBirthCalc(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);
}

console.log("Calling number 5")
whoAmI("Bill", 23);


// #6 What happens if you enter a negative age? Add a try/catch

//the point of throwing errors is that a function says "I can't do this". yearOfBirthCalc is supposed to calc a yob. but we can't calc a yob for a -23 year old person. So it's going to throw an error instead of returning something. The throw needs to go inside yearOfBirthCalc but you catch that inside of whoAmI. The idea is that if yearOfBirthCalc can't return a value, you don't print out anything about yob. at the moment it's printing out the error message and keeps going, which is wrong. It's saying bill was born in 2040, but we don't want that to happen. **sorting this one out will help solve 7 and 8.
function yearOfBirthCalcV2(age) {
  if (age < 0) {
    throw new Error('Age negative error');
  }
  if (typeof age === 'undefined') {
    throw new Error('Age not entered!');
  }
  if (typeof age !== 'number') {
    throw new Error('Number was not entered for age');
  }
    return 2017 - age;
}
function whoAmIV2(name, age){
    try {
      const yob = yearOfBirthCalcV2(age);
      console.log(`Hi my name is ${name} and I'm ${age}`);
      console.log(`I was born in ${yob}`);
          }
          catch(e){
          console.error(e.message);
          }
}
console.log("Calling Number 6:")
whoAmIV2("Bill", -23);

// #7 Check if name and age have been entered. Create a conditional which outputs console.error("Arguments not valid").
//Hint: How do you check if a parameter or variable has not been "defined"?

function whoAmIV3(name, age){
  try {
    if(!name || !age) {
      throw new Error('Argument not valid');
    }
    const yob = yearOfBirthCalcV2(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);
  }
          catch(e){
          console.error(e.message);
          }

}
console.log("Calling Number 7:")

whoAmIV3();


// #8
//What happens if you pass "29" as the age? What about "twenty nine"? Implement a check to ensure the name is a string and the age is a number.
//Hint: typeof age Investigate: What is NaN?

function whoAmIV4(name, age){
  try {
    if(isNaN(age) || !age) {
      throw new Error('Argument not valid');
    }
    if(typeof name !== 'string' || !name){
      throw new Error('Name is invalid');
    }
    const yob = yearOfBirthCalcV2(age);
    console.log(`Hi my ${name} and I'm ${age}`);
    console.log(`I was born in ${yob}`);
  }
          catch(e){
          console.error(e.message);
          }

}
console.log("Calling Number 8:")
whoAmIV4(null, 29);
