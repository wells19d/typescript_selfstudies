console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// TODO: Make an array with some favorite foods & then log it
// to the console with a message similar to the example above
let favoriteFoods = ['Steak & Fried Potatoes', 'Chicken Alfredo', 'Chimi Fundidos', 'Wild Bean Tostadas'];
console.log('My favorite foods are:', favoriteFoods);





// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of Animals:', animalArray.length);

// TODO: Log to the console the number of foods in your array
console.log('Number of Favorite Foods: ', favoriteFoods.length);





// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// TODO: Log the last animal in the array using it's array index 
console.log('Last animal is,', animalArray[3]);
// TODO - Stretch: 
// Do this by using the array length instead of the exact index number
console.log('Last animal is', animalArray[animalArray.length - 1]);





// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('Lasagna');
console.log('Added another food to the end,', favoriteFoods);





// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// TODO: Remove the food at the end of your array & 
//       log both the food removed and the updated array
let removedFood = favoriteFoods.pop();
console.log('Removed the last food item', removedFood);
console.log('My favorite foods are now ', favoriteFoods);





// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log('Added an animal to the beginning:', animalArray[0]);

// TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('Lasagna');
console.log('Added a food to the beginning:', favoriteFoods[0]);





// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal:', removedAnimal);
console.log('The animals are now', animalArray);

// TODO: Remove the food at the beginning of your array & 
//       log both the food removed and the updated array
removedFood = favoriteFoods.shift();
console.log('Removed the first food from my list:', removedFood);
console.log('My favorite foods are now ', favoriteFoods);