class Player {
    constructor(score) {
        this.score = score
    }

    scorePoint() {}
}

const player1 = new Player(0);

module.exports = {
    player: new Player(0)
}