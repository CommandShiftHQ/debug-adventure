function Character(config) {
  this.name = config.name;
  this.health = config.health;
  this.maxHealth = config.maxHealth;
  this.dialogue = config.dialogue;
};

Character.prototype = {
  get isAlive() {
    return this.health > 0;
  },
  _takeDamage: function(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  },
  _heal: function(health) {
    this.health += health;
  },
}

module.exports = Character;
