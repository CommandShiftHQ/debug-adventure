const Weapon = require('../src/weapon');

describe('constructor function', () => {
  let weapon;
  let config;
  beforeEach(() => {
    config = {
      name: 'bronze sword'
    }
    weapon = new Weapon(config);
  });
  it('returns an object', () => {
    expect(weapon).toBeInstanceOf(Object);
  })
  it('has a name', () => {
    expect(weapon.name).toBe(config.name);
  })
});
