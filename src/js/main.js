import _ from "lodash";
import ship from "./ship.js";
import Map from "./map.js";
import player from "./player.js";
import typeWriter from "./typewriter.js";
import Selectplacement from "./Selectplacement.js";

typeWriter();
Selectplacement();


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


