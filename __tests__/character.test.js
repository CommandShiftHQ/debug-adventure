const Character = require('../src/character');

describe('constructor function', () => {
  let character;
  let config;
  beforeEach(() => {
    config = {
      name: 'npc',
      health: 10,
    }
    character = new Character(config);
  });
  it('returns an object', () => {
    expect(character).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    expect(character.name).toBe(config.name);
  });
  it('has health', () => {
    expect(character.health).toBe(config.health);
  })
});
