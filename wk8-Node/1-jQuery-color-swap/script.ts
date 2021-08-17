// [x] - Create a "Generate" button element on the DOM
// [x] - Button will Append a div that with two buttons "Yellow" and "Delete"
// [x] - Add css element to the div of red
// [x] - On click for yellow button, background changed to yellow
// [x] - On delete click, div deletes
// [x] - On click for yellow, count the number of times yellow was clicked

let clicks = 0;
$(function () {
    $('#generateButton').on('click', function () {
        clicks++;
        $('.generationField').append(`
        <div class="redBackground">
        <p class="addToCounter">${clicks}</p>
        <input type="button" value="Yellow" class="yellowButton">
        <input type="button" value="Delete" class="deleteButton">
        </div>
       `);
        console.log(clicks);
    });

    // Yellow Button Click Handler
    $('.generationField').on('click', '.yellowButton', changeToYellow);

    // Delete Button Click Handler
    $('.generationField').on('click', '.deleteButton', deleteField);
});

// function on click of yellow button to change css background color to yellow
function changeToYellow (event) {
    const yellowButton = $(event.target);
    yellowButton.closest('div').css('background-color', 'yellow');
}

// function on click of delete button to delete the div element

function deleteField (event) {
    const deleteButton = $(event.target);
    deleteButton.closest('div').remove();
}