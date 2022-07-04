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





const seaMap = document.createElement("div");


document.querySelector("#startButton").addEventListener("click", function () {
    document.querySelector("#startButton").style.display = "none";
   const choosePlacement =   document.querySelector("#choosePlacement")
    choosePlacement.style.display = "flex";
   const blocks =   document.querySelector(".blocks")
   blocks.style.marginTop = "0";
   blocks.style.marginBottom = "0";

    

})

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








  // add event listiener for each cell that listens for a click and console logs the cell id
    seaMap.addEventListener("click", function (e) {Carrier
        let cellId = e.target.id;
        console.log( cellId );

        let cellIdArray = cellId.split(",");
        let row = cellIdArray[0];
        let col = cellIdArray[1];
        let rowInt = parseInt(row);
        let colInt = parseInt(col);

        playerOne.placeShip(mapPlayerOne, carrier, rowInt, colInt, "vertical");
        console.log(mapPlayerOne.map);
        let mapUpdate = mapPlayerOne.map;


    }



    );




  const allShipSizes = dataPlayer.ships.map((ship) => ship.size);
  const shipSize5Carrier = allShipSizes[0];
  const shipSize4BattleShip = allShipSizes[1];
  const shipSize3Cruiser = allShipSizes[2];
  const shipSize3SubMarine = allShipSizes[3];
  const shipSize2Destroyer = allShipSizes[4];






}

placeShips(playerOne);
// playerOne.attack(mapPlayerTwo, 2,2);
// playerOne.attack(mapPlayerTwo, 0,0);
// playerOne.attack(mapPlayerTwo, 0,0);
// playerOne.attack(mapPlayerTwo, 1,0);
// playerTwo.attack(mapPlayerOne, 0,0);


// playerOne.placeShip(mapPlayerOne, carrier, 0, 0, "horizontal");
 console.log(mapPlayerOne.map);


// console.log(mapPlayerTwo.map);