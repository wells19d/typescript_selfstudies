// console.log('***** Object Practice *****');

// // Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'AJ',
  lastName: 'Wells',
  hasSiblings: true,
  shoeCount: 3,
  favThreeFoods: ['Steak & Fried Potatoes', 'Chicken Alfredo', 'Chimi Fundidos'],
};
console.log('A little about me:', me);

// // checking code

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`;
console.log(fullName);

// // checking code

// /* 3. Nested arrays
//   - Console.log your first favorite food
//   - Console.log your last favorite food 
// */
console.log(me.favThreeFoods[0]); // check test code
console.log(me.favThreeFoods[me.favThreeFoods.length -1]); // check (redo)


// /* 4. Change a property of an existing object.
//   - Console.log your current shoe count.
//   - Guess what?! You just got a new pair of shoes!!!
//   - Set your object's shoeCount to be what it was plus 1
//   - Console.log your updated shoe count. 
// */
console.log(me.shoeCount);
me.shoeCount ++; // Increase to 4
console.log(me.shoeCount); // Should be 4


// /* 5. Add a new property to an existing object.

// // This should not be done with typescript as it essentially defeats the purpose of typescript.

console.log('A little about me:', me);
console.table(me);