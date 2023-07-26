class Player {
    constructor(score) {
        this.score = score
    }

    scorePoint() {
        this.score++;
    }
}

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    scores = ["love", "15", "30", "40"];
    scoreboard = 'love - love';
    
    getScoreboard() {
        return this.scoreboard;
    }

    updateScoreboard() {
        return `${this.scores[player1.score]} - ${this.scores[player2.score]}`
    }
}

const player1 = new Player(0);
const player2 = new Player(0);

const game = new Game(player1, player2);

module.exports = {
    player: new Player(0),
    game
}
