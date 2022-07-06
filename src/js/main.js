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
const seaMap2 = document.createElement("div");

let gameStart = [false]


//fix delay when placing the ship need to find a good reference for the if statement to run this correctly
// fix the array overflow when placing a ship




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
    console.log(  playerOne.ships[0].isPlaced);
  } else if ( playerOne.ships[1].isPlaced === false)  {
    playerOne.placeShip(mapPlayerOne, playerOne.ships[1], rowInt, colInt, vertOrHoriz);
    document.querySelector("#battleship").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[1].isPlaced = true;
    renderMap();
    console.log(setBoats)
  } else if (   playerOne.ships[2].isPlaced === false) {
    playerOne.placeShip(mapPlayerOne,   playerOne.ships[2], rowInt, colInt, vertOrHoriz);
    document.querySelector("#cruiser").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[2].isPlaced = true;
    renderMap();
    console.log(setBoats)
  }
  else if (   playerOne.ships[3].isPlaced === false) {
    playerOne.placeShip(mapPlayerOne,   playerOne.ships[3], rowInt, colInt, vertOrHoriz);
    document.querySelector("#submarine").style.display = "none";
    e.target.innerHTML = "⬛";
    playerOne.ships[3].isPlaced = true;
    renderMap();
    console.log(setBoats)
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


function addEventListeners() {

    if ( destroyer.isPlaced === true) {

  seaMap.addEventListener("click", function (e) {
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "⬛";
    }
  });
  
  seaMap.addEventListener("mouseover", function (e) {
    
    if (e.target.innerHTML === "🟦") {
      e.target.innerHTML = "🟧";
      console.log(e.target.id)
    }
  });
  
  seaMap.addEventListener("mouseout", function (e) {
  
  renderMap()
    if (e.target.innerHTML === "🟧") {
      e.target.innerHTML = "🟦";
    }
  });
}

  
  }
 // addEventListeners();
  

function renderPcBoardInContainer() {
  let mapUpdate2 = mapPlayerTwo.map;
  gameStart[1] = true;
  removeEventListeners()
  console.log(mapUpdate2)

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

seaMap2.addEventListener("click", function (e) {
  if (e.target.innerHTML === "🟦") {
    e.target.innerHTML = "🟧";
    console.log(e.target.id)
  }

});

seaMap2.addEventListener("mouseover", function (e) {
  if (e.target.innerHTML === "🟦") {
    e.target.innerHTML = "🟧";
    console.log(e.target.id)
  }
}
);

seaMap2.addEventListener("mouseout", function (e) {
  if (e.target.innerHTML === "🟧") {
    e.target.innerHTML = "🟦";
  }
}
);


seaMap2.addEventListener("click", function (e) {
  if (e.target.innerHTML !== "🟦" && e.target.innerHTML !== "🟧") {
    e.target.innerHTML = "💣";//
  } else {
    e.target.innerHTML = "❌";
  } if (e.target.innerHTML === "❌") {
}
);



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



playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[0], 0, 1, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[1], 6, 6, "horizontal" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[2], 1, 1, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[3],3, 2, "vertical" );
playerTwo.placeShipPc(mapPlayerTwo, playerTwo.ships[4], 7, 7, "horizontal" );









function pcPlaceShips() {


}


