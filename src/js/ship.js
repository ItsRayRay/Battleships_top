import Player from "./player.js";
import Map from "./map.js";

export default class ship {   
    constructor(name, size, isHitArr, isSunk, isPlaced) {
        this.name = name;
        this.size = size;
        this.isHitArr = isHitArr;
        this.isPlaced = false;
        this.isSunk = false;
    }

}