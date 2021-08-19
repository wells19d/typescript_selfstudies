$(onReady);
// Global operation
let operator = '+'; // changed to have + be the default

function onReady() {
  console.log('JQ On Ready');

  // setup click handlers
  $('#equalsButton').on('click', equals);
  $('#allClear').on('click', clearFields);

  $('#plusButton').on('click', function (event) {
    operator = '+';
  });
  $('#minusButton').on('click', function (event) {
    operator = '-';
  });
  $('#multiplyButton').on('click', function (event) {
    operator = '*';
  });
  $('#dividebutton').on('click', function (event) {
    operator = '/';
  });

  // load the display
  displayHistory();
}

function equals(event) {
  const num1 = $('#firstNumber').val();
  const num2 = $('#secondNumber').val();

  console.log(num1, num2, operator);
  if (!num1 || !num2) {
    alert('Please enter the fields');
    return;
  }

  // POST to calculator
  $.ajax({
    method: 'POST',
    url: '/calculator',
    data: {
      num1: num1,
      num2: num2,
      operator: operator,
    },
  }).then(function (response) {
    displayHistory();
    clearFields(operator); // how does this pass through?
  });
}

function clearFields(events) {
  $('#firstNumber').val('');
  $('#secondNumber').val('');
  operator = '+';
}

function displayHistory() {
  $.ajax({
    method: 'GET',
    url: '/history',
  }).then(function (response) {
    console.log('Received response', response);

    $('#history').empty();
    for (let calculation of response) {
      console.log(calculation);
      $('#history').append(`
        <li>
        ${calculation.num1} 
        ${calculation.operator} 
        ${calculation.num2} = 
        ${calculation.result} </li>
        `);

      $('.display').text(calculation.result);
    }
  });
}
