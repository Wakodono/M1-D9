/*
        BINGO CHALLENGE!!!
        Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
        Create a button to randomize a number . The same number should be highlighted on the bingo board

        EXTRA: 
        - Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
        - Create a USER BOARD with 24 randomized numbers that highlights as the main board does
        - Let the user choose HOW MANY user boards he's willing to play with and create them.
    */

// Title of application

<h1>BINGO</h1>

// Programmatially create 76 cells, from 1 to 76 with a function (createElement)


const createBingoBoard = function(){
    for (let BingoCell = 1; BingoCell <=76; BingoCell++){
        let createBingoCells = document.createElement("div");
        createBingoCells.innerText = BingoCell;
        BingoCell.classList.add("cell");
        
    }
}


//Button to randomize number from 1 to 76

const radomizeNumber = function(){
    let randomNumberButton = document.createElement("button");
    randomNumberButton.innerText = "Random"
    randomNumberButton.onclick = selectCell
}

const selectCell = function(event){
    const currentlySelectedCell = getCurrentlySelectedCell() // Looking for any "selected" cell on Bingo Board
    if (currentlySelectedCell !== null) { // If there is any selected Cell...
        currentlySelectedCell.classList.remove("selected") // ...we remove the "selected" class from it
}

// SELECT DAY CELL THAT HAS BEEN CHOSEN AT RANDOM
const chosenCell = event.target.tagName()  // This give us the HTML element that has been clicked
clickedDayNode.classList.add("selected")    // We apply "selected" class to it


/* Highlight the button on the bingo board (might have to use some basic css on this one). 
Try background colour, border style solid 3px, border color white for example */}

// make sure all functions play out on load with window onload function

window.onload = function(){
    
}