export default class Map {
    constructor(size) {
        this.size = size;
        this.map = [];
        for (let i = 0; i < size; i++) {
            this.map[i] = [];
            for (let j = 0; j < size; j++) {
                this.map[i][j] = "🟦";
            }
        }
    }
}


