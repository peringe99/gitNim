class Player {
    constructor(name, myTurn) {
        this.name = name;
        this.myTurn = myTurn;
    };
};

class Game {
    constructor() {
        this.players = [];
        this.stack = 21;
    };

    draw(number){
        this.stack =- number;
    };

    addPlayer(playername){
        let newPlayer = new Player(playername, false)
        this.players.push(newPlayer);
    };


};

let game1 = new Game()
game1.addPlayer("Angelika");
game1.addPlayer("Ali");

console.log(game1);