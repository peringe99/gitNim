draw(number) {
    for (let player of this.players) {
        if (player.myTurn == true) {
            if (this.stack - number <= 0) {
                this.stack -= number
                this.throw()
                let test = this.players.find(x => x.myTurn == false);
                prompt(`${test} won the game!`);
            }
        } else {
            this.stack -= number;
            this.throw();
        }

        this.check_player_turn(player);
    }
    this.player_is_active()
};


draw(number) {
    for (let player of this.players) {
        if (player.myTurn == true) {
            this.stack -= number;
            this.throw();
            // console.log('player ' + player.name + ' ' + player.myTurn + ' ' + -number)
            if (this.stack ==0) {
                // console.log('you win ' + player.name + ' ' + player.myTurn)
                let test = this.players.find(x => x.myTurn == false);
                return test;
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
