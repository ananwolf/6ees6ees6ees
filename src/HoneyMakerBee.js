class HoneyMakerBee extends Bee {
  age = 10;
  job = 'make honey';
  honeyPot = 0;
  // Methods
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};
