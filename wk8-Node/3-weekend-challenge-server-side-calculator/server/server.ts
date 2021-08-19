const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Added before GET & POST routes
// app.use(bodyParser.urlencoded({ extended: true })); // trying new method
app.use(express.urlencoded({ extended: true }));

// HTML, CSS, Client JS
app.use(express.static('server/public'));

/*
The incoming will look like:
{
num1: "10",
operator: "+",         probably some type of click listener event...
num2: "20"
}

The Result will look like:
{
10 + 20 = 30
30 - 10 = 20
20 * 20 = 400
400 / 10 = 40
}

GET /calchistory: send the history array of calculations performed
POST /calculator: appects the object with 3 inputs, that the calculation is performed
*/

// Global Data:
let totalHistory = []; // host the history of calculations done

// ---------------------------- Small Functions calling for opp ----------------------------

app.post('/calculator', (req, res) => {
  // take in the object array with the 3 variables, process the equation
  // send back a 201 created.
  console.log(`We received an equation`, req.body);

  const num1 = Number(req.body.num1);
  const operator = req.body.operator;
  const num2 = Number(req.body.num2);
  // aded from live solve
  let result = NaN;

  // Small Functions to be called
  if (operator === '+') {
    result = num1 + num2;
  } // subtracts numbers
  else if (operator === '-') {
    result = num1 - num2;
  } // multiply numbers
  else if (operator === '*') {
    result = num1 * num2;
  } // divides numbers
  else if (operator === '/') {
    result = num1 / num2;
  } // This should never run
  else {
    // added / changed from live solve
    console.log('Invaid Operator:', operator);
    res.status(400).send('Bad operator, try again'); // invalid request
    return;
  }

  // store the results in an array
  const resultObj = {
    // changed name to reduce confusion of reference
    num1, // changed to shorthand just for furture reference to assignment from live solve example
    operator: operator,
    num2: num2,
    result: result,
  };

  totalHistory.push(resultObj);
  console.log(resultObj);
  res.sendStatus(201);
});

// GET & POST Routes
app.get('/history', (req, res) => {
  console.log('Get Total Display');
  res.send(totalHistory);
});

// added from live solve
app.post('/reset', (req, res) => {
  totalHistory = [];
  res.send(204);
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
