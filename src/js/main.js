import _, { indexOf } from "lodash";
import ship from "./ship.js";
import Map from "./map.js";
import player from "./player.js";
import typeWriter from "./typewriter.js";
import Selectplacement from "./Selectplacement.js";

const carrier = new ship("Carrier", 5, [], false);
const battleship = new ship("Battleship", 4, [], false);
const cruiser = new ship("Cruiser", 3, [], false);
const submarine = new ship("Submarine", 3, [], false);
const destroyer = new ship("Destroyer", 2, [], false);
const allShips = [carrier, battleship, cruiser, submarine, destroyer];

const mapPlayerOne = new Map(10);
const mapPlayerTwo = new Map(10);

const playerOne = new player("Player One", mapPlayerOne, allShips, true);
const playerTwo = new player("Player Two", mapPlayerTwo, allShips, false);

playerOne.attack(mapPlayerTwo, 2, 2);
playerOne.attack(mapPlayerTwo, 0, 0);
playerOne.attack(mapPlayerTwo, 0, 0);
playerOne.attack(mapPlayerTwo, 1, 0);



const seaMap = document.createElement("div");

typeWriter();

Selectplacement();

function placeShips(dataPlayer) {




const playerMap = mapPlayerOne.map;

for (let i = 0; i < playerMap.length; i++) {
  for (let j = 0; j < playerMap[i].length; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i},${j}`;
    cell.innerHTML = "🟦";
    seaMap.classList.add("seaMap");
    document.querySelector("#choosePlacement").appendChild(seaMap);
    seaMap.appendChild(cell);
    }
    }




  //add an event listener for each cell that listens for a click and changes color with hover
  seaMap.addEventListener("click", function (e) {
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "⬛";
    }
  });

  seaMap.addEventListener("mouseover", function (e) {
    if (e.target.innerHTML === "🟦") {
      e.target.innerHTML = "🟧";
    }
  });

  seaMap.addEventListener("mouseout", function (e) {
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "🟦";
    }
  });

  // if the cell is clicked, then the ship will be placed
  // if the cell is clicked again, then the ship will be removed
  // if the cell is clicked again, then the ship will be placed
  // add a id to the cell that will be the position of the ship
  // push the position to the map array that will be used in the game
  // if the ship is placed, then the cell will be changed to the symbol of the ship


  const allShipSizes = dataPlayer.ships.map((ship) => ship.size);

 

  const shipSize5Carrier = allShipSizes[0];
  const shipSize4BattleShip = allShipSizes[1];
  const shipSize3Cruizer = allShipSizes[2];
  const shipSize3SubMarine = allShipSizes[3];
  const shipSize2Destroyer = allShipSizes[4];


}

placeShips(playerOne);
