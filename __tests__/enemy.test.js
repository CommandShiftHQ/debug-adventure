const Enemy = require('../src/enemy');

describe('enemy', () => {
  let enemy;
  let config;
  let victim;
  beforeEach(() => {
    victim = {
      health: 10,
    }
    config = {
      name: 'skeleton',
      health: 10,
      maxHealth: 10,
      dialogue: 'rattle',
      damage: 2,
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
    it('has a damage rating', () => {
      expect(enemy.damage).toBe(config.damage);
    });
  });
  describe('attack', () => {
    it('can attack a target', () => {
      const victimHealth = victim.health;
      enemy.attack(victim);
      expect(victim.health).toBe(victimHealth - enemy.damage);
    });
  })
});