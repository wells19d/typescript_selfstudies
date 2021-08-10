let firstName = 'AJ';
let lastName = 'Wells';
let fullName = (firstName) + ' ' + (lastName);
let luckyNumber = 39;
console.log( `My name is ${fullName}, and I think ${luckyNumber} is a winner!` );

let adventurous = true;
let food = 'Italian';
let pets = 0;
let friendsPets = 1;
pets += 2;
const allowedPets = 4;

if (adventurous) {
    console.log('Adventures are great!'); // This should Fire
} else {
    console.log('How about we stay home?');
}

if ((luckyNumber === 2) && adventurous){
    console.log('Roll the Dice!'); // This will not fire, luckyNumber is 39
}

if ( pets < allowedPets ){
    console.log( 'I can have more pets!' ); // This should fire. I have 2 pets, I can have 4.
}
if( pets === allowedPets ){
    console.log( 'I have enough pets' ); // This does fire when I change the pets number to 2.
}
if (pets > allowedPets ){
    console.log( 'Oh no, I have too many pets!' ); // this does fire when I change the pets to 3.
}

// friendsPets++;
// friendsPets +=2;

switch (true) {
    case (pets > friendsPets):
        console.log('I have more pets, with ' + pets + '!' ); // this fire at the start of the test
        break;
    case (pets < friendsPets):
        console.log('My friends have more pets than I do!' ); // this fires last when I give 2 more pets to my friends.
        break;
    case (pets === friendsPets):
        console.log('We both have the same number of pets!' ); // this fires when I add 1 pet to a my friends
        break;
}

let letsGo = adventurous ? '"Adventures are great!"' : '"How about we stay home?"';
console.log (letsGo);