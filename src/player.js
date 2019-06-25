const Character = require('./character');

function Player(config) {
  Character.call(this, config);
}

module.exports = Player;
