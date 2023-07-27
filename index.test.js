const { Game, Player } = require("./index.js");

function newGame() {
  return new Game(new Player(0), new Player(0));
}

function setGameScore(player1Score = 0, player2Score = 0) {
  const currentGame = newGame();

  while (currentGame.player1.score < player1Score && player1Score > 0) {
    currentGame.player1.scorePoint();
  }
  while (currentGame.player2.score < player2Score && player2Score > 0) {
    currentGame.player2.scorePoint();
  }

  currentGame.updateScoreboard();

  return currentGame;
}

const player = new Player(0);

describe("Tennis Game Initial Setting", () => {
  const game = newGame();

  test("player starts with a score of 0", () => {
    expect(player.score).toBe(0);
  });

  test("game starts with two players, who both have zero points", () => {
    expect(game.player1).toBeDefined();
    expect(game.player2).toBeDefined();
    expect(game.player1.score).toBe(0);
    expect(game.player2.score).toBe(0);
  });

  test('game starts with score "love - love"', () => {
    expect(game.scoreboard).toBe("love - love");
  });
});

describe("Tennis Game Scores", () => {
  test("player successfully scores a point", () => {
    player.scorePoint();
    expect(player.score).toBe(1);
  });

  test("player scores twice", () => {
    player.score = 0;
    player.scorePoint();
    player.scorePoint();
    expect(player.score).toBe(2);
  });

  test('player one scores, scoreboard shows "15 - love"', () => {
    const game = setGameScore(1);
    expect(game.getScoreboard()).toBe("15 - love");
  });

  test('player two scores, scoreboard shows "15 - 15"', () => {
    const game = setGameScore(1, 1);
    expect(game.getScoreboard()).toBe("15 - 15");
  });

  test('player one wins (not in advantage), scoreboard shows "player one wins"', () => {
    const game = setGameScore(4, 0);
    expect(game.getScoreboard()).toBe("player one wins");
  });

  test('player two wins (not in advantage), scoreboard shows "player two wins"', () => {
    const game = setGameScore(0, 4);
    expect(game.getScoreboard()).toBe("player two wins");
  });

  test("game is deuce", () => {
    const game = setGameScore(4, 4);
    expect(game.getScoreboard()).toBe("deuce");
  });
});
