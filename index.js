//Generate board programatically 

const generateMainBoard = function () {
    const board = document.querySelector(".main-board");
    for (let i = 0; i < 76; i++) {
      board.innerHTML += `<div class='cell'>${i + 1}</div>`;
    }
  };

//create a function that fills an array with 76 items

const fillArray = function () {
    const arr = [];
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1);
    }
    return arr;
  };
  
  //Get the index of a random item on the bingo board
  const getRandomNum = function (range) {
    const randIndex = Math.floor(Math.random() * range.length);
    const random = range.splice(randIndex, 1)[0];
    return random;
  };

  //Make sure the board and generated user boards get the .highlight class if the're involved in the randomised selection
  const generateRandNumber = function (range) {
    const random = getRandomNum(range);
    const randNumDiv = document.getElementById("randNum");
    randNumDiv.innerText = "Number: " + random;
    const cells = document.querySelectorAll(".main-board .cell");
    cells[random - 1].classList.add("highlight");

    const userCells = document.querySelectorAll(".user-board .cell");
    userCells.forEach((cell) => {
      if (parseInt(cell.innerText) === random) {
        cell.classList.add("highlight");
      }
    });
  };

  //This function generates a specified number of user boards depending on what the user puts in the input field
  const generateUserBoards = function () {
    const usersNumber = document.getElementById("usersNumber").value;
    const container = document.querySelector(".container");
    if (parseInt(usersNumber) > 0) {
      for (let i = 0; i < parseInt(usersNumber); i++) {
        const range = fillArray();
        const board = document.createElement("div");
        board.className = "board user-board";
        for (let i = 0; i < 24; i++) {
          const random = getRandomNum(range);
          board.innerHTML += `<div class='cell'>${random}</div>`;
        }
        container.appendChild(board);
      }
    }
  };

  //When the page has loaded the following functions will be called, making the page interactive
  window.onload = function () {
    generateMainBoard();
    const randBtn = document.getElementById("randBtn");
        const range = fillArray();
        randBtn.addEventListener("click", function () {
          generateRandNumber(range);
        });
        const userBoardBtn = document.getElementById("userBoardBtn");
        userBoardBtn.onclick = generateUserBoards;  
  };