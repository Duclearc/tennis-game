const {player, game, Game, Player} = require("./index.js");

describe("Tennis Game", () => {
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

    test('player successfully scores a point', () => {
        player.scorePoint();
        expect(player.score).toBe(1);
    });

    test('player scores twice', () => {
        player.scorePoint();
        expect(player.score).toBe(2);
    })

    test('player one scores, scoreboard shows "15 - love"', () => {
        game.player1.scorePoint();
        game.updateScoreboard();
        expect(game.getScoreboard()).toBe("15 - love");
    });

    test('player two scores, scoreboard shows "15 - 15"', () => {
        game.player2.scorePoint();
        game.updateScoreboard();
        expect(game.getScoreboard()).toBe("15 - 15");
    });

    test('player one wins (not in advantage), scoreboard shows "player one wins"', () => {
        const game1 = new Game(new Player(0), new Player(0));
        game1.player1.scorePoint();
        game1.player1.scorePoint();
        game1.player1.scorePoint();
        game1.player1.scorePoint();
        game1.updateScoreboard();
        expect(game1.getScoreboard()).toBe("player one wins");
    });

    test('player two wins (not in advantage), scoreboard shows "player two wins"', () => {
        const game1 = new Game(new Player(0), new Player(0));
        game1.player2.scorePoint();
        game1.player2.scorePoint();
        game1.player2.scorePoint();
        game1.player2.scorePoint();
        game1.updateScoreboard();
        expect(game1.getScoreboard()).toBe("player two wins");
    });
});
