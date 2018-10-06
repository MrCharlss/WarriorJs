class Player {
  constructor() {
    this.health = 30;
  }

  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (this.health > warrior.health()) {
        if (warrior.feel().isEmpty()) {
        } else {
        }
      } else {
        warrior.rest();
      }
    } else {
      warrior.attack();
    }

    this.health = warrior.health();
    if (this.health == 20) {
      this.health += 1;
    }
  }
}
