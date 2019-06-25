const Character = require('./character'); 

function Enemy(config) {
  Character.call(this, config);
  this.damage = config.damage;
}

module.exports = Enemy;
