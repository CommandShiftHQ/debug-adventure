const Enemy = require('../src/enemy');

describe('enemy', () => {
  let enemy;
  let config;
  beforeEach(() => {
    config = {
      name: 'skeleton',
      health: 10,
      maxHealth: 10,
      dialogue: 'rattle',
    }
    enemy = new Enemy(config);
  });
  describe('constructor function', () => {
    it('returns an object', () => {
      expect(enemy).toBeInstanceOf(Object);
    });
    it('inherits from Character', () => {
      expect(enemy.name).toBe(config.name);
      expect(enemy.health).toBe(config.health);
      expect(enemy.maxHealth).toBe(config.maxHealth);
      expect(enemy.dialogue).toBe(config.dialogue);
    })
  });
});