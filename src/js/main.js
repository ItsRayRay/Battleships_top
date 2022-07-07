import _, { ceil, indexOf, once } from "lodash";
import ship from "./ship.js";
import Map from "./map.js";
import player from "./player.js";
import typeWriter from "./typewriter.js";
import Selectplacement from "./Selectplacement.js";
import renderBattleBoard from "./battleboard.js";

const carrier = new ship("Carrier", 5, [], false, false);
const battleship = new ship("Battleship", 4, [], false, false);
const cruiser = new ship("Cruiser", 3, [], false, false);
const submarine = new ship("Submarine", 3, [], false , false);
const destroyer = new ship("Destroyer", 2, [], false, false);
const allShips = [carrier, battleship, cruiser, submarine, destroyer];
const mapPlayerOne = new Map(10);
const mapPlayerTwo = new Map(10);
const playerOne = new player("Player One", mapPlayerOne, allShips);
const playerTwo = new player("Player Two", mapPlayerTwo, allShips);
const seaMap = document.createElement("div");
const seaMap2 = document.createElement("div");

let gameStart = [false]

//fix delay when placing the ship need to find a good reference for the if statement to run this correctly
// fix the array overflow when placing a ship
// setup turns for the game

// create a function for everything and use callbacks to run the functions
// create a function to render the board
// create a function to place ship
// create a function to attack
// create a function to check if the game is over
// add these functions into the classes where they belong 



document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector("#startButton").style.display = "none";
  const choosePlacement = document.querySelector("#choosePlacement");
  choosePlacement.style.display = "flex";
  const blocks = document.querySelector(".blocks");
  blocks.style.marginTop = "0";
  blocks.style.marginBottom = "0";
});

typeWriter();
Selectplacement();
renderMap()


function renderMap() {
  let mapUpdate = mapPlayerOne.map;
  seaMap.textContent = "";
  for (let i = 0; i < mapUpdate.length; i++) {
    for (let j = 0; j < mapUpdate[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i},${j}`;
      cell.innerHTML = mapUpdate[i][j];
      seaMap.classList.add("seaMap");
      document.querySelector("#choosePlacement").appendChild(seaMap);
      seaMap.appendChild(cell);
    }
  }


}

document
.querySelector("#rotateButton")
.addEventListener("click", function (event) {
  event.preventDefault();
  const rotate = document.querySelector("#rotateButton");
  if (rotate.innerHTML === "horizontal") {
    rotate.innerHTML = "vertical";
  } else {
    rotate.innerHTML = "horizontal";
  }
});




seaMap.addEventListener("click", function (e) {
  
  let cellId = e.target.id;
  let cellIdArray = cellId.split(",");
  let row = cellIdArray[0];
  let col = cellIdArray[1];
  let rowInt = parseInt(row);
  let colInt = parseInt(col);
  let cellTile = e.target.innerHTML;

  let vertOrHoriz = document.querySelector("#rotateButton").innerHTML;
  let setBoats = [carrier, battleship, cruiser, submarine, destroyer];



  if ( playerOne.ships[0].isPlaced === false
  ) {
    playerOne.placeShip(mapPlayerOne,   playerOne.ships[0], rowInt, colInt, vertOrHoriz);
    document.querySelector("#carrier").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[0].isPlaced = true;
  ;
  } else if ( playerOne.ships[1].isPlaced === false)  {
    playerOne.placeShip(mapPlayerOne, playerOne.ships[1], rowInt, colInt, vertOrHoriz);
    document.querySelector("#battleship").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[1].isPlaced = true;
    renderMap();
  
  } else if (   playerOne.ships[2].isPlaced === false) {
    playerOne.placeShip(mapPlayerOne,   playerOne.ships[2], rowInt, colInt, vertOrHoriz);
    document.querySelector("#cruiser").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[2].isPlaced = true;
    renderMap();

  }
  else if (   playerOne.ships[3].isPlaced === false) {
    playerOne.placeShip(mapPlayerOne,   playerOne.ships[3], rowInt, colInt, vertOrHoriz);
    document.querySelector("#submarine").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[3].isPlaced = true;
    renderMap();

  }

  else if (  playerOne.ships[4].isPlaced === false) {
    playerOne.placeShip(mapPlayerOne,  playerOne.ships[4], rowInt, colInt, vertOrHoriz);
    document.querySelector("#boatSelector").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[4].isPlaced = true;
    document.querySelector("#startButton2").style.display = "block";
    document.querySelector("#rotateButton").style.display = "none";
    document.querySelector("#dropshiptext").textContent = "Ready?"
    renderMap();
    pcPlaceShips();
    
  }

});


document.querySelector("#startButton2").addEventListener("click", function () {
  document.querySelector("#startButton2").style.display = "none";
  document.querySelector("#dropshiptext").textContent = "Drop!";
  document.querySelector("#choosePlacement").style.display = "none";
  renderMap();
  renderBattleBoard();
  renderBoardInContainer()
  renderPcBoardInContainer();
  changeSeaMapClass ()
  
}
);

function removeEventListeners() {
  seaMap.removeEventListener("click", function (e) {
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "⬛";
    }
  });
  seaMap.removeEventListener("mouseover", function (e) {
    if (e.target.innerHTML === "🟦") {
      e.target.innerHTML = "🟧";
    }
  });
  seaMap.removeEventListener("mouseout", function (e) {
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "🟦";
    }
  });
}


function renderPcBoardInContainer() {
  let mapUpdate2 = mapPlayerTwo.map;
  gameStart[1] = true;
  removeEventListeners()
  for (let i = 0; i < mapUpdate2.length; i++) {
    for (let j = 0; j < mapUpdate2[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i},${j}`;
      cell.innerHTML = mapUpdate2[i][j];
      seaMap2.classList.add("seaMap2");
      document.querySelector("#seaMapContainerComputer").appendChild(seaMap2);
      seaMap2.appendChild(cell);
    }
  }
}


function renderBoardInContainer() {
  let mapUpdate = mapPlayerOne.map;
  seaMap.textContent = "";

  for (let i = 0; i < mapUpdate.length; i++) {
    for (let j = 0; j < mapUpdate[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i},${j}`;
      cell.innerHTML = mapUpdate[i][j];
      seaMap.classList.add("seaMap");
      document.querySelector("#seaMapContainer").appendChild(seaMap);
      seaMap.appendChild(cell);
    }
  }
}
  


 let playerTurn = true

  seaMap2.addEventListener("click", function (e) {
    if (e.target.innerHTML === "🟦" && playerTurn ) {
      e.target.innerHTML = "🟧";
      swapTurns();
 
    }else if (e.target.innerHTML !== "🟦" && e.target.innerHTML !== "🟧"  && playerTurn) {
      e.target.innerHTML = "💣";
      swapTurns();
      console.log("clicked");
    }
    else {
      setInterval(() => {
        randomAttackMove ()
        swapTurns();
        console.log("playerTurn")
        renderBoardInContainer()
      }, 1000);
    }
  }
  );


  function swapTurns() {
    playerTurn = !playerTurn;
    console.log("swapped")
    console.log(playerTurn)
  }


  function randomAttackMove () {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    playerTwo.attack(mapPlayerOne, row, col)

  }

playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[0], 0, 1, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[1], 6, 6, "horizontal" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[2], 1, 1, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[3],3, 2, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[4], 7, 7, "horizontal" );




