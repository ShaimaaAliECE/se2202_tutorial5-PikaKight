let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerName = document.createTextNode(nextPlayer);
document.getElementById('next-lbl').appendChild(playerName);

//This call will create the buttons needed for the gameboard.
let playerIndicator = document.querySelector('b');
let playerText = 'Next Player';
playerIndicator.innerText = playerText;
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td');
    for(i=0; i<cells.length; i++){
        let cellBtn = document.createElement("button");
        cellBtn.className = "cellButtons";
        cellBtn.innerHTML = "[ ]";
        document.getElementById(cells[i].id).appendChild(cellBtn);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    let btnClicked = event.target.id

    document.getElementById(btnClicked).innerHTML = nextPlayer;

    document.getElementById(btnClicked).disabled = true;

    switch (nextPlayer){
        case "X":
            nextPlayer = "O";
            break;
        case "O":
            nextPlayer = "X";
    }

    playerName.remove();
    playerName = document.createTextNode(nextPlayer)
    document.getElementById('next-lbl').appendChild(playerName);




    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        var header = document.createElement('h1');
        header.innerText = "Game Over";
        document.getElementById('game-over-lbl').appendChild(Header);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    
}
