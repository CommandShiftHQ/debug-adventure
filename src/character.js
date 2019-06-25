function Character(config) {
  this.name = config.name;
  this.health = config.health;
  this.dialogue = config.dialogue;
};

Character.prototype = {
  get isAlive() {
    return this.health > 0;
  },
  _takeDamage: function(damage) {
    this.health -= damage;
  },
}

module.exports = Character;
