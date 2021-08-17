$(document).ready(nowReady);

let garage = [];
console.log(garage);

function nowReady () {
  console.log('jq ready');
};


const newCarObject = {
  
};
console.log(newCarObject);

/*

+$(document).ready(readyNow);

let garage = [];
// console.log('What\'s in the garage?', garage);

newCar = () => {
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
    value: valueInput,
    image: imageInput,
  };
  garage.push(newCarObject);
  return true;
};

addCar = () => {
  let newCar = {
    year: parseInt($('#yearInput').val()),
    make: $('#makeInput').val(),
    model: $('#modelInput').val(),
    value: parseInt($('#valueInput').val()),
    image: $('#imageInput').val(),
  };
  garage.push(newCar);

  $('#yearInput').val('');
  $('#makeInput').val('');
  $('#modelInput').val('');
  $('#valueInput').val('');
  $('#imageInput').val('');

  totalGarageValue();
  displayCarsInGarage();
};

totalGarageValue = () => {
    let totalValue = 0;
    for (let i = 0; i < garage.length; i++) {
        totalValue += Number(garage[i].value);
        console.log('totalValue:', totalValue);
        let el = $('#totalGarageValues');
        el.empty();
        el.append(totalValue);
        console.log(garage);
    }
};

displayCarsInGarage = () => {
    let el = $('#carsListInGarage');
  el.empty();
  for (car of garage) {
    el.append(`<li> ${car.year} ${car.make} ${car.model} $${car.value} <img src= "${car.image}" width="100px" /></li>`);
  }
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

*/