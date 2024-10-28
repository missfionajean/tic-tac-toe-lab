/*------------------------- Constants -------------------------*/


/*--------------------- Variables (state) ---------------------*/

let board = ['','','','','','','','','']

/* 
Board Array Ref:
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8
 */

let turn = 'x' // alternates between 'x' and 'o'
let winner = false // used to check if a win has been acheieved
let tie = false // used for tie message when board full and no win

/*----------------- Cached Element References -----------------*/

const squareEls = document.querySelector('.sqr')
const messageEl = document.querySelector('#message')

/*------------------------- Functions -------------------------*/

const init = () => {

}

/*---------------------- Event Listeners ----------------------*/

init()

// render() [will add this in soon]


/*----------------------- User Stories ------------------------*/

/*
Display an empty tic-tac-toe board when the page is initially displayed.

A player can click on the nine cells to make a move.

Every click will alternate between marking an X and O.

Display whose turn it is (X or O).

The cell cannot be played again once occupied with an X or O.

Provide win logic and display a winning message.

Provide logic for a cat’s game (tie), also displaying a message.

Provide a Reset Game button that will clear the contents of the board.
*/

/*------------------------ Pseudocode -------------------------*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
