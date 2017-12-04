/* eslint spaces 0 */

// #1

/*
console.log("'Hi my name is Chris and I'm 29 years old'");

// #2

function whoAmI(){

    console.log("'Hi my name is Chris and I'm 29 years old'");

}

whoAmI();

// #3

function whoAmI(name, age){

    console.log(`Hi my ${name} and I'm ${age} years old`);

}
whoAmI();

// #4

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

*/

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



