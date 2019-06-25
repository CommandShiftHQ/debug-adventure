const Player = require('../src/player');

describe('constructor function', () => {
  let player;
  let config;
  let sword;
  beforeEach(() => {
    sword = {
      name: 'bronze sword',
      damage: 3,
      attackType: 'slashes',
    };
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
  it('has a weapon slot', () => {
    expect(player).toHaveProperty('equippedWeapon');
  });
  describe('equip', () => {
    it('can equip a weapon', () => {
      player.equip(sword);
      expect(player.equippedWeapon).toEqual(sword);
    });
  });
});
