console.log('2 - Loops Practice');

console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i = 0; i<6; i++) {
  console.log(i);
}

// TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i = 3; i < 6; i++) {
  console.log(i);
}

// TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i = 2; i < 12; i +=2) {
  console.log(i)
}

// STRETCH: Write a for loop to do a counddown from 5 to 0
console.log('countdown from 5 to 0');
for (let i = 5; i > -1; i--) {
  console.log(i);
}





// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i of stars) {
  console.log(i)
}





// 3. While loops  
console.log('---- 3.1 While loop ----');

// TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let index = 0;
while (index < stars.length) {
  console.log(stars[index]);
  index += 1;
}

// TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let j = -1;
while (j < 5) {
  j++;
  console.log(j)
}

// TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let k = 11;
while (k > 5) {
k--;
console.log(k)
}