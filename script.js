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

    addPlayer(playername) {
        let newPlayer = new Player(playername, false)
        this.players.push(newPlayer);
        this.players[0].myTurn = true;

    };
    get_player() {
        if (this.stack == 21) {
            this.players[0].myTurn = true;
        }
        return this.players;
    }
    draw(number) {
        let currentplayer;
        let theotherplayer;
        for (let p = 0; p < this.players.length; p++) {
            let player = this.players[p];

            if (player.myTurn == true) {;
                currentplayer = player;
                this.stack = this.stack - number;
                if (this.stack - number <= 0) {
                    return this.players[p - 1];
                }
                currentplayer.myTurn = false;
            } else {
                theotherplayer = player;
                theotherplayer.myTurn = true;
            }

        }
    }
};
let max_draw = 3;
let game1 = new Game()
game1.addPlayer("Angelika"); // 0
game1.addPlayer("Ali"); // 1
// game1.draw(2);
// console.log(game1.get_player());
console.log(game1.draw(19))
console.log(game1.draw(1))
console.log(game1.draw(1))

console.log(game1.stack)
console.log(game1.get_player());