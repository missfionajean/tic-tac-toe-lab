/*------------------------- Variables -------------------------*/

let board = ["", "", "", "", "", "", "", "", ""];

/* 
Board Array Ref:
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8
 */

let turn = "x"; // alternates between 'x' and 'o'
let turnCount = 0; // for tracking whether game has finished (no win)
let gameEnd = false; // will change to true to lock game out of continuation loop

/*----------------- Cached Element References -----------------*/

const boardEl = document.querySelector(".board");
const messageEl = document.querySelector("#message");

/*------------------------- Functions -------------------------*/

// const init = () => {};

const updateBoard = (event) => {
	if (
		event.target.classList.contains("sqr") &&
		event.target.innerText === ""
	) {
		// upates clicked square visually to match current turn symbol
		event.target.innerText = turn;
		// updates board array in tandem, for win checking purposes
		board[event.target.id] = turn;
        // turnCount increment must go here to ensure tie function works
        turnCount++;
		// must check win before switching 'turn', based on coding of called function
		checkWin();
		if (gameEnd === false) {
			if (turn === "x") {
				turn = "o";
			} else {
				turn = "x";
			}
			changeTurnMessage();
		}
	}
};

const changeTurnMessage = () => {
	if (turn === "x") {
		messageEl.innerText = "It's X's turn!";
	} else {
		messageEl.innerText = "It's O's turn!";
	}
};

const checkWin = () => {
	const winningCombos = [
		[board[0], board[1], board[2]],
		[board[3], board[4], board[5]],
		[board[6], board[7], board[8]],
		[board[0], board[3], board[6]],
		[board[1], board[4], board[7]],
		[board[2], board[5], board[8]],
		[board[0], board[4], board[8]],
		[board[2], board[4], board[6]],
	];
	// cannot use .forEach() here, because you can't break from it
	for (let combo of winningCombos) {
		if (combo[0] === turn && combo[1] === turn && combo[2] === turn) {
			messageEl.innerText = `${turn.toUpperCase()} wins!`;
			boardEl.removeEventListener("click", updateBoard);
			gameEnd = true;
			break;
		} else if (turnCount === 9) {
			messageEl.innerText = "It's a tie...";
			gameEnd = true;
		}
	}
};

// init(); [can be used for reset button, i.e. nesting whole game in this function]

/*---------------------- Listeners/Calls ----------------------*/

boardEl.addEventListener("click", updateBoard);

/*----------------------- User Stories ------------------------*/

/*
+ Display an empty tic-tac-toe board when the page is initially displayed.

+ A player can click on the nine cells to make a move.

+ Every click will alternate between marking an X and O.

+ Display whose turn it is (X or O).

+ The cell cannot be played again once occupied with an X or O.

+ Provide win logic and display a winning message.

+ Provide logic for a cat’s game (tie), also displaying a message.

- Provide a Reset Game button that will clear the contents of the board.
*/

/*------------------------ Pseudocode -------------------------*/

// + 1) Define the required variables used to track the state of the game.

// + 2) Store cached element references.

// + 3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

// + 4) The state of the game should be rendered to the user.

// + 5) Define the required constants.

// + 6) Handle a player clicking a square with a `handleClick` function.

// - 7) Create Reset functionality.
