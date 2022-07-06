import Map from "./map.js";
import ship from "./ship.js";

export default class Player {
    constructor(name, map, ships, turn) {
        this.name = name;
        this.map = map;
        this.ships = ships;
        this.turn = turn;
    }
        attack = (map, x, y) => {
            if (map.map[x][y] === "🟦" || map.map[x][y] === "⬛") {
                map.map[x][y] = '🟥';
            } else {
                return false;
            }
        }

        placeShip = (map, ship, x, y, direction) => {
            if (direction === "horizontal" ) {
                for (let i = 0; i < ship.size; i++) {

                    map.map[x][y + i] = "⬛";

                } 
            } else {
                for (let i = 0; i < ship.size; i++) {
                    map.map[x + i][y] = "⬛";
                }
            }
        }

        placeShipPc = (map, ship, x, y, direction) => {
            if (direction === "horizontal" ) {
                for (let i = 0; i < ship.size; i++) {

                    map.map[x][y + i] = `<p>🟦&#8205;</p>`;
                   
                } 
            } else {
                for (let i = 0; i < ship.size; i++) {
                    map.map[x + i][y] = ` <p>🟦&#8205;</p>`;
                   
                }
            }
        }

    }

