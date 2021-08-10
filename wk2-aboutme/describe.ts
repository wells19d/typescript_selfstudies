// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

let number = 1;
console.log(number);

number++;
console.log(number);

if (number >= 2) {
    console.log(`Yes, 2 = ${number}`);
}


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to 'Dane'. 
// We check if name should exactly match Mary. We console.log 'Hi, Mary'
// We check if name does not, we console.log `How are you doing?`

// let name = 'AJ'; // Causes error, not used in typescript...
let firstName = 'AJ'; // name can not be declared, possible simple name can not be used
let lastName = 'Wells';
console.log(`My name is ${firstName} ${lastName}`); // Testing the variables

if (firstName === 'Mary') {
    console.log('Hi, Mary!');
} else {
    console.log(`How are you doing ${firstName}?`);
}

// 2. WRITE YOUR DESCRIPTION HERE
// We make two varibles, one called secret with no value, another called code and set the number to 123.
// Create a conditional that if the code matches exactly '123', the value 'secret' turns to 'super'.
// We check if code matches exactly to 123, if so the secret is now super and the code multiplies by 2.
// We check if code is greater than 250, if so the secret is now duper
// Then we console.log 'secret'

let secret;

let code = 123;
if (code === 123) {
    secret = 'super';
    code = code * 2;
}

if (code > 250) {
    secret = 'duper';
}

console.log(secret);

// 3. WRITE YOUR DESCRIPTION HERE
// Make 3 variables ('isStudent' and set it to true), (age with a value of 34), (zip with a value of 55407)
// We check 'if' 'isStudent' equals exactlys on both sides of the equation, with values true and greater than 80000'. We console.log `You're a student on the West Coast!`
// We check 'else if' 'isStudent' equals exctly, with only one side to be true, with values of false and less than 30. We console.log `What are your hobbies?`
// We check another 'else if' 'isStudent' equals exctly 'true'. We console.log 'Welcome to Prime!'
// We check with 'else' with no variable (default). We console.log 'How about the weather?'

let isStudent = true;
let age = 34;
let zip = 55407;

console.log(`It is ${isStudent} I'm a student. I'm ${age} years old and my zip code is ${zip}!`);

if (isStudent = true && zip > 80000 ) {
    console.log(`You're a student on the West Coast!`);
  } else if (isStudent = false || age < 30) {
    console.log('What are your hobbies?');
  } else if (isStudent = true) {
    console.log('Welcome to Prime!');
  } else {
    console.log('How about the weather?')
  }

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

number--;
if (number <= 2) {
    console.log(`No, ${number} does not equal 2`);
}

//4. We start with three variables -- colorOne is set to 'blue' and colorTwo is set to 'red', and mix is set to true. We check if mix is true 
//-- it is, so we set colorOne and colorTwo to 'purple'
// colorTwo = 'purple'; is missing and should be added below colorOne = 'purple';

let colorOne = 'Red';
let colorTwo = 'Blue';
let mix = true;

if (mix = true) {
    colorOne = 'Purple';
}

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
    console.log('Throw away the food');
}

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than minAge 
// -- they are, so we console.log 'enter'.

let newAge = 22;
const minAge = 21;

if(minAge >= newAge) {
  console.log('no entry');
} else {
  console.log('enter');
}