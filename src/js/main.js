import _ from "lodash";
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

playerTwo.attack(mapPlayerOne, 0, 0);
playerOne.attack(mapPlayerTwo, 0, 0);

console.log(mapPlayerOne.map);
console.log(mapPlayerTwo.map);



const seaMap = document.createElement("div")


typeWriter();

Selectplacement();


function placeShips (dataPlayer) {

    mapPlayerOne.map.forEach(row => {
    row.forEach(cell => {

        console.log(cell);
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = "🟦";
        seaMap.classList.add("seaMap");
        document.querySelector("#choosePlacement").appendChild(seaMap);
        seaMap.appendChild(cell);
        
    }   
    )

})
"🟧"
 //add an event listener for each cell that listens for a click and changes color with hover
seaMap.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "🟧") {
        e.target.innerHTML = "⬛";
    }
}
)

seaMap.addEventListener("mouseover", function(e) {
    console.log(e.target);
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "🟦") {
        e.target.innerHTML = "🟧";
    }
})

seaMap.addEventListener("mouseout", function(e) {
    console.log(e.target);
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "🟧") {
        e.target.innerHTML = "🟦";
    }
})

    // if the cell is clicked, then the ship will be placed
    // if the cell is clicked again, then the ship will be removed
    // if the cell is clicked again, then the ship will be placed
    // add a id to the cell that will be the position of the ship
    // push the position to the map array that will be used in the game
    // if the ship is placed, then the cell will be changed to the symbol of the ship

    console.log(dataPlayer)

    console.log(dataPlayer.ships[0].size)
    
    const allShipSizes = dataPlayer.ships.map(ship => ship.size);

    console.log(allShipSizes)

    const shipSize5Carrier = allShipSizes[0];
    const shipSize4BattleShip = allShipSizes[1];
    const shipSize3Cruizer = allShipSizes[2];
    const shipSize3SubMarine = allShipSizes[3];
    const shipSize2Destroyer = allShipSizes[4];

    console.log(shipSize5Carrier)
    console.log(shipSize4BattleShip)
    console.log(shipSize3Cruizer)
    console.log(shipSize3SubMarine)
    console.log(shipSize2Destroyer)




    
}

placeShips(playerOne)