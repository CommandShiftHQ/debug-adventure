const Character = require('./character'); 

function Enemy(config) {
  Character.call(this, config);
  this.damage = config.damage;
}

Enemy.prototype = Object.create(Character.prototype);

Object.defineProperty(Enemy.prototype, 'constructor', { 
  value: Enemy, 
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true });

Enemy.prototype.attack = function(target) {
  target.health -= this.damage;
}

module.exports = Enemy;
