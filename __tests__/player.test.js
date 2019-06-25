const Player = require('../src/player');

describe('constructor function', () => {
  let player;
  let config;
  beforeEach(() => {
    config = {
      name: 'Hero',
      health: 10,
      maxHealth: 10,
      dialogue: 'Huzzah!',
    };
    player = new Player(config);
  });
  it('returns an object', () => {
    expect(player).toBeInstanceOf(Object);
  });
  it('inherits from character', () => {
    expect(player.name).toBe(config.name);
    expect(player.health).toBe(config.health);
    expect(player.maxHealth).toBe(config.maxHealth);
    expect(player.dialogue).toBe(config.dialogue);
  });
});
