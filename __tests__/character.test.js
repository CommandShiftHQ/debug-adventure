const Character = require('../src/character');

describe('constructor function', () => {
  let character;
  beforeEach(() => {
    character = new Character();
  });
  it('returns an object', () => {
    expect(character).toBeInstanceOf(Object);
  });
});
