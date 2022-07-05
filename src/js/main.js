import _, { ceil, indexOf } from "lodash";
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
const playerOne = new player("Player One", mapPlayerOne, allShips, true);
const playerTwo = new player("Player Two", mapPlayerTwo, allShips, false);
const seaMap = document.createElement("div");

console.log(battleship)

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

renderMap()
  if (e.target.innerHTML === "🟧") {
    e.target.innerHTML = "🟦";
  }
});


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
 let setBoats = [carrier, battleship, cruiser, submarine, destroyer];

  let cellIdArray = cellId.split(",");
  let row = cellIdArray[0];
  let col = cellIdArray[1];
  let rowInt = parseInt(row);
  let colInt = parseInt(col);
  let cellTile = e.target.innerHTML;

  let vertOrHoriz = document.querySelector("#rotateButton").innerHTML;

  if ( carrier.isPlaced === false
  ) {
    playerOne.placeShip(mapPlayerOne, setBoats[0], rowInt, colInt, vertOrHoriz);
    document.querySelector("#carrier").style.display = "none";
    e.target.innerHTML = "⬛";
    carrier.isPlaced = true;
    console.log(carrier.isPlaced);
  } else if ( battleship.isPlaced === false)  {
    playerOne.placeShip(mapPlayerOne, setBoats[1], rowInt, colInt, vertOrHoriz);
    document.querySelector("#battleship").style.display = "none";
    e.target.innerHTML = "⬛";
    battleship.isPlaced = true;
    renderMap();
    console.log(setBoats)
  } else if ( cruiser.isPlaced === false) {
    playerOne.placeShip(mapPlayerOne, setBoats[2], rowInt, colInt, vertOrHoriz);
    document.querySelector("#cruiser").style.display = "none";
    e.target.innerHTML = "⬛";
    cruiser.isPlaced = true;
    renderMap();
    console.log(setBoats)
  }
  else if ( submarine.isPlaced === false) {
    playerOne.placeShip(mapPlayerOne, setBoats[3], rowInt, colInt, vertOrHoriz);
    document.querySelector("#submarine").style.display = "none";
    e.target.innerHTML = "⬛";
    submarine.isPlaced = true;
    renderMap();
    console.log(setBoats)
  }

  else if ( destroyer.isPlaced === false) {
    playerOne.placeShip(mapPlayerOne, setBoats[4], rowInt, colInt, vertOrHoriz);
    document.querySelector("#boatSelector").style.display = "none";
    e.target.innerHTML = "⬛";
    destroyer.isPlaced = true;
    document.querySelector("#startButton2").style.display = "block";
    document.querySelector("#rotateButton").style.display = "none";
    document.querySelector("#dropshiptext").textContent = "Ready?"
    renderMap();

  }

});


document.querySelector("#startButton2").addEventListener("click", function () {
  document.querySelector("#startButton2").style.display = "none";
  document.querySelector("#dropshiptext").textContent = "Drop!";
  document.querySelector("#choosePlacement").style.display = "none";
  renderMap();
  renderBattleBoard();
}
);



