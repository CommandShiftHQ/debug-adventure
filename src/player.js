const Character = require('./character');

function Player(config) {
  Character.call(this, config);
  this.equippedWeapon = null;
}

Player.prototype = Object.create(Character.prototype);

Object.defineProperty(Player.prototype, 'constructor', {
  value: Player,
  enumerable: false,
  writable: true,
});


module.exports = Player;
