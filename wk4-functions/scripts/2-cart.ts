console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Start of addItem function
console.log('1: --- addItem function ---');
let basket = [];
const maxItems = 5;
/*
Create a function called `addItem`.
It should:
    -take an input parameterfor a string `item`
    -add the new item to the global array `basket`.
    -return `true` indicating the item was added
    */

let addItem = (item) => {
    if (item === undefined){
        return false;
    } else {
        // add to basket
        basket.push(item);
        console.log(`${item} added to basket`); // used to check item added
        return true;
    }
}
// checking basket
console.log('Basket:', basket.length)
listItem();

addItem('Apples'); // added Apples
addItem('Carrots'); // added Carrots
console.log('Basket:', basket.length)
listItem();


// end of addItem function


// Start of listItem function

console.log('2. --- listItem function ---');
/*
Create a function called `listItems`.
It should:
    -loop over the items in the `basket` array
    - console.log each individual item on a new line console.log
*/

function listItem(){
    for (let item of basket) {
        console.log(item);
    }
}
// Adding Milk, Eggs, and Butter
addItem('Milk');
addItem('Eggs');
addItem('Butter');

// Basket Check
console.log('Basket:', basket.length)
listItem();

// end of listItems function


// Start of empty function
console.log('--- empty function ---');


function empty(){
    basket = [];
    return basket;
}

// empty basket
empty();

//confirm empty basket
console.log('Basket:', basket.length)
listItem();


// end of empty function


// Stretch goals
console.log('*** Stretch Goals ***');

// Stretch 1
// at the top with let basket = 0;

// Stretch goal 2

let isFull = () => {
    if (basket.length >= maxItems) {
        return true;
    } return false;
}
console.log('Basket is full?', isFull());
addItem('Apples');
addItem('Carrots');
addItem('Milk');
addItem('Eggs');
addItem('Butter');
console.log('Basket:', basket.length)
listItem();
console.log('Basket is full?', isFull());



// Stretch 3

// let addItem2 = (item) => {
//     if (isFull(basket)) { // stretch goal
//         console.log(`Can not add ${item}, Cart is full`);
//         return;
//     } else if (item === undefined) {
//         return false;
//     } else {
//         // add to basket
//         basket.push(item);
//         console.log(item, 'has been added to basket'); // used to check item added
//         return true;
//     }
// }
// addItem('batteries');
// addItem('bananas');
// addItem('oranges');


// stetch 4
/* 
Create a function called `removeItem`.It should: Take an input parameter
for a string `item`.
- Use[Array.indexOf]
- Use[Array.splice]
- Return the item removed or `null`bif the item was not found
*/

// couldn't get this to work correctly
// function removeItem(item, array) {
//     let pos = array.indexOf(item)
//     return array.splice(pos, 1) || null;
// }