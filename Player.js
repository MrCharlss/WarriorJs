class Player {
  constructor() {
    this.health = 30;
  }

  playTurn(warrior) {
    if (this.health > warrior.health()) {
      if (warrior.feel().isEmpty()) {
        warrior.walk();
      } else if (
        warrior
          .feel()
          .getUnit()
          .isBound()
      ) {
        warrior.rescue();
      } else if (
        warrior
          .feel()
          .getUnit()
          .isEnemy()
      ) {
        warrior.attack();
      }
    } else {
      warrior.rest();
    }

    this.health = warrior.health();
    if (this.health == 20) {
      this.health += 1;
    }
  }
}
