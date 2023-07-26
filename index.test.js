const {player, game} = require('./index.js');

describe('Tennis Game', () => {

    test('player starts with a score of 0', () => {
        expect(player.score).toBe(0);
    });

    test('game starts with two players, who both have zero points', () => {
        expect(game.player1).toBeDefined();
        expect(game.player2).toBeDefined();
        expect(game.player1.score).toBe(0);
        expect(game.player2.score).toBe(0);
    });

    test('game starts with score "love - love"', () => {
        expect(game.scoreboard).toBe('love - love');
    });
})
