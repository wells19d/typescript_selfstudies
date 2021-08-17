console.log('Here are all the available people:', people);

$(onReady);

let personToFind;

function onReady() {
    displayImages(people);

    guessWho();

    // create click handler to attach to the container and read when an image is clicked with event.targer
    $('.container').on('click', 'img', targetPerson);
} // end of onReady

function targetPerson(event) {
    if ($(event.target).data().name === personToFind) {

        $(event.target).addClass("correct");
        alert('Congratulations!');
        setTimeout(guessWho, 2000);

    } else {
        alert('Wrong!');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function guessWho() {
    shuffle(people);
    displayImages(people);

    let index = randomNumber(0, 8);
    personToFind = people[index].name;
    console.log(index, personToFind);
    $('#randomPerson').text(`Find: ${personToFind}!`);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function displayImages(person) {
    $('.container').empty();
    for (person of people) {
        // console.log('is this firing?');
        // console.log(person);
        $('.container').append(
            `<img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" />`
        );
    }
}