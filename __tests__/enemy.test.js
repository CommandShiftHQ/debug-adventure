const Enemy = require('../src/enemy');

describe('constructor function', () => {
  let enemy;
  beforeEach(() => {
    enemy = new Enemy();
  });
  it('returns an object', () => {
    expect(enemy).toBeInstanceOf(Object);
  });
});
