console.log('Function Practice');

// 1. Hello World Function

// the standard function from javascript seems to work just fine.
    // function helloWorld () {
    //     return 'Hello World'
    // }
    // console.log(helloWorld());

// Javascript arrow function however doesn't work the same. 'hello = () => {}',
// the function still needs a helper, let in this case, to assign the arrow function
let hello = () => {
    return 'Hello World';
};
console.log('Test - should say "Hello World!"', hello());

// 2. Personalized Hello World Function

let helloName = (name) => {
    console.log(`Hello, ${name}!`);
    return helloName;
};

helloName('AJ');

// 3. Function to add two numbers

let addNumbers = (num1, num2) => {
let answer = num1 + num2;
console.log(`${num1} + ${num2} = ${answer}`);
return answer;
};
console.log(addNumbers(975, 525));

// 4. Function to multiply 3 numbers

let multiplyThree = (num1, num2, num3) => {
    let answer = num1 * num2 * num3;
    console.log(`${num1} x ${num2} x ${num3} = ${answer}`);
    return answer;
}
console.log(multiplyThree(12,34,56));

// 5. Function that will return true if the number is positive
// or greater than zero, and return false otherwise

let isPositive = (number) => {
    if (number > 0){
      return true;
    } else
      return false;
  }
  // Call the function to test each outcome (true & false) 
  // Write a separate console.log statement for each outcome
  console.log( 'isPositive - should say true', isPositive(3) );
  console.log( 'isPositive - should say false', isPositive(0) );
  console.log( 'isPositive - should say false', isPositive(-3) );

  // 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array =[];
let getLast = (array) => {
  if (array) {
    return array.pop();
  }
  return;
}

console.log(array);
console.log('Last number in array:', getLast(array)); // will be undefined
array.push(1, 2, 3);
console.log(array);
console.log('Last number in array:', getLast(array));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


// This function does not work and needs to be re-written

console.log(array); // first just checking the values of the array

let find = (obj) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    } // end if true statement to search for item in array 
    else {
      return false;
    } // end else false statement to display if item was not found
  } // close of for 
} // close at beginning of function

console.log(find(1)); // this should be true
console.log(find(3)); // this should be false