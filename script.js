class Player {
    constructor(name, myTurn, score) {
        this.name = name;
        this.myTurn = myTurn;
        this.score = score;
    };
};

class Game {
    constructor() {
        this.players = [];
        this.stack = 21;
        this.throw();
    };

    throw () {
        let game_sticks = document.getElementById('game_sticks');
        game_sticks.innerHTML = '';
        for (let i = 0; i < this.stack; i++) {
            game_sticks.innerHTML += `<img src="../images/stick.png" id="stick_${i + 1}" alt="">`;
        }
    };

    addPlayer(playername) {
        let newPlayer = new Player(playername, false);
        this.players.push(newPlayer);
        this.players[0].myTurn = true;
    };

    get_player() {
        return this.players;
    };

    check_player_turn(p) {
        p.myTurn = p.myTurn ? false : true;
    };

    draw(number) {
        for (let player of this.players) {
            if (player.myTurn == true) {
                this.stack -= number;
                this.throw();
                // console.log('player ' + player.name + ' ' + player.myTurn + ' ' + -number)
                if (this.stack <= 0) {
                    // console.log('you win ' + player.name + ' ' + player.myTurn)
                    this.endGame(player)
                }
            } else {
                // player.myTurn = true;
                // this.check_player_turn(player)
                // document.getElementById("player1ID").classList.add("active");
            }
            this.check_player_turn(player);
        }
        this.player_is_active()
    };

    startGame() {
        let player1 = prompt("Name of player one?");
        let player2 = prompt("Name of player two?");
        this.addPlayer(player1);
        this.addPlayer(player2);

        let player_one = document.getElementById("name_one");
        player_one.innerHTML = player1;
        player_one.parentElement.dataset.name = player1;
        let player_two = document.getElementById("name_two");
        player_two.innerHTML = player2;
        player_two.parentElement.dataset.name = player2;
        this.player_is_active();
    };

    player_is_active() {
        let player_active = document.querySelectorAll('.player');
        player_active.forEach((x, index) => {
            x.classList.remove('active');
            if (this.players[index].name == x.dataset.name && this.players[index].myTurn == true) {
                x.classList.add('active');
            }
        })
    };
    endGame(play) {
        alert(`${play.name} har förlorat`)
    }
};


let max_draw = 3;
let count = 21;


document.addEventListener("DOMContentLoaded", function(e) {

    let game1 = new Game();
    game1.startGame();

    // let game_sticks = document.getElementById('game_sticks');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');

    btn1.addEventListener('click', () => { game1.draw(1) });
    btn2.addEventListener('click', () => { game1.draw(2) });
    btn3.addEventListener('click', () => { game1.draw(3) });

    let start_over = document.getElementById("btn_over");

    start_over.addEventListener("click", function() {
        window.location.reload();
    })

    // highscoreBox.addEventListener("click", function(){
    // document.getElementById("highscoreID").style.visibility = "visible";
    // })


    //let btn_choice = document.querySelectorAll(".btn_choice");
    // btn_choice.forEach((x, index) => {
    //     x.addEventListener('click', function(e) {
    //         console.log(count, index + 1);
    //         game1.draw(index + 1);
    //     });
    // });
});

function showHighscore() {
    let high = document.getElementById("highscoreID");
    if (high.style.visibility === "hidden") {
        high.style.visibility = "visible"
    } else {
        high.style.visibility = "hidden"
    }
}