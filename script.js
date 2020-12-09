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
        for (let player of this.players) {
            //for (let p = 0; p < this.players.length; p++) {
            //let player = this.players[p];

            if (player.myTurn == true) {
                this.stack = this.stack - number;
                player.myTurn = false;
                if (this.stack <= 0) {
                    return this.players[player - 1];
                }

            } else {
                player.myTurn = true;
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
// game1.draw(18)
// console.log(game1.stack)
// console.log(game1.players)
// game1.draw(1)
// console.log(game1.stack)
// console.log(game1.players)
// game1.draw(1)
// console.log(game1.stack)
// console.log(game1.players)
// game1.draw(1)
// console.log(game1.stack)
// console.log(game1.players)

//console.log(game1.get_player());

document.addEventListener("DOMContentLoaded", function(e) {
    let btn1 = document.getElementById('btn1').innerHTML
    let btn2 = document.getElementById('btn2')
    let btn3 = document.getElementById('btn3')
    console.log(btn1)



    btn1.addEventListener('click', game1.draw(1))
    btn2.addEventListener('click', function(e) {
        game1.draw(2);
    })
    btn3.addEventListener('click', function(e) {
        game1.draw(3);
    })

})