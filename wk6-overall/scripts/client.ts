$(document).ready(readyNow);

let garage = [];
// console.log('What\'s in the garage?', garage);

function newCar() {
  const newCarObject = {
    year: Number,
    make: String,
    model: String,
    value: Number,
    image: String,
  };
  garage.push(newCarObject);
  return true;
};

function totalGarageValue() {
  let totalValue = 0;
  for (let i = 0; i < garage.length; i++) {
    totalValue += Number(garage[i].value);
    console.log('totalValue:', totalValue);
    let el = $('#totalGarageValues');
    el.empty();
    el.append(Object.values(totalValue));
    console.log(garage);
  }
};

function displayCarsInGarage (car) {
  let el = $('#carsListInGarage');
  el.empty();
  for (car of garage) {
    el.append(`<li> ${car.year} ${car.make} ${car.model} $${car.value} <img src= "${car.image}" width="100px" /></li>`);
  }
};

function addCar() {
  let newCar = {
    year: $('#yearInput').val(),
    make: $('#makeInput').val(),
    model: $('#modelInput').val(),
    value: $('#valueInput').val(),
    image: $('#imageInput').val(),
  };
  garage.push(newCar);

  $('#yearInput').val('');
  $('#makeInput').val('');
  $('#modelInput').val('');
  $('#valueInput').val('');
  $('#imageInput').val('');

  totalGarageValue();
  displayCarsInGarage(garage);
};



function readyNow() {
  // console.log('jq is ready');
  $('#addCarToGarage').on('click', addCar);

  $('form > input').keyup(function () {
    let empty = true;
    $('form > input').each(function () {
      if ($(this).val() == '') {
        empty = false;
      }
    });

    if (empty) {
      $('#addCarToGarage').removeAttr('disabled');
    } else {
      $('#addCarToGarage').attr('disabled', 'disabled');
    }
  });

  totalGarageValue();
}