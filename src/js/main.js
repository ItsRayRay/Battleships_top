import _, { ceil, indexOf } from "lodash";
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
const seaMap = document.createElement("div");

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

  // map the array out on the screen and replace it with
  // the ship's length and the ship's name

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
    console.log(cellId);

    let cellIdArray = cellId.split(",");
    let row = cellIdArray[0];
    let col = cellIdArray[1];
    let rowInt = parseInt(row);
    let colInt = parseInt(col);
    let cellTile = e.target.innerHTML;

    let vertOrHoriz = document.querySelector("#rotateButton").innerHTML;

    if (  vertOrHoriz === "vertical"  || cellId === "0,0" ||
      cellId === "0,1" ||
      cellId === "0,2" ||
      cellId === "0,3" ||
      cellId === "0,4" ||
      cellId === "0,5" ||
      cellId === "1,0" ||
      cellId === "1,1" ||
      cellId === "1,2" ||
      cellId === "1,3" ||
      cellId === "1,4" ||
      cellId === "1,5" ||
      cellId === "2,0" ||
      cellId === "2,1" ||
      cellId === "2,2" ||
      cellId === "2,3" ||
      cellId === "2,4" ||
      cellId === "2,5" ||
      cellId === "3,0" ||
      cellId === "3,1" ||
      cellId === "3,2" ||
      cellId === "3,3" ||
      cellId === "3,4" ||
      cellId === "3,5" ||
      cellId === "4,0" ||
      cellId === "4,1" ||
      cellId === "4,2" ||
      cellId === "4,3" ||
      cellId === "4,4" ||
      cellId === "4,5" ||
      cellId === "5,0" ||
      cellId === "5,1" ||
      cellId === "5,2" ||
      cellId === "5,3" ||
      cellId === "5,4" ||
      cellId === "5,5" ||
      cellId === "6,0" ||
      cellId === "6,1" ||
      cellId === "6,2" ||
      cellId === "6,3" ||
      cellId === "6,4" ||
      cellId === "6,5" ||
      cellId === "7,0" ||
      cellId === "7,1" ||
      cellId === "7,2" ||
      cellId === "7,3" ||
      cellId === "7,4" ||
      cellId === "7,5" ||
      cellId === "8,0" ||
      cellId === "8,1" ||
      cellId === "8,2" ||
      cellId === "8,3" ||
      cellId === "8,4" ||
      cellId === "8,5" ||
      cellId === "9,0" ||
      cellId === "9,1" ||
      cellId === "9,2" ||
      cellId === "9,3" ||
      cellId === "9,4" ||
      cellId === "9,5"
    ) {
      playerOne.placeShip(mapPlayerOne, carrier, rowInt, colInt, vertOrHoriz);
      e.target.innerHTML = "⬛";
      
    }



    // if statement if carrier is placed on board place next hand

  
    let mapUpdate = mapPlayerOne.map;
    console.log(mapUpdate);

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
  });


}
placeShips(playerOne);
