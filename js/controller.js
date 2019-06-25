'use strict';

//Here will be the the methods and function that will be controlling the flow of the game.
//This is how all the objects will interact with ech other.


//This will be all global Variables
var playerName = document.getElementById('PlayerName');
var PlayerNameH1 = document.getElementById('Display Name');
//This will be the function the save the players name and start the game.
function handleSubmit(event) {
  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  playerName = document.getElementById('name').value;
  storePlayerName(playerName);
  showPlayerName();
  var newBoard = createBoard();
  createPlayer(playerName);
  boardSetUp(newBoard);
  console.log(Player.allPlayers);
  console.log(newBoard);
}

//This will contain all the game board setup functions
var boardSetUp = function(newBoard){
  newBoard.allPlayers.push(Player.allPlayers[0]);
  newBoard.allPlayers.push(Player.allPlayers[1]);
};

//This is to display the players name
var showPlayerName = function(){
  var displayName = localStorage.getItem('Player Name');
  PlayerNameH1.textContent = displayName;
};
//This will store the players name
var storePlayerName = function(PlayerName){
  localStorage.setItem('Player Name',JSON.stringify(PlayerName));
};
//This the eventlistener
playerName.addEventListener('submit',handleSubmit);
//This is the creation of the game board
var createBoard = function(){
  var newBoard = new Board;
  return newBoard;
};

//This function creates the players and the opponets
var createPlayer = function(playerName){
  var newPlayer = new Player(playerName);
  var bossPlayer = new Player('boss');
};
