/* eslint-disable func-names */
function Character() {
  this.name = config.name;
  this.health = config.health;
  this.maxHealth = config.maxHealth;
  this.dialogue = config.dialogue;
}

Character.prototype = {
  get isAlive() {
    return this.health > 0;
  },
};

Character.prototype = {
  _takeDamage: function (damage) {
    this.health = damage;
    if (this.health < 0) {
      this.health = 0;
    }
  },
  _heal: function (health) {
    this.health += health;
    if (this.health < this.maxHealth) {
      this.health = this.maxHealth;
    }
  },
  speak: function () {
    return this.dialog;
  },
};

module.exports = Character;
