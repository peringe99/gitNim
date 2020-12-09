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

    draw2(number) {
        let current_player = this.players.forEach((x, index) => {
            if (x.myTurn = true) {
                x.stack = this.stack - number;
                x.myTurn = false;
            }

        })
        return current_player;
    };

    addPlayer(playername) {
        let newPlayer = new Player(playername, false)
        this.players.push(newPlayer);
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
        for (let player of this.players) {
            if (this.stack <= 0) {
                return endgame
            }
            if (player.myTurn == true) {;
                currentplayer = player;
                this.stack = this.stack - number;
                currentplayer.myTurn = false;
            } else {
                theotherplayer = player;
                theotherplayer.myTurn = true;
            }

        }
    }

};

let game1 = new Game()
game1.addPlayer("Angelika");
game1.addPlayer("Ali");
// game1.draw(2);
console.log(game1.get_player());
game1.draw(3)
console.log(game1.stack)
console.log(game1.get_player());