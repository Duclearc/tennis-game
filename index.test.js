const {player} = require('index.js');

test('player starts with a score of 0', () => {
    expect(player.score).toBe(0);
  });
