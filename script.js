class Player {
    constructor(name, myTurn) {
        this.name = name;
        this.myTurn = myTurn;
        this.score = 0;
    };
};

class Game {
    constructor() {
        this.players = [];
        this.stack = 21;
        // this.throw();
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

    throw () {
        console.log("creating sticks1")
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
        console.log(this.players)
    };

    get_player() {
        return this.players;
    };

    check_player_turn(p) {
        p.myTurn = p.myTurn ? false : true;
    };

    draw(number) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].myTurn == true) {
                this.stack -= number;
                this.throw();
                // console.log('player ' + player.name + ' ' + player.myTurn + ' ' + -number)
                if (this.stack <= 0) {
                    console.log('you win ' + this.players[((i + 1) % 2)].name + ' ' + this.players[((i + 1) % 2)].myTurn)
                    this.endGame(this.players[((i + 1) % 2)])
                    this.players[((i + 1) % 2)].score += 2
                    console.log(this.players[((i + 1) % 2)].score)
                }

            } else {
                // player.myTurn = true;
                // this.check_player_turn(player)
                // document.getElementById("player1ID").classList.add("active");
            }
            this.check_player_turn(this.players[i]);
        }
        this.player_is_active()
    };

    startGame() {
        this.stack = 21
        this.throw()
            // let player1 = prompt("Name of player one?");
            // let player2 = prompt("Name of player two?");
            // this.addPlayer(player1);
            // this.addPlayer(player2);

        // let player_one = document.getElementById("name_one");
        // player_one.innerHTML = player1;
        // player_one.parentElement.dataset.name = player1;
        // let player_two = document.getElementById("name_two");
        // player_two.innerHTML = player2;
        // player_two.parentElement.dataset.name = player2;
        // this.player_is_active();
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
        alert(`${play.name} har vunnit`)
    }
};


let max_draw = 3;
let count = 21;

let game1 = new Game();

document.addEventListener("DOMContentLoaded", function(e) {

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
        game1.startGame();
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
    let hig_btn = document.getElementById('hig_btn');
    console.log(hig_btn)
    hig_btn.addEventListener('click', () => { showHighscore() });

});


function showHighscore() {
    let high = document.getElementById("highscoreID");

    if (high.style.visibility === "hidden") {
        high.style.visibility = "visible"
        let player_one_score = document.getElementById("player1score");
        player_one_score.innerHTML = ''




        game1.get_player().forEach(player => {
            console.log(player)
            if (player.score > 0) {
                let span = document.createElement('span');
                let text = document.createTextNode(`${player.name}'s score is ${player.score}`);
                span.appendChild(text)
                player_one_score.appendChild(span);
            }
        })

        // let player_two_score = document.getElementById("player2score");
        // player_two_score.innerHTML = "${player2}'s score is ${player2.score}"
    } else {
        high.style.visibility = "hidden"
    }
}