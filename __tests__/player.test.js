const Player = require('../src/player');

describe('constructor function', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });
  it('returns an object', () => {
    expect(player).toBeInstanceOf(Object);
  });
});
