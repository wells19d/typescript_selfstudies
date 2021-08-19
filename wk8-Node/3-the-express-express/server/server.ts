// npm install, npm init -y, npm install express

// create express app
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

// Some trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' },
];

// -- BASE -- //

// 1.
// Create train route here
// when user visits localhost:5000/train
// this route will return an array of trains

// 2. 
// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array

// 3. 
// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array

// -- STRETCH -- //

//4. 
// Create your `/count` route here
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }

// 5.
// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random