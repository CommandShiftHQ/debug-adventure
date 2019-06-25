const Character = require('./character'); 

function Enemy(config) {
  Character.call(this, config);
}

module.exports = Enemy;
