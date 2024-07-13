var addGameBtn = document.getElementById('add-a-game');
console.log(addGameBtn);

var addGame = document.querySelector('.add-game');
console.log(addGame);

var input = document.querySelector('.add-game input');
console.log(input);

var addBtn = document.getElementById('add');
console.log(addBtn);


var allGames = document.querySelector('.games');
console.log(allGames);


var allAddedGames = document.querySelectorAll('.game');
console.log(allAddedGames);

// create divisions and append in games

function createGameDivs(headingValue) {
    var newGameDiv = document.createElement('div');

    newGameDiv.setAttribute('class', 'game');

    var heading = document.createElement('h1');

    newGameDiv.appendChild(heading);

    heading.textContent = headingValue;

    allGames.appendChild(newGameDiv);

}


// open a box

addGameBtn.addEventListener('click', function () {
    addGame.style.display = 'flex';
})


addBtn.addEventListener('click', function() {
    var enteredGameName = input.value;
    console.log(enteredGameName);

    addGame.style.display = 'none';

    createGameDivs(enteredGameName);

    allGames.removeChild(allAddedGames[0]);

    input.value = '';

});

