// #1

console.log("'Hi my name is Chris and I'm 29 years old'");

// #2

function whoAmI(){

    console.log("'Hi my name is Chris and I'm 29 years old'");

}

whoAmI();

// #3

function whoAmI(name, age){

    console.log(`Hi my ${name} is Chris and I'm ${age} years old`);

}
whoAmI();

// #4

function whoAmI(name, age){
  var yearOfBirth = 2017 - age;
    console.log(`Hi my ${name} is Chris and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
}
whoAmI();
