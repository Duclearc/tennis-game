class Player {
  constructor(score) {
    this.score = score;
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
  scoreboard = "love - love";
  deuce = "deuce";

  getScoreboard() {
    return this.scoreboard;
  }

  updateScoreboard() {
    if (
      this.player1.score == 4 &&
      this.player2.score == 4
      //   (&& this.player1.score == this.player2.score)
    ) {
      this.scoreboard = this.deuce;
    } else if (this.scoreboard == this.deuce && this.player1.score == 5) {
      this.scoreboard = "player one advantage";
    } else if (this.scoreboard == this.deuce && this.player2.score == 5) {
      this.scoreboard = "player two advantage";
    } else if (this.player1.score >= 4 && this.player1.score > this.player2.score) {
      this.scoreboard = "player one wins";
    } else if (this.player2.score >= 4 && this.player2.score > this.player1.score) {
      this.scoreboard = "player two wins";
    } else {
      this.scoreboard = `${this.scores[this.player1.score]} - ${
        this.scores[this.player2.score]
      }`;
    }
  }

  resetScoreboard() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.updateScoreboard();
  }

  playerOneScores() {
    this.player1.scorePoint();
    this.updateScoreboard();
  }

  playerTwoScores() {
    this.player2.scorePoint();
    this.updateScoreboard();
  }
}

module.exports = {
  Player,
  Game,
};
