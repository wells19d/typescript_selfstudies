// REQUIRED FEATURES

// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
console.log(' 1: myArray ');
let myArray = [3, 6, 7, 10];
console.log(myArray);

// 2. Create a variable called 'myValue' with a value of the number 0
console.log(' 2: myValue ');
let myValue = 0;
console.log(myValue);

// 3. Console log the value of the array at index 2
console.log(' 3: Value of Index 2 ');
console.log(myArray[1]);

// 4. Remove the last item in the array, then console log the array
console.log(' 4: Removed last item in the array ');
let removedNumber = myArray.pop();
console.log(removedNumber); // checking number
console.log(myArray);

// 5. Add the value of number 15 to the end of the array
console.log(' 5: Add 15 to myArray ');
myArray.push(15);
console.log(myArray);

// 6. Write a `for` loop that console logs each value in the array
console.log(' 6: For loop each value ');
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
console.log(' 7: Increase myValue by 1 till 10 ');
while (myValue < 11) {
    console.log(myValue);
    myValue++;
}

// 8. Change the second value in the array from 6 to 20, then console log the array
console.log(' 8: Change 6 to 20 in array ');
myArray[1] = 20;
console.log(myArray);

// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop
console.log(' 9: Re-Write "for" to a "for of" loop ');
for (let i of myArray)
if (i > 0) {
    console.log(i);
}


// 10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array, 
// and if the value of the array at `i` matches the value of 'myValue', also console log 'Hurray!'
console.log(' 10: Re-value the array, Hurray! ');
console.log(myValue);
myValue = 3; // unable to re-declare the value with let, directly changed myValue to now be 3;
console.log(myValue);


// For the following challenges, try to use only for-loops (no reduce or other fancy stuff). You do not
// need anything that we haven't already covered in the content.
// See this gist for some hints: https://gist.github.com/booherbg/e74b2c40d0dd1819e73b3889dfa8172f

// 11. Calculate (and console log) the sum of the numbers in the array.
console.log(' 11: Calculate the sum of the array ');


// 12. Find (and console log) the smallest number in the array.
// hint: Use a loop to iterate through the array, comparing each value to the 'lowest number' so far.
// store this value in a variable, and console log this variable after the for loop is complete.
console.log(' 12: find the lowest number in the array ');


// 13. Calculate (and console log) the sum of the squares of the numbers in the array.
// A square is just a number multiplied by itself (or raised to the second power, which is the same thing)
// example: sum of squares of [1,2,3] = (1*1+2*2+3*3) --> 1+4+9 --> 14

console.log(' 13: Calculate sum of the squared numbers in array ');

// 14. Find (and console log) the first negative number in the array.
// hint: to break out of a loop early, use the 'break'; operation
// https://www.w3schools.com/js/js_break.asp

// 15. Find (and console log) the first even number in the array.
// hint: to see if a number is even, you can divide it by 2 and check the remainder.
// if the remainder is 0, the number is even. if the remainder is 1, the number is odd.
// To calculate the remainder, use the '%' operator.
// For Example:
// let remainder = 10 % 2; // remainder has the value 0 (10 / 2 is 5, with 0 remainder)
// let remainder = 11 % 2; // remainder has the value 1 (11 / 2 is 5, with 1 remainder)
// let remainder = 10 % 4; // remainder has the value 2 (10 / 4 is 2, with 2 remainder)

// 16. Find (and console log) the last even number in the array